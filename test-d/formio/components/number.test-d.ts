import {expectAssignable, expectNotAssignable} from 'tsd';

import {NumberComponentSchema} from '../../../lib/';

// minimal number component schema
expectAssignable<NumberComponentSchema>({
  id: '123',
  type: 'number',
  key: 'aNumber',
  label: 'A number',
});

// with additional, number-component specific properties
expectAssignable<NumberComponentSchema>({
  id: '123',
  type: 'number',
  key: 'aNumber',
  label: 'A number',
  decimalLimit: 3,
  allowNegative: true,
});

// different component type
expectNotAssignable<NumberComponentSchema>({
  type: 'textfield',
});

// using unsupported properties
expectNotAssignable<NumberComponentSchema>({
  id: '123',
  type: 'number',
  key: 'aNumber',
  label: 'A number',
  hideLabel: true,
});

// full, correct schema
expectAssignable<NumberComponentSchema>({
  id: '8aosjaw',
  type: 'number',
  // basic tab in builder form
  label: 'A sample number',
  key: 'test',
  description: 'Sample description',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  multiple: false,
  hidden: false,
  clearOnHide: true,
  isSensitiveData: false,
  defaultValue: undefined,
  decimalLimit: undefined,
  allowNegative: false,
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
    min: undefined,
    max: undefined,
  },
  translatedErrors: {
    nl: {
      required: 'Je moet een waarde opgeven!!!',
      min: 'Je kan niet minder dan 1 dag per week bestaan.',
    },
  },
  errors: {
    // translatedErrors is converted into errors by the backend
    required: 'Je moet een waarde opgeven!!!',
    min: 'Je kan niet minder dan 1 dag per week bestaan.',
  },
  // registration tab in builder form
  registration: {
    attribute: '',
  },
  // translations tab in builder form
  openForms: {
    translations: {
      nl: [{literal: 'foo', translation: 'bar'}],
    },
  },
});
