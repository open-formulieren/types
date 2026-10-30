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
});

// unlimited number of file uploads allowed
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
  validate: {
    maxLength: null,
  },
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
  openForms: {
    useConfigFiletypes: false, // custom option to dynamically set allowed file types
    translations: {},
    image: {
      resize: {
        apply: true,
        width: 2000,
        height: 2000,
      },
    },
  },
  fileMaxSize: '10MB',
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
    maxLength: 3, // use to be a custom setting
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
    type: [
      'image/png',
      'application/pdf',
      'application/application/vnd.oasis.opendocument.*,application/vnd.stardivision.*,application/vnd.sun.xml.*',
      'application/zip,application/zip-compressed,application/x-zip-compressed',
    ],
    // custom
    allowedTypesLabels: ['.png', '.pdf', 'Open Office', '.zip'],
  },
  fileMaxSize: '10MB',
  // (mostly) translations tab in builder form
  openForms: {
    useConfigFiletypes: false, // custom option to dynamically set allowed file types
    image: {
      resize: {
        apply: true,
        width: 2000,
        height: 2000,
      },
    },
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
});

// using unsupported properties
expectNotAssignable<FileComponentSchema>({
  id: 'yejak',
  type: 'file' as const,
  key: 'someFile',
  label: 'Attachment',
  file: {
    name: '',
    type: [],
    allowedTypesLabels: [],
  },
  maxNumberOfFiles: 3, // move to validate.maxLength
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
  validate: {
    plugins: ['some-plugin'],
  },
});
