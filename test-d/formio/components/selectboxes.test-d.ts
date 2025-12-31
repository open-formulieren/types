import {expectAssignable, expectNotAssignable} from 'tsd';

import {SelectboxesComponentSchema} from '../../../dist';

// minimal component schema, manual:
expectAssignable<SelectboxesComponentSchema>({
  id: 'yejak',
  type: 'selectboxes',
  key: 'someSelectboxes',
  label: 'Some selectboxes',
  defaultValue: {},
  openForms: {
    dataSrc: 'manual',
    translations: {},
  },
  values: [
    {
      value: 'dummy',
      label: 'dummy',
    },
  ],
});

// minimal component schema, variable:
expectAssignable<SelectboxesComponentSchema>({
  id: 'yejak',
  type: 'selectboxes',
  key: 'someSelectboxes',
  label: 'Some selectboxes',
  defaultValue: {},
  openForms: {
    dataSrc: 'variable',
    itemsExpression: 'dummy',
    translations: {},
  },
});

// values translations
expectAssignable<SelectboxesComponentSchema>({
  id: 'yejak',
  type: 'selectboxes',
  key: 'someSelectboxes',
  label: 'Some selectboxes',
  defaultValue: {dummy: true},
  openForms: {
    dataSrc: 'manual',
    translations: {},
  },
  values: [
    {
      value: 'dummy',
      label: 'dummy',
      openForms: {
        translations: {
          en: {
            label: 'dummy_en',
          },
          nl: {
            label: 'dummy_nl',
          },
        },
      },
    },
  ],
});

// full, correct schema
expectAssignable<SelectboxesComponentSchema>({
  id: 'yejak',
  type: 'selectboxes',
  // basic tab
  label: 'Some selectboxes',
  key: 'someSelectboxes',
  description: '',
  tooltip: 'A tooltip',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  hidden: false,
  clearOnHide: true,
  isSensitiveData: true,
  defaultValue: {dummy: true},
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
    minSelectedCount: 2,
    maxSelectedCount: 3,
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
    dataSrc: 'variable',
    itemsExpression: 'dummy',
  },
  // fixed but not editable
  validateOn: 'blur',
});

// Missing openForms
expectNotAssignable<SelectboxesComponentSchema>({
  id: 'yejak',
  type: 'selectboxes',
  key: 'someSelectboxes',
  label: 'Some selectboxes',
});

// multiple not allowed
expectNotAssignable<SelectboxesComponentSchema>({
  id: 'yejak',
  type: 'selectboxes',
  key: 'someSelectboxes',
  label: 'Some selectboxes',
  multiple: 'dummy',
  openForms: {
    dataSrc: 'variable',
    itemsExpression: 'dummy',
    translations: {},
  },
});

// defaultValue not allowed
expectNotAssignable<SelectboxesComponentSchema>({
  id: 'yejak',
  type: 'selectboxes',
  key: 'someSelectboxes',
  label: 'Some selectboxes',
  defaultValue: [{dummy: true}],
  openForms: {
    dataSrc: 'variable',
    itemsExpression: 'dummy',
    translations: {},
  },
});

// manual without values
expectNotAssignable<SelectboxesComponentSchema>({
  id: 'yejak',
  type: 'selectboxes',
  key: 'someSelectboxes',
  label: 'Some selectboxes',
  openForms: {
    dataSrc: 'manual',
    translations: {},
  },
});

// variable without itemsExpressions
expectNotAssignable<SelectboxesComponentSchema>({
  id: 'yejak',
  type: 'selectboxes',
  key: 'someSelectboxes',
  label: 'Some selectboxes',
  openForms: {
    dataSrc: 'variable',
    translations: {},
  },
});
