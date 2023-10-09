import {expectAssignable, expectNotAssignable} from 'tsd';

import {TextFieldComponentSchema} from '../../../lib/';

// minimal textfield component schema
expectAssignable<TextFieldComponentSchema>({
  id: 'yejak',
  type: 'textfield',
  key: 'someInput',
  label: 'Some input',
});

// with additional, textfield-component specific properties
expectAssignable<TextFieldComponentSchema>({
  id: 'yejak',
  type: 'textfield',
  key: 'someInput',
  label: 'Some input',
  showCharCount: true,
  autocomplete: 'name',
  deriveStreetName: true,
  deriveCity: true,
  derivePostcode: 'postcode',
  deriveHouseNumber: 'number',
});

// multiple false and appropriate default value type
expectAssignable<TextFieldComponentSchema>({
  id: 'yejak',
  type: 'textfield',
  key: 'someEmail',
  label: 'Some input',
  multiple: false,
  defaultValue: '',
});

// multiple true and appropriate default value type
expectAssignable<TextFieldComponentSchema>({
  id: 'yejak',
  type: 'textfield',
  key: 'someEmail',
  label: 'Some input',
  multiple: true,
  defaultValue: [''],
});

// full, correct schema
expectAssignable<TextFieldComponentSchema>({
  id: 'yejak',
  type: 'textfield',
  // basic tab in builder form
  label: 'Some input',
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
  // location tab in builder form
  deriveStreetName: true,
  deriveCity: true,
  derivePostcode: 'postcode',
  deriveHouseNumber: 'number',
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
  // registration tab in builder form
  registration: {
    attribute: '',
  },
  // prefill tab in builder form
  prefill: {
    plugin: '',
    attribute: '',
    identifierRole: 'main',
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
expectNotAssignable<TextFieldComponentSchema>({
  type: 'fieldset',
});

// using unsupported properties
expectNotAssignable<TextFieldComponentSchema>({
  id: 'yejak',
  type: 'textfield',
  key: 'someInput',
  label: 'Some input',
  hideLabel: true,
});

// incorrect, invalid validator key
expectNotAssignable<TextFieldComponentSchema>({
  id: 'yejak',
  type: 'textfield',
  key: 'someInput',
  label: 'Some input',
  validate: {
    min: 3,
  },
});

// invalid, multiple true and non-array default value
expectNotAssignable<TextFieldComponentSchema>({
  id: 'yejak',
  type: 'textfield',
  key: 'textfield',
  label: 'Some textfield',
  multiple: true,
  defaultValue: '',
});

// invalid, multiple false and array default value
expectNotAssignable<TextFieldComponentSchema>({
  id: 'yejak',
  type: 'textfield',
  key: 'textfield',
  label: 'Some textfield',
  multiple: false,
  defaultValue: [''],
});

// invalid, multiple true and wrong default value in array element
expectNotAssignable<TextFieldComponentSchema>({
  id: 'yejak',
  type: 'textfield',
  key: 'textfield',
  label: 'Some textfield',
  multiple: true,
  defaultValue: [0],
});
