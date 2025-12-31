import {expectAssignable, expectNotAssignable} from 'tsd';

import {SelectComponentSchema} from '../../../dist';

// minimal component schema, manual:
expectAssignable<SelectComponentSchema>({
  id: 'yejak',
  type: 'select',
  key: 'someSelect',
  label: 'Some select',
  openForms: {
    dataSrc: 'manual',
    translations: {},
  },
  data: {
    values: [
      {
        value: 'dummy',
        label: 'dummy',
      },
    ],
  },
});

// minimal component schema, variable:
expectAssignable<SelectComponentSchema>({
  id: 'yejak',
  type: 'select',
  key: 'someSelect',
  label: 'Some select',
  openForms: {
    dataSrc: 'variable',
    itemsExpression: {var: 'foo'},
    translations: {},
  },
  data: {values: []},
});

// minimal component schema, multiple false:
expectAssignable<SelectComponentSchema>({
  id: 'yejak',
  type: 'select',
  key: 'someSelect',
  label: 'Some select',
  multiple: false,
  defaultValue: 'dummy',
  openForms: {
    dataSrc: 'variable',
    itemsExpression: {var: 'foo'},
    translations: {},
  },
  data: {values: []},
});

// minimal component schema, multiple true:
expectAssignable<SelectComponentSchema>({
  id: 'yejak',
  type: 'select',
  key: 'someSelect',
  label: 'Some select',
  multiple: true,
  defaultValue: ['dummy'],
  openForms: {
    dataSrc: 'variable',
    itemsExpression: {var: 'foo'},
    translations: {},
  },
  data: {values: []},
});

// minimal component schema, multiple true and empty defaults:
expectAssignable<SelectComponentSchema>({
  id: 'yejak',
  type: 'select',
  key: 'someSelect',
  label: 'Some select',
  multiple: true,
  defaultValue: [],
  openForms: {
    dataSrc: 'variable',
    itemsExpression: {var: 'foo'},
    translations: {},
  },
  data: {values: []},
});

// values translations
expectAssignable<SelectComponentSchema>({
  id: 'yejak',
  type: 'select',
  key: 'someSelect',
  label: 'Some select',
  defaultValue: 'dummy',
  openForms: {
    dataSrc: 'manual',
    translations: {},
  },
  data: {
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
  },
});

// full, correct schema
expectAssignable<SelectComponentSchema>({
  id: 'yejak',
  type: 'select',
  // basic tab
  label: 'Some select',
  key: 'someSelect',
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
    itemsExpression: {var: 'foo'},
  },
  data: {values: []},
});

// Missing openForms
expectNotAssignable<SelectComponentSchema>({
  id: 'yejak',
  type: 'select',
  key: 'someSelect',
  label: 'Some select',
  data: {values: []},
});

// multiple true, wrong default value
expectNotAssignable<SelectComponentSchema>({
  id: 'yejak',
  type: 'select',
  key: 'someSelect',
  label: 'Some select',
  multiple: true,
  defaultValue: 'dummy',
  openForms: {
    dataSrc: 'variable',
    itemsExpression: {var: 'foo'},
    translations: {},
  },
  data: {values: []},
});

// multiple false, wrong default value
expectNotAssignable<SelectComponentSchema>({
  id: 'yejak',
  type: 'select',
  key: 'someSelect',
  label: 'Some select',
  multiple: false,
  defaultValue: ['dummy'],
  openForms: {
    dataSrc: 'variable',
    itemsExpression: {var: 'foo'},
    translations: {},
  },
  data: {values: []},
});

// manual without values
expectNotAssignable<SelectComponentSchema>({
  id: 'yejak',
  type: 'select',
  key: 'someSelect',
  label: 'Some select',
  openForms: {
    dataSrc: 'manual',
    translations: {},
  },
  data: {},
});

// variable without itemsExpressions
expectNotAssignable<SelectComponentSchema>({
  id: 'yejak',
  type: 'select',
  key: 'someSelect',
  label: 'Some select',
  openForms: {
    dataSrc: 'variable',
    translations: {},
  },
  data: {values: []},
});
