import {expectAssignable, expectNotAssignable} from 'tsd';

import {PostcodeComponentSchema} from '../../../dist/';

// minimal postcode component schema
expectAssignable<PostcodeComponentSchema>({
  id: 'yejak',
  type: 'postcode',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[1-9][0-9]{3} ?(?!sa|sd|ss|SA|SD|SS)[a-zA-Z]{2}$',
  },
});

// multiple false and appropriate default value type
expectAssignable<PostcodeComponentSchema>({
  id: 'yejak',
  type: 'postcode',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[1-9][0-9]{3} ?(?!sa|sd|ss|SA|SD|SS)[a-zA-Z]{2}$',
  },
  multiple: false,
  defaultValue: '1015 CJ',
});

// multiple true and appropriate default value type
expectAssignable<PostcodeComponentSchema>({
  id: 'yejak',
  type: 'postcode',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[1-9][0-9]{3} ?(?!sa|sd|ss|SA|SD|SS)[a-zA-Z]{2}$',
  },
  multiple: true,
  defaultValue: ['1015 CJ'],
});

// full, correct schema
expectAssignable<PostcodeComponentSchema>({
  id: 'yejak',
  type: 'postcode',
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
    // FIXED/constant, can't be edited
    pattern: '^[1-9][0-9]{3} ?(?!sa|sd|ss|SA|SD|SS)[a-zA-Z]{2}$',
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
expectNotAssignable<PostcodeComponentSchema>({
  id: 'yejak',
  type: 'textfield', // TODO: in the future this may become a specialized textfield alias?
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[1-9][0-9]{3} ?(?!sa|sd|ss|SA|SD|SS)[a-zA-Z]{2}$',
  },
} as const);

// using unsupported properties
expectNotAssignable<PostcodeComponentSchema>({
  id: 'yejak',
  type: 'postcode',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[1-9][0-9]{3} ?(?!sa|sd|ss|SA|SD|SS)[a-zA-Z]{2}$',
  },
  placeholder: 'no placeholder',
} as const);

// incorrect, invalid validator key
expectNotAssignable<PostcodeComponentSchema>({
  id: 'yejak',
  type: 'postcode',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[1-9][0-9]{3} ?(?!sa|sd|ss|SA|SD|SS)[a-zA-Z]{2}$',
    maxLength: 7,
  },
} as const);

// invalid, multiple true and non-array default value
expectNotAssignable<PostcodeComponentSchema>({
  id: 'yejak',
  type: 'postcode',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[1-9][0-9]{3} ?(?!sa|sd|ss|SA|SD|SS)[a-zA-Z]{2}$',
  },
  multiple: true,
  defaultValue: '',
} as const);

// invalid, multiple false and array default value
expectNotAssignable<PostcodeComponentSchema>({
  id: 'yejak',
  type: 'postcode',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[1-9][0-9]{3} ?(?!sa|sd|ss|SA|SD|SS)[a-zA-Z]{2}$',
  },
  multiple: false,
  defaultValue: [''],
} as const);

// invalid, multiple true and wrong default value in array element
expectNotAssignable<PostcodeComponentSchema>({
  id: 'yejak',
  type: 'postcode',
  key: 'someInput',
  label: 'Some input',
  validate: {
    pattern: '^[1-9][0-9]{3} ?(?!sa|sd|ss|SA|SD|SS)[a-zA-Z]{2}$',
  },
  multiple: true,
  defaultValue: [123],
} as const);
