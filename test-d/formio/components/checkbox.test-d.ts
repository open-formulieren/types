import {expectAssignable, expectNotAssignable} from 'tsd';

import {CheckboxComponentSchema} from '../../../lib';

// minimal component schema
expectAssignable<CheckboxComponentSchema>({
  id: 'yejak',
  type: 'checkbox',
  key: 'someCheckbox',
  label: 'Some checkbox',
  defaultValue: true,
});


// full, correct schema
expectAssignable<CheckboxComponentSchema>({
  id: 'yejak',
  type: 'checkbox',
  // basic tab
  label: 'Some checkbox',
  key: 'someCheckbox',
  description: '',
  tooltip: 'A tooltip',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  hidden: false,
  clearOnHide: true,
  isSensitiveData: true,
  defaultValue: false,
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
  translatedErrors: {nl: {required: 'Geef checkbox.'}},
  errors: {required: 'Geef checkbox.'},
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

// multiple not allowed
expectNotAssignable<CheckboxComponentSchema>({
  id: 'yejak',
  type: 'checkbox',
  key: 'someCheckbox',
  label: 'Some checkbox',
  multiple: 'dummy',
});

// defaultValue not allowed
expectNotAssignable<CheckboxComponentSchema>({
  id: 'yejak',
  type: 'checkbox',
  key: 'someCheckbox',
  label: 'Some checkbox',
  defaultValue: [true],
});
