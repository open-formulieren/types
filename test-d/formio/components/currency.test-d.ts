import {expectAssignable, expectNotAssignable} from 'tsd';

import {CurrencyComponentSchema} from '../../../lib/';

// minimal currency component schema
expectAssignable<CurrencyComponentSchema>({
  id: '123',
  type: 'currency',
  key: 'aCurrency',
  label: 'A currency',
  currency: 'EUR',
} as const);

// with additional, number-component specific properties
expectAssignable<CurrencyComponentSchema>({
  id: '123',
  type: 'currency',
  key: 'aCurrency',
  label: 'A currency',
  currency: 'EUR',
  decimalLimit: 3,
  allowNegative: true,
} as const);

// multiple false (implicit) and appropriate default value type
expectAssignable<CurrencyComponentSchema>({
  id: '123',
  type: 'currency',
  key: 'aCurrency',
  label: 'A currency',
  currency: 'EUR',
  defaultValue: 3,
} as const);

// different component type
expectNotAssignable<CurrencyComponentSchema>({
  type: 'textfield',
} as const);

// wrong currency
expectNotAssignable<CurrencyComponentSchema>({
  id: '123',
  type: 'currency',
  key: 'aCurrency',
  label: 'A currency',
  currency: 'dummy',
} as const);

// using unsupported properties
expectNotAssignable<CurrencyComponentSchema>({
  id: '123',
  type: 'currency',
  key: 'aCurrency',
  label: 'A currency',
  currency: 'EUR',
  hideLabel: true,
} as const);

expectNotAssignable<CurrencyComponentSchema>({
  id: '123',
  type: 'currency',
  key: 'aCurrency',
  label: 'A currency',
  currency: 'EUR',
  multiple: true,
  defaultValue: [],
} as const);

// invalid, only the number validators may be assignable
expectNotAssignable<CurrencyComponentSchema>({
  id: '123',
  type: 'currency',
  key: 'aCurrency',
  label: 'A currency',
  currency: 'EUR',
  validate: {
    maxLength: 100,
  },
} as const);

// full, correct schema
expectAssignable<CurrencyComponentSchema>({
  id: '8aosjaw',
  type: 'currency',
  // basic tab in builder form
  label: 'A sample currency',
  currency: 'EUR',
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
      nl: {tooltip: 'bar'},
    },
  },
});

// invalid, multiple true and non-array default value
expectNotAssignable<CurrencyComponentSchema>({
  id: '123',
  type: 'currency',
  key: 'aCurrency',
  label: 'A currency',
  currency: 'EUR',
  multiple: true,
  defaultValue: 2,
});

// invalid, multiple false and array default value
expectNotAssignable<CurrencyComponentSchema>({
  id: '123',
  type: 'currency',
  key: 'aCurrency',
  label: 'A currency',
  currency: 'EUR',
  multiple: false,
  defaultValue: [1],
});

// invalid, multiple true and wrong default value in array element
expectNotAssignable<CurrencyComponentSchema>({
  id: '123',
  type: 'currency',
  key: 'aCurrency',
  label: 'A currency',
  currency: 'EUR',
  multiple: true,
  defaultValue: ['a string and not a number'],
});
