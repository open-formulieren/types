import {expectAssignable} from 'tsd';

import {EmailComponentSchema} from '../../../lib';

// minimal textfield component schema
expectAssignable<EmailComponentSchema>({
  id: 'yejak',
  type: 'email',
  key: 'someEmail',
  label: 'Some email',
});

// with additional, email-component specific properties
expectAssignable<EmailComponentSchema>({
  id: 'yejak',
  type: 'email',
  key: 'someEmail',
  label: 'Some email',
  autocomplete: 'email',
  confirmationRecipient: false,
});

// multiple true and appropriate default value type
expectAssignable<EmailComponentSchema>({
  id: 'yejak',
  type: 'email',
  key: 'someEmail',
  label: 'Some email',
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
      nl: [{literal: 'foo', translation: 'bar'}],
    },
  },
  // fixed but not editable
  validateOn: 'blur',
});
