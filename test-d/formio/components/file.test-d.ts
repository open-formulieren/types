import {expectAssignable, expectNotAssignable} from 'tsd';

import {FileComponentSchema} from '../../../dist';

// minimal file component schema
expectAssignable<FileComponentSchema>({
  id: 'yejak',
  type: 'file',
  key: 'someFile',
  label: 'Attachment',
  file: {
    name: '',
    type: [],
    allowedTypesLabels: [],
  },
  filePattern: '*',
});

// Form builder assignability checks

// with additional, file-component specific properties
expectAssignable<FileComponentSchema>({
  id: 'yejak',
  type: 'file',
  key: 'someInput',
  label: 'Some input',
  // builder sets empty URL, backend dynamically makes this non-empty
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
  // (mostly) translations tab in builder form
  openForms: {
    softRequired: true,
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
  storage: 's3', // we only support url
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
