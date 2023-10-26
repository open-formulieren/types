import {expectAssignable, expectNotAssignable} from 'tsd';

import {RadioComponentSchema} from '../../../lib';

// minimal component schema, manual:
expectAssignable<RadioComponentSchema>({
  id: 'yejak',
  type: 'radio',
  key: 'aRadio',
  label: 'A radio',
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
expectAssignable<RadioComponentSchema>({
  id: 'yejak',
  type: 'radio',
  key: 'aRadio',
  label: 'A radio',
  openForms: {
    dataSrc: 'variable',
    itemsExpression: 'dummy',
    translations: {},
  },
});

// multiple false and appropriate default value type
expectAssignable<RadioComponentSchema>({
  id: 'yejak',
  type: 'radio',
  key: 'aRadio',
  label: 'A radio',
  multiple: false,
  defaultValue: 'dummy',
  openForms: {
    dataSrc: 'variable',
    itemsExpression: 'dummy',
    translations: {},
  },
});

// multiple false and default value type to null
expectAssignable<RadioComponentSchema>({
  id: 'yejak',
  type: 'radio',
  key: 'aRadio',
  label: 'A radio',
  multiple: false,
  defaultValue: null,
  openForms: {
    dataSrc: 'variable',
    itemsExpression: 'dummy',
    translations: {},
  },
});

// values translations
expectAssignable<RadioComponentSchema>({
  id: 'yejak',
  type: 'radio',
  key: 'aRadio',
  label: 'A radio',
  multiple: false,
  defaultValue: 'dummy',
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
expectAssignable<RadioComponentSchema>({
  id: 'yejak',
  type: 'radio',
  // basic tab
  label: 'A radio',
  key: 'aRadio',
  description: '',
  tooltip: 'A tooltip',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  multiple: false,
  hidden: false,
  clearOnHide: true,
  isSensitiveData: true,
  defaultValue: 'dummy',
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
expectNotAssignable<RadioComponentSchema>({
  id: 'yejak',
  type: 'radio',
  key: 'aRadio',
  label: 'A radio',
});

// multiple true not allowed
expectNotAssignable<RadioComponentSchema>({
  id: 'yejak',
  type: 'radio',
  key: 'aRadio',
  label: 'A radio',
  multiple: true,
  openForms: {
    dataSrc: 'variable',
    itemsExpression: 'dummy',
    translations: {},
  },
});

// defaultValue not allowed
expectNotAssignable<RadioComponentSchema>({
  id: 'yejak',
  type: 'radio',
  key: 'aRadio',
  label: 'A radio',
  defaultValue: [{dummy: true}],
  openForms: {
    dataSrc: 'variable',
    itemsExpression: 'dummy',
    translations: {},
  },
});

// manual without values
expectNotAssignable<RadioComponentSchema>({
  id: 'yejak',
  type: 'radio',
  key: 'aRadio',
  label: 'A radio',
  openForms: {
    dataSrc: 'manual',
    translations: {},
  },
});

// variable without itemsExpressions
expectNotAssignable<RadioComponentSchema>({
  id: 'yejak',
  type: 'radio',
  key: 'aRadio',
  label: 'A radio',
  openForms: {
    dataSrc: 'variable',
    translations: {},
  },
});
