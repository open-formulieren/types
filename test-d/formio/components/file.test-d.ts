import {expectAssignable, expectNotAssignable} from 'tsd';

import {FileComponentSchema, FileUploadData} from '../../../lib';

// Grabbed from test env file upload, URLs obfuscated.
const anUpload: FileUploadData = {
  url: 'http://localhost:8000/api/v2/submissions/files/54cc40ed-f1c4-4206-ba76-76d376ba4c3a',
  data: {
    url: 'http://localhost:8000/api/v2/submissions/files/54cc40ed-f1c4-4206-ba76-76d376ba4c3a',
    form: '',
    name: 'maykin_logo.png',
    size: 8725,
    baseUrl: 'http://localhost:8000/api/v2/',
    project: '',
  },
  name: 'maykin_logo-e0568045-45f6-46d1-909a-8895c5ee061e.png',
  size: 8725,
  type: 'image/png',
  storage: 'url',
  originalName: 'maykin_logo.png',
};

// minimal file component schema
expectAssignable<FileComponentSchema>({
  id: 'yejak',
  type: 'file',
  key: 'someFile',
  label: 'Attachment',
  webcam: false,
  options: {withCredentials: true},
  storage: 'url',
  url: '',
  file: {
    name: '',
    type: [],
    allowedTypesLabels: [],
  },
  filePattern: '*',
});

// Behaviour of single vs. multiple file uploads

const explicitSingleUpload: FileComponentSchema = {
  id: 'yejak',
  type: 'file',
  key: 'someFile',
  label: 'Attachment',
  webcam: false,
  options: {withCredentials: true},
  storage: 'url',
  url: '',
  file: {
    name: '',
    type: [],
    allowedTypesLabels: [],
  },
  filePattern: '*',
  multiple: false,
};
type ExplicitSingleUploadValue = (typeof explicitSingleUpload)['defaultValue'];
expectAssignable<ExplicitSingleUploadValue>([]);
expectAssignable<ExplicitSingleUploadValue>([anUpload]);
expectNotAssignable<ExplicitSingleUploadValue>([anUpload, anUpload]);

const explicitMultipleUpload: FileComponentSchema = {
  id: 'yejak',
  type: 'file',
  key: 'someFile',
  label: 'Attachment',
  webcam: false,
  options: {withCredentials: true},
  storage: 'url',
  url: '',
  file: {
    name: '',
    type: [],
    allowedTypesLabels: [],
  },
  filePattern: '*',
  multiple: true,
};
type ExplicitMultipleUploadValue = (typeof explicitMultipleUpload)['defaultValue'];
expectAssignable<ExplicitMultipleUploadValue>([]);
expectAssignable<ExplicitMultipleUploadValue>([anUpload]);
expectAssignable<ExplicitMultipleUploadValue>([anUpload, anUpload]);

const implicitSingleUpload: FileComponentSchema = {
  id: 'yejak',
  type: 'file',
  key: 'someFile',
  label: 'Attachment',
  webcam: false,
  options: {withCredentials: true},
  storage: 'url',
  url: '',
  file: {
    name: '',
    type: [],
    allowedTypesLabels: [],
  },
  filePattern: '*',
};
type ImplicitSingleUploadValue = (typeof implicitSingleUpload)['defaultValue'];
expectAssignable<ImplicitSingleUploadValue>([]);
expectAssignable<ImplicitSingleUploadValue>([anUpload]);
expectNotAssignable<ImplicitSingleUploadValue>([anUpload, anUpload]);

// Form builder assignability checks

// with additional, file-component specific properties
expectAssignable<FileComponentSchema>({
  id: 'yejak',
  type: 'file',
  key: 'someInput',
  label: 'Some input',
  // builder sets empty URL, backend dynamically makes this non-empty
  webcam: false,
  options: {withCredentials: true},
  storage: 'url',
  url: '',
  file: {
    // vanilla
    name: 'prefix_{{ fileName }}',
    type: ['image/png', 'application/pdf'],
    // custom
    allowedTypesLabels: ['.png', '.pdf'],
  },
  useConfigFiletypes: false, // custom option to dynamically set allowed file types
  registration: {
    informatieobjecttype: '',
    bronorganisatie: '',
    docVertrouwelijkheidaanduiding: '',
    titel: '',
  },
  openForms: {
    translations: {},
  },
  of: {
    image: {
      resize: {
        apply: true,
        width: 2000,
        height: 2000,
      },
    },
  },
  filePattern: 'image/png,application/pdf',
  fileMaxSize: '10MB',
  maxNumberOfFiles: 3, // custom setting
});

// full, correct schema
expectAssignable<FileComponentSchema>({
  id: 'yejak',
  type: 'file',
  webcam: false,
  options: {withCredentials: true},
  storage: 'url',
  url: '',
  // basic tab in builder form
  key: 'someFile',
  label: 'Attachment',
  description: 'A description',
  tooltip: 'A tooltip',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  multiple: false,
  hidden: false,
  clearOnHide: true,
  isSensitiveData: true,
  // advanced tab in builder form
  conditional: {
    show: undefined,
    when: undefined,
    eq: undefined,
  },
  // validation tab in builder form
  validate: {
    required: false,
  },
  translatedErrors: {
    nl: {
      required: 'Je moet een bestand toevoegen!!!',
    },
  },
  errors: {
    // translatedErrors is converted into errors by the backend
    required: 'Je moet een bestand toevoegen!!!',
  },
  // file tab in builder form
  file: {
    name: 'prefix_{{ fileName }}',
    type: ['image/png', 'application/pdf'],
    // custom
    allowedTypesLabels: ['.png', '.pdf'],
  },
  useConfigFiletypes: false, // custom option to dynamically set allowed file types
  of: {
    image: {
      resize: {
        apply: true,
        width: 2000,
        height: 2000,
      },
    },
  },
  filePattern: 'image/png,application/pdf',
  fileMaxSize: '10MB',
  maxNumberOfFiles: 3, // custom setting
  // registration tab in builder form
  registration: {
    informatieobjecttype: '',
    bronorganisatie: '',
    docVertrouwelijkheidaanduiding: 'openbaar',
    titel: '',
  },
  // translations tab in builder form
  openForms: {
    translations: {
      nl: {
        label: 'Bestand toevoegen',
      },
    },
  },
});

// different component type
expectNotAssignable<FileComponentSchema>({
  id: 'yejak',
  type: 'content',
  key: 'someFile',
  label: 'Attachment',
  webcam: false,
  options: {withCredentials: true},
  storage: 'url',
  url: '',
  file: {
    name: '',
    type: [],
    allowedTypesLabels: [],
  },
  filePattern: '*',
});

// using unsupported properties
expectNotAssignable<FileComponentSchema>({
  id: 'yejak',
  type: 'file',
  key: 'someFile',
  label: 'Attachment',
  webcam: false,
  options: {withCredentials: true},
  storage: 's3', // we only support url
  url: '',
  file: {
    name: '',
    type: [],
    allowedTypesLabels: [],
  },
  filePattern: '*',
});

// plugins validator is not relevant for file component
expectNotAssignable<FileComponentSchema>({
  id: 'yejak',
  type: 'file' as const,
  key: 'someFile',
  label: 'Attachment',
  webcam: false as const,
  options: {withCredentials: true} as const,
  storage: 'url' as const,
  url: '' as const,
  file: {
    name: '',
    type: ['image/png'],
    allowedTypesLabels: ['.png'],
  },
  filePattern: 'image/*',
  validate: {
    plugins: ['some-plugin'],
  },
});
