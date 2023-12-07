import {expectAssignable, expectNotAssignable} from 'tsd';

import {PasswordComponentSchema} from '../../../lib';

// minimal password component schema
expectAssignable<PasswordComponentSchema>({
  id: 'yejak',
  type: 'password',
  key: 'somePassword',
  label: 'Some password',
});

// with additional, password-component specific properties
expectAssignable<PasswordComponentSchema>({
  id: 'yejak',
  type: 'password',
  key: 'somePassword',
  label: 'Some password',
  autocomplete: 'password',
});

// multiple false and appropriate default value type
expectAssignable<PasswordComponentSchema>({
  id: 'yejak',
  type: 'password',
  key: 'somePassword',
  label: 'Some password',
  multiple: false,
  defaultValue: '',
});

// multiple true and appropriate default value type
expectAssignable<PasswordComponentSchema>({
  id: 'yejak',
  type: 'password',
  key: 'somePassword',
  label: 'Some password',
  multiple: true,
  defaultValue: [''],
});

// full, correct schema
expectAssignable<PasswordComponentSchema>({
  id: 'yejak',
  type: 'password',
  defaultValue: '',
  // basic tab
  label: 'Some password',
  key: 'somePassword',
  description: '',
  tooltip: 'A tooltip',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  multiple: false,
  hidden: false,
  clearOnHide: true,
  isSensitiveData: true,
  autocomplete: 'password',
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
  translatedErrors: {nl: {required: 'Geef wachtwoord.'}},
  errors: {required: 'Geef wachtwoord.'},
  // registration tab
  registration: {
    attribute: '',
  },
  // translations tab in builder form
  openForms: {
    translations: {
      nl: {label: 'foo', description: 'bar', tooltip: 'baz'},
    },
  },
});

// invalid, multiple true and non-array default value
expectNotAssignable<PasswordComponentSchema>({
  id: 'yejak',
  type: 'password' as const,
  key: 'somePassword',
  label: 'Some password',
  multiple: true,
  defaultValue: '',
});

// invalid, multiple false and array default value
expectNotAssignable<PasswordComponentSchema>({
  id: 'yejak',
  type: 'password' as const,
  key: 'somePassword',
  label: 'Some password',
  multiple: false,
  defaultValue: [''],
});

// invalid, multiple true and wrong default value in array element
expectNotAssignable<PasswordComponentSchema>({
  id: 'yejak',
  type: 'password' as const,
  key: 'somePassword',
  label: 'Some password',
  multiple: true,
  defaultValue: [0],
});
