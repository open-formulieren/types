import {expectAssignable, expectNotAssignable} from 'tsd';

import {IbanComponentSchema} from '../../../dist';

// minimal iban component schema
expectAssignable<IbanComponentSchema>({
  id: 'yejak',
  type: 'iban',
  key: 'someIban',
  label: 'Some IBAN',
  validateOn: 'blur',
});

// multiple false and appropriate default value type
expectAssignable<IbanComponentSchema>({
  id: 'yejak',
  type: 'iban',
  key: 'someIban',
  label: 'Some IBAN',
  validateOn: 'blur',
  multiple: false,
  defaultValue: '',
});

// multiple true and appropriate default value type
expectAssignable<IbanComponentSchema>({
  id: 'yejak',
  type: 'iban',
  key: 'someIban',
  label: 'Some IBAN',
  validateOn: 'blur',
  multiple: true,
  defaultValue: [''],
});

// full, correct schema
expectAssignable<IbanComponentSchema>({
  id: 'yejak',
  type: 'iban',
  // basic tab
  label: 'Some IBAN',
  key: 'someIban',
  description: '',
  tooltip: 'A tooltip',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  multiple: false,
  hidden: false,
  clearOnHide: true,
  isSensitiveData: true,
  defaultValue: '',
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
  translatedErrors: {nl: {required: 'Geef IBAN.'}},
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
  validateOn: 'blur',
});

// validateOn not `blur`
expectNotAssignable<IbanComponentSchema>({
  id: 'yejak',
  type: 'iban',
  key: 'someIban',
  label: 'Some IBAN',
  validateOn: 'change',
});

// missing validateOn
expectNotAssignable<IbanComponentSchema>({
  id: 'yejak',
  type: 'iban',
  key: 'someIban',
  label: 'Some IBAN',
});

// invalid, multiple true and non-array default value
expectNotAssignable<IbanComponentSchema>({
  id: 'yejak',
  type: 'iban',
  key: 'someIban',
  label: 'Some IBAN',
  validateOn: 'blur',
  multiple: true,
  defaultValue: '',
});

// invalid, multiple false and array default value
expectNotAssignable<IbanComponentSchema>({
  id: 'yejak',
  type: 'iban',
  key: 'someIban',
  label: 'Some IBAN',
  validateOn: 'blur',
  multiple: false,
  defaultValue: [''],
});

// invalid, multiple true and wrong default value in array element
expectNotAssignable<IbanComponentSchema>({
  id: 'yejak',
  type: 'iban',
  key: 'someIban',
  label: 'Some IBAN',
  validateOn: 'blur',
  multiple: true,
  defaultValue: [0],
});

expectNotAssignable<IbanComponentSchema>({
  id: 'yejak',
  type: 'iban',
  key: 'someIban',
  label: 'Some IBAN',
  validateOn: 'blur',
  placeholder: '',
} as const);
