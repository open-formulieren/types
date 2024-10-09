import {expectAssignable, expectNotAssignable} from 'tsd';

import {ProductPriceComponentSchema} from '../../../lib/';

// minimal productPrice component schema
expectAssignable<ProductPriceComponentSchema>({
  id: '123',
  type: 'productPrice',
  key: 'aProductPrice',
  label: 'A Product Price',
} as const);

// different component type
expectNotAssignable<ProductPriceComponentSchema>({
  type: 'textfield',
} as const);

// using unsupported properties
expectNotAssignable<ProductPriceComponentSchema>({
  id: '123',
  type: 'productPrice',
  key: 'aProductPrice',
  label: 'A Product Price',
  hideLabel: true,
} as const);

// No defaultValue allowed
expectNotAssignable<ProductPriceComponentSchema>({
  id: '123',
  type: 'productPrice',
  key: 'aProductPrice',
  label: 'A Product Price',
  defaultValue: 1,
});

// full, correct schema
expectAssignable<ProductPriceComponentSchema>({
  id: '8aosjaw',
  type: 'productPrice',
  // basic tab in builder form
  key: 'aProductPrice',
  label: 'A Product Price',
  description: 'Sample description',
  tooltip: 'A tooltip',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  // multiple: false,
  hidden: false,
  clearOnHide: true,
  isSensitiveData: false,
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
  },
  translatedErrors: {
    nl: {
      required: 'Je moet een waarde opgeven!!!',
    },
  },
  errors: {
    // translatedErrors is converted into errors by the backend
    required: 'Je moet een waarde opgeven!!!',
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
