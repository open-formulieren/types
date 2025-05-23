import {expectAssignable, expectNotAssignable} from 'tsd';

import {AddressNLComponentSchema} from '../../../lib';

// minimal Address (NL) component schema
expectAssignable<AddressNLComponentSchema>({
  id: 'yejak',
  type: 'addressNL',
  key: 'someAddressNL',
  label: 'Some AddressNL',
  deriveAddress: false,
  layout: 'doubleColumn',
});

// appropriate default value type
expectAssignable<AddressNLComponentSchema>({
  id: 'yejak',
  type: 'addressNL',
  key: 'someAddressNL',
  label: 'Some AddressNL',
  deriveAddress: false,
  layout: 'doubleColumn',
  defaultValue: {
    postcode: '',
    houseNumber: '',
    houseLetter: '',
    houseNumberAddition: '',
    city: '',
    streetName: '',
    secretStreetCity: '',
    autoPopulated: false,
  },
});

// full, correct schema
expectAssignable<AddressNLComponentSchema>({
  id: 'yejak',
  type: 'addressNL',
  // basic tab
  label: 'Some AddressNL',
  key: 'someAddressNL',
  description: '',
  tooltip: 'A tooltip',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  hidden: false,
  clearOnHide: true,
  isSensitiveData: true,
  deriveAddress: false,
  layout: 'doubleColumn',
  // Advanced tab
  conditional: {
    show: undefined,
    when: '',
    eq: '',
  },
  // Validation tab
  validate: {
    required: false,
    plugins: [],
  },
  translatedErrors: {nl: {required: 'Geef email.'}},
  errors: {required: 'Geef email.'},
  // registration tab
  registration: {
    attribute: '',
  },
  // translations tab in builder form
  openForms: {
    translations: {
      nl: {label: 'foo'},
    },
  },
  // fixed but not editable
});

// Non supported keys
expectNotAssignable<AddressNLComponentSchema>({
  id: 'yejak',
  type: 'addressNL',
  key: 'someAddressNL',
  label: 'Some AddressNL',
  validateOn: 'change',
  disabled: true,
  placeholder: '',
  hideLabel: true,
  deriveAddress: false,
  layout: 'doubleColumn',
} as const);
