import {expectAssignable, expectNotAssignable} from 'tsd';

import {SelectboxesComponentSchema} from '../../../lib';

// minimal component schema, manual:
expectAssignable<SelectboxesComponentSchema>({
  id: 'yejak',
  type: 'selectboxes',
  key: 'someSelectboxes',
  label: 'Some selectboxes',
  openForms: {
    dataSrc: 'manual',
    translations: {},
  },
  values: [
    {
      value: 'dummy',
      label: 'dummy',
    }
  ],
});

// minimal component schema, variable:
expectAssignable<SelectboxesComponentSchema>({
  id: 'yejak',
  type: 'selectboxes',
  key: 'someSelectboxes',
  label: 'Some selectboxes',
  openForms: {
    dataSrc: 'variable',
    itemsExpression: 'dummy',
    translations: {},
  },
});

// multiple false and appropriate default value type
expectAssignable<SelectboxesComponentSchema>({
  id: 'yejak',
  type: 'selectboxes',
  key: 'someSelectboxes',
  label: 'Some selectboxes',
  multiple: false,
  defaultValue: {dummy: true},
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
  multiple: false,
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
            dummy: 'dummy_en',
          },
          nl: {
            dummy_: 'dummy_nl',  // TODO this should not be possible
          }
        }
      }
    }
  ]
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
  multiple: false,
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

// multiple true not allowed
expectNotAssignable<SelectboxesComponentSchema>({
  id: 'yejak',
  type: 'selectboxes',
  key: 'someSelectboxes',
  label: 'Some selectboxes',
  multiple: true,
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
