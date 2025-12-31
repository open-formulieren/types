import {expectAssignable, expectNotAssignable} from 'tsd';

import {PartnersComponentSchema} from '../../../dist';

// minimal partners component schema
expectAssignable<PartnersComponentSchema>({
  id: 'yejak',
  type: 'partners',
  key: 'partners',
  label: 'Partners',
});

// full, correct schema
expectAssignable<PartnersComponentSchema>({
  id: 'yejak',
  type: 'partners',
  // basic tab
  key: 'partners',
  label: 'Partners',
  isSensitiveData: true,
  defaultValue: undefined,
  clearOnHide: false,
  hidden: false,
  errors: {required: 'Lastname'},
  description: 'A description',
  tooltip: 'A tooltip',
  hideLabel: false,
  // Advanced tab
  conditional: {
    show: undefined,
    when: '',
    eq: '',
  },
  // registration tab
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
expectNotAssignable<PartnersComponentSchema>({
  id: 'yejak',
  type: 'textbox',
  key: 'partners',
  label: 'Partners',
} as const);

// using unsupported properties
expectNotAssignable<PartnersComponentSchema>({
  id: 'yejak',
  type: 'partners',
  key: 'partners',
  label: 'Partners',
  validateOn: 'blur',
  placeholder: 'no placeholder',
} as const);
