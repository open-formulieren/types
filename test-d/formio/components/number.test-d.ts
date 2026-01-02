import {expectAssignable, expectNotAssignable} from 'tsd';

import {NumberComponentSchema} from '../../../dist/';

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

// no defaultValue, but using formio.js default of `null`
expectAssignable<NumberComponentSchema>({
  id: '123',
  type: 'number',
  key: 'aNumber',
  label: 'A number',
  defaultValue: null,
});

// multiple false (implicit) and appropriate default value type
expectAssignable<NumberComponentSchema>({
  id: '123',
  type: 'number',
  key: 'aNumber',
  label: 'A number',
  defaultValue: 3,
});

// different component type
expectNotAssignable<NumberComponentSchema>({
  type: 'textfield' as const,
});

// using unsupported properties
expectNotAssignable<NumberComponentSchema>({
  id: '123',
  type: 'number' as const,
  key: 'aNumber',
  label: 'A number',
  hideLabel: true,
});

// no multiple support -> no array defaultValue
expectNotAssignable<NumberComponentSchema>({
  id: '123',
  type: 'number' as const,
  key: 'aNumber',
  label: 'A number',
  defaultValue: [],
});

expectNotAssignable<NumberComponentSchema>({
  id: '123',
  type: 'number' as const,
  key: 'aNumber',
  label: 'A number',
  multiple: true,
  defaultValue: [],
});

// invalid, only the number validators may be assignable
expectNotAssignable<NumberComponentSchema>({
  id: '123',
  type: 'number' as const,
  key: 'aNumber',
  label: 'A number',
  validate: {
    maxLength: 100,
  },
});

// full, correct schema
expectAssignable<NumberComponentSchema>({
  id: '8aosjaw',
  type: 'number',
  // basic tab in builder form
  label: 'A sample number',
  key: 'test',
  description: 'Sample description',
  tooltip: 'A tooltip',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  // multiple: false,
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
      nl: {suffix: 'foo', tooltip: 'bar'},
    },
  },
});
