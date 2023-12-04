import {expectAssignable, expectNotAssignable} from 'tsd';

import {EmailComponentSchema} from '../../../lib';

// minimal email component schema
expectAssignable<EmailComponentSchema>({
  id: 'yejak',
  type: 'email',
  key: 'someEmail',
  label: 'Some email',
  validateOn: 'blur',
});

// with additional, email-component specific properties
expectAssignable<EmailComponentSchema>({
  id: 'yejak',
  type: 'email',
  key: 'someEmail',
  label: 'Some email',
  validateOn: 'blur',
  autocomplete: 'email',
  confirmationRecipient: false,
});

// multiple false and appropriate default value type
expectAssignable<EmailComponentSchema>({
  id: 'yejak',
  type: 'email',
  key: 'someEmail',
  label: 'Some email',
  validateOn: 'blur',
  multiple: false,
  defaultValue: '',
});

// multiple true and appropriate default value type
expectAssignable<EmailComponentSchema>({
  id: 'yejak',
  type: 'email',
  key: 'someEmail',
  label: 'Some email',
  validateOn: 'blur',
  multiple: true,
  defaultValue: [''],
});

// full, correct schema
expectAssignable<EmailComponentSchema>({
  id: 'yejak',
  type: 'email',
  // basic tab
  label: 'Some email',
  key: 'someEmail',
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
  autocomplete: 'email',
  confirmationRecipient: false,
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
  validateOn: 'blur',
});

// validateOn not `blur`
expectNotAssignable<EmailComponentSchema>({
  id: 'yejak',
  type: 'email',
  key: 'someEmail',
  label: 'Some email',
  validateOn: 'change',
});

// missing validateOn
expectNotAssignable<EmailComponentSchema>({
  id: 'yejak',
  type: 'email',
  key: 'someEmail',
  label: 'Some email',
});

// invalid, multiple true and non-array default value
expectNotAssignable<EmailComponentSchema>({
  id: 'yejak',
  type: 'email',
  key: 'someEmail',
  label: 'Some email',
  validateOn: 'blur',
  multiple: true,
  defaultValue: '',
});

// invalid, multiple false and array default value
expectNotAssignable<EmailComponentSchema>({
  id: 'yejak',
  type: 'email',
  key: 'someEmail',
  label: 'Some email',
  validateOn: 'blur',
  multiple: false,
  defaultValue: [''],
});

// invalid, multiple true and wrong default value in array element
expectNotAssignable<EmailComponentSchema>({
  id: 'yejak',
  type: 'email',
  key: 'someEmail',
  label: 'Some email',
  validateOn: 'blur',
  multiple: true,
  defaultValue: [0],
});
