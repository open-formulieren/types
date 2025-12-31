import {expectAssignable, expectNotAssignable} from 'tsd';

import {LicensePlateComponentSchema} from '../../../dist/';

// minimal postcode component schema
expectAssignable<LicensePlateComponentSchema>({
  id: 'yejak',
  type: 'licenseplate',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}$',
  },
});

// multiple false and appropriate default value type
expectAssignable<LicensePlateComponentSchema>({
  id: 'yejak',
  type: 'licenseplate',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}$',
  },
  multiple: false,
  defaultValue: 'AA-123-AA',
});

// multiple true and appropriate default value type
expectAssignable<LicensePlateComponentSchema>({
  id: 'yejak',
  type: 'licenseplate',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}$',
  },
  multiple: true,
  defaultValue: ['AA-123-AA'],
});

// full, correct schema
expectAssignable<LicensePlateComponentSchema>({
  id: 'yejak',
  type: 'licenseplate',
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
    // FIXED/constant, can't be edited
    pattern: '^[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}$',
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
      nl: {
        label: 'foo',
        description: 'bar',
      },
    },
  },
});

// different component type
expectNotAssignable<LicensePlateComponentSchema>({
  id: 'yejak',
  type: 'textfield',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}$',
  },
} as const);

// using unsupported properties
expectNotAssignable<LicensePlateComponentSchema>({
  id: 'yejak',
  type: 'licenseplate',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}$',
  },
  placeholder: 'no placeholder',
} as const);

// incorrect, invalid validator key
expectNotAssignable<LicensePlateComponentSchema>({
  id: 'yejak',
  type: 'licenseplate',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}$',
    maxLength: 7,
  },
} as const);

// invalid, multiple true and non-array default value
expectNotAssignable<LicensePlateComponentSchema>({
  id: 'yejak',
  type: 'licenseplate',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}$',
  },
  multiple: true,
  defaultValue: '',
} as const);

// invalid, multiple false and array default value
expectNotAssignable<LicensePlateComponentSchema>({
  id: 'yejak',
  type: 'licenseplate',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}$',
  },
  multiple: false,
  defaultValue: [''],
} as const);

// invalid, multiple true and wrong default value in array element
expectNotAssignable<LicensePlateComponentSchema>({
  id: 'yejak',
  type: 'licenseplate',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}$',
  },
  multiple: true,
  defaultValue: [123],
} as const);

// missing validateOn
expectNotAssignable<LicensePlateComponentSchema>({
  id: 'yejak',
  type: 'licenseplate',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}$',
  },
});
