import {expectAssignable, expectNotAssignable} from 'tsd';

import {BsnComponentSchema} from '../../../dist/';

// minimal bsn component schema
expectAssignable<BsnComponentSchema>({
  id: 'yejak',
  type: 'bsn',
  key: 'someInput',
  label: 'Some input',
  inputMask: '999999999',
  validateOn: 'blur',
});

// multiple false and appropriate default value type
expectAssignable<BsnComponentSchema>({
  id: 'yejak',
  type: 'bsn',
  key: 'someInput',
  label: 'Some input',
  inputMask: '999999999',
  validateOn: 'blur',
  multiple: false,
  defaultValue: '123456789',
});

// multiple true and appropriate default value type
expectAssignable<BsnComponentSchema>({
  id: 'yejak',
  type: 'bsn',
  key: 'someInput',
  label: 'Some input',
  inputMask: '999999999',
  validateOn: 'blur',
  multiple: true,
  defaultValue: ['123456789'],
});

// full, correct schema
expectAssignable<BsnComponentSchema>({
  id: 'yejak',
  type: 'bsn',
  validateOn: 'blur',
  // basic tab in builder form
  label: 'Some input',
  inputMask: '999999999',
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
  disabled: false,
  // advanced tab in builder form
  conditional: {
    show: undefined,
    when: undefined,
    eq: undefined,
  },
  // validation tab in builder form
  validate: {
    required: false,
    plugins: [],
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
expectNotAssignable<BsnComponentSchema>({
  id: 'yejak',
  type: 'textfield',
  key: 'someInput',
  label: 'Some input',
  inputMask: '999999999',
  validateOn: 'blur',
} as const);

// using unsupported properties
expectNotAssignable<BsnComponentSchema>({
  id: 'yejak',
  type: 'bsn',
  key: 'someInput',
  label: 'Some input',
  inputMask: '999999999',
  validateOn: 'blur',
  placeholder: 'no placeholder',
} as const);

// incorrect, invalid validator key
expectNotAssignable<BsnComponentSchema>({
  id: 'yejak',
  type: 'bsn',
  key: 'someInput',
  label: 'Some input',
  inputMask: '999999999',
  validate: {
    maxLength: 7,
  },
  validateOn: 'blur',
} as const);

// invalid, multiple true and non-array default value
expectNotAssignable<BsnComponentSchema>({
  id: 'yejak',
  type: 'bsn',
  key: 'someInput',
  label: 'Some input',
  inputMask: '999999999',
  validateOn: 'blur',
  multiple: true,
  defaultValue: '',
} as const);

// invalid, multiple false and array default value
expectNotAssignable<BsnComponentSchema>({
  id: 'yejak',
  type: 'bsn',
  key: 'someInput',
  label: 'Some input',
  inputMask: '999999999',
  validateOn: 'blur',
  multiple: false,
  defaultValue: [''],
} as const);

// invalid, multiple true and wrong default value in array element
expectNotAssignable<BsnComponentSchema>({
  id: 'yejak',
  type: 'bsn',
  key: 'someInput',
  label: 'Some input',
  inputMask: '999999999',
  validateOn: 'blur',
  multiple: true,
  defaultValue: [123],
} as const);

// missing validateOn
expectNotAssignable<BsnComponentSchema>({
  id: 'yejak',
  type: 'bsn',
  key: 'someInput',
  label: 'Some input',
  inputMask: '999999999',
});
