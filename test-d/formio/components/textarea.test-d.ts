import {expectAssignable, expectNotAssignable} from 'tsd';

import {TextareaComponentSchema} from '../../../dist/';

// minimal textarea component schema
expectAssignable<TextareaComponentSchema>({
  id: 'yejak',
  type: 'textarea',
  key: 'someInput',
  label: 'Some input',
  rows: 3,
  autoExpand: true,
});

// multiple false and appropriate default value type
expectAssignable<TextareaComponentSchema>({
  id: 'yejak',
  type: 'textarea',
  key: 'someEmail',
  label: 'Some input',
  rows: 3,
  autoExpand: true,
  multiple: false,
  defaultValue: '',
});

// multiple true and appropriate default value type
expectAssignable<TextareaComponentSchema>({
  id: 'yejak',
  type: 'textarea',
  key: 'someEmail',
  label: 'Some input',
  rows: 3,
  autoExpand: true,
  multiple: true,
  defaultValue: [''],
});

// full, correct schema
expectAssignable<TextareaComponentSchema>({
  id: 'yejak',
  type: 'textarea',
  // basic tab in builder form
  label: 'Some input',
  rows: 3,
  autoExpand: true,
  key: 'someInput',
  description: 'A description',
  tooltip: 'A tooltip',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  multiple: false,
  hidden: false,
  clearOnHide: true,
  isSensitiveData: false,
  defaultValue: '',
  autocomplete: 'name',
  disabled: false,
  placeholder: '',
  showCharCount: true,
  // advanced tab in builder form
  conditional: {
    show: undefined,
    when: undefined,
    eq: undefined,
  },
  // validation tab in builder form
  validate: {
    required: false,
    plugins: undefined,
    maxLength: 20,
    pattern: '',
  },
  translatedErrors: {
    nl: {
      required: 'Je moet een waarde opgeven!!!',
      maxLength: 'Een maximale lengte.',
    },
  },
  errors: {
    // translatedErrors is converted into errors by the backend
    required: 'Je moet een waarde opgeven!!!',
    maxLength: 'Een maximale lengte.',
  },
  // translations tab in builder form
  openForms: {
    translations: {
      nl: {
        label: 'foo',
        description: 'bar',
      },
    },
  },
});

// different component type
expectNotAssignable<TextareaComponentSchema>({
  type: 'fieldset',
});

// using unsupported properties
expectNotAssignable<TextareaComponentSchema>({
  id: 'yejak',
  type: 'textarea',
  key: 'someInput',
  label: 'Some input',
  rows: 3,
  autoExpand: true,
  hideLabel: true,
});

// incorrect, invalid validator key
expectNotAssignable<TextareaComponentSchema>({
  id: 'yejak',
  type: 'textarea',
  key: 'someInput',
  label: 'Some input',
  rows: 3,
  autoExpand: true,
  validate: {
    min: 3,
  },
});

// invalid, multiple true and non-array default value
expectNotAssignable<TextareaComponentSchema>({
  id: 'yejak',
  type: 'textarea',
  key: 'textarea',
  label: 'Some textarea',
  rows: 3,
  autoExpand: true,
  multiple: true,
  defaultValue: '',
});

// invalid, multiple false and array default value
expectNotAssignable<TextareaComponentSchema>({
  id: 'yejak',
  type: 'textarea',
  key: 'textarea',
  label: 'Some textarea',
  rows: 3,
  autoExpand: true,
  multiple: false,
  defaultValue: [''],
});

// invalid, multiple true and wrong default value in array element
expectNotAssignable<TextareaComponentSchema>({
  id: 'yejak',
  type: 'textarea',
  key: 'textarea',
  label: 'Some textarea',
  rows: 3,
  autoExpand: true,
  multiple: true,
  defaultValue: [0],
});

// invalid, with prefill
expectNotAssignable<TextareaComponentSchema>({
  id: 'yejak',
  type: 'textarea',
  key: 'someInput',
  label: 'Some input',
  prefill: {
    plugin: '',
    attribute: '',
    identifierRole: 'main',
  },
  rows: 3,
  autoExpand: true,
});
