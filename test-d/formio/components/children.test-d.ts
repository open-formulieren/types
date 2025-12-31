import {expectAssignable, expectNotAssignable} from 'tsd';

import {ChildrenComponentSchema} from '../../../dist';

// minimal children component schema
expectAssignable<ChildrenComponentSchema>({
  id: 'yejak',
  type: 'children',
  key: 'children',
  label: 'children',
  enableSelection: false,
});

// full, correct schema
expectAssignable<ChildrenComponentSchema>({
  id: 'yejak',
  type: 'children',
  // basic tab
  key: 'children',
  label: 'children',
  enableSelection: false,
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
expectNotAssignable<ChildrenComponentSchema>({
  id: 'yejak',
  type: 'textbox',
  key: 'textbox',
  label: 'Different component',
} as const);

// using unsupported properties
expectNotAssignable<ChildrenComponentSchema>({
  id: 'yejak',
  type: 'children',
  key: 'children',
  label: 'children',
  validateOn: 'blur',
  placeholder: 'no placeholder',
} as const);
