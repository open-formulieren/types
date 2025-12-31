import {expectAssignable, expectNotAssignable} from 'tsd';

import {PhoneNumberComponentSchema} from '../../../dist/';

// minimal textfield component schema
expectAssignable<PhoneNumberComponentSchema>({
  id: 'yejak',
  type: 'phoneNumber',
  key: 'someInput',
  label: 'Some input',
  inputMask: null,
});

// with additional, phonenumber-component specific properties
expectAssignable<PhoneNumberComponentSchema>({
  id: 'yejak',
  type: 'phoneNumber',
  key: 'someInput',
  label: 'Some input',
  inputMask: null,
  placeholder: 'tel',
});

// multiple false and appropriate default value type
expectAssignable<PhoneNumberComponentSchema>({
  id: 'yejak',
  type: 'phoneNumber',
  key: 'someInput',
  label: 'Some input',
  inputMask: null,
  multiple: false,
  defaultValue: '',
});
// multiple true and appropriate default value type
expectAssignable<PhoneNumberComponentSchema>({
  id: 'yejak',
  type: 'phoneNumber',
  key: 'someInput',
  label: 'Some input',
  inputMask: null,
  multiple: true,
  defaultValue: [''],
});

// full, correct schema
expectAssignable<PhoneNumberComponentSchema>({
  id: 'yejak',
  type: 'phoneNumber',
  inputMask: null,
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
  isSensitiveData: true,
  defaultValue: '',
  autocomplete: 'tel',
  // advanced tab in builder form
  conditional: {
    show: undefined,
    when: undefined,
    eq: undefined,
  },
  // validation tab in builder form
  validate: {
    required: false,
    plugins: ['phonenumber-international'],
    pattern: '',
  },
  translatedErrors: {
    nl: {
      required: 'Je moet een waarde opgeven!!!',
      pattern: 'Enkel getallen toegestaan.',
    },
  },
  errors: {
    // translatedErrors is converted into errors by the backend
    required: 'Je moet een waarde opgeven!!!',
    pattern: 'Enkel getallen toegestaan.',
  },
  // registration tab in builder form
  registration: {
    attribute: '',
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
expectNotAssignable<PhoneNumberComponentSchema>({
  id: 'yejak',
  type: 'textfield',
  key: 'someInput',
  label: 'Some input',
  inputMask: null,
} as const);

// using unsupported properties
expectNotAssignable<PhoneNumberComponentSchema>({
  id: 'yejak',
  type: 'phoneNumber',
  key: 'someInput',
  label: 'Some input',
  inputMask: null,
  showCharCount: true,
} as const);

// incorrect, invalid validator key
expectNotAssignable<PhoneNumberComponentSchema>({
  id: 'yejak',
  type: 'phoneNumber',
  key: 'someInput',
  label: 'Some input',
  inputMask: null,
  validate: {
    maxLength: 100,
  },
} as const);

// invalid, multiple true and non-array default value
expectNotAssignable<PhoneNumberComponentSchema>({
  id: 'yejak',
  type: 'phoneNumber',
  key: 'someInput',
  label: 'Some input',
  inputMask: null,
  multiple: true,
  defaultValue: '',
} as const);

// invalid, multiple false and array default value
expectNotAssignable<PhoneNumberComponentSchema>({
  id: 'yejak',
  type: 'phoneNumber',
  key: 'someInput',
  label: 'Some input',
  inputMask: null,
  multiple: false,
  defaultValue: [''],
} as const);

// invalid, multiple true and wrong default value in array element
expectNotAssignable<PhoneNumberComponentSchema>({
  id: 'yejak',
  type: 'phoneNumber',
  key: 'someInput',
  label: 'Some input',
  inputMask: null,
  multiple: true,
  defaultValue: [123],
} as const);
