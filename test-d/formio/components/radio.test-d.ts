import {expectAssignable, expectNotAssignable} from 'tsd';

import {RadioComponentSchema} from '../../../dist';

// minimal component schema, manual:
expectAssignable<RadioComponentSchema>({
  id: 'yejak',
  type: 'radio',
  key: 'aRadio',
  label: 'A radio',
  defaultValue: null,
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
expectAssignable<RadioComponentSchema>({
  id: 'yejak',
  type: 'radio',
  key: 'aRadio',
  label: 'A radio',
  defaultValue: null,
  openForms: {
    dataSrc: 'variable',
    itemsExpression: {var: 'dummy'},
    translations: {},
  },
});

// values translations
expectAssignable<RadioComponentSchema>({
  id: 'yejak',
  type: 'radio',
  key: 'aRadio',
  label: 'A radio',
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

// multiple not allowed
expectNotAssignable<RadioComponentSchema>({
  id: 'yejak',
  type: 'radio',
  key: 'aRadio',
  label: 'A radio',
  multiple: false,
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

// manual with both itemsExpression and values
expectNotAssignable<RadioComponentSchema>({
  id: 'yejak',
  type: 'radio',
  key: 'aRadio',
  label: 'A radio',
  openForms: {
    dataSrc: 'manual',
    itemsExpression: 'dummy',
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
