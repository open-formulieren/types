import {expectAssignable, expectNotAssignable} from 'tsd';

import {EditGridComponentSchema} from '../../../dist/';

// minimal textfield component schema
expectAssignable<EditGridComponentSchema>({
  id: 'yejak',
  type: 'editgrid',
  key: 'someEditGrid',
  label: 'Some edit grid',
  components: [],
  disableAddingRemovingRows: false,
  groupLabel: 'Item',
});

// with nested components
expectAssignable<EditGridComponentSchema>({
  id: 'yejak',
  type: 'editgrid',
  key: 'someEditGrid',
  label: 'Some edit grid',
  components: [
    {
      id: 'wien53il',
      type: 'textfield',
      key: 'nestedTextField',
      label: 'Nested text field',
    },
  ],
  disableAddingRemovingRows: false,
  groupLabel: 'Item',
});

// Full schema
expectAssignable<EditGridComponentSchema>({
  id: 'yejak',
  type: 'editgrid',
  components: [],
  defaultValue: [],
  // basic tab in builder form
  label: 'Some edit grid',
  key: 'someEditGrid',
  description: '',
  tooltip: '',
  groupLabel: 'Item',
  hidden: false,
  clearOnHide: true,
  isSensitiveData: false,
  hideLabel: false,
  // display tab in builder form
  disableAddingRemovingRows: false,
  addAnother: '',
  saveRow: '',
  removeRow: '',
  // validation tab in builder form
  validate: {
    required: false,
    maxLength: 20,
  },
  // translations tab in builder form
  openForms: {
    translations: {
      nl: {
        label: 'foo',
        description: 'bar',
        tooltip: 'tooltip',
        groupLabel: 'groupLabel',
        addAnother: 'addAnother',
        saveRow: 'saveRow',
        removeRow: 'removeRow',
      },
    },
  },
});

// different component type
expectNotAssignable<EditGridComponentSchema>({
  type: 'fieldset',
} as const);

// multiple: true is implicit
expectNotAssignable<EditGridComponentSchema>({
  id: 'yejak',
  type: 'editgrid' as const,
  key: 'someEditGrid',
  label: 'Some edit grid',
  components: [],
  disableAddingRemovingRows: false,
  groupLabel: 'Item',
  multiple: false,
});

// currently we don't support plugin validators
expectNotAssignable<EditGridComponentSchema>({
  id: 'yejak',
  type: 'editgrid' as const,
  key: 'someEditGrid',
  label: 'Some edit grid',
  components: [],
  disableAddingRemovingRows: false,
  groupLabel: 'Item',
  validate: {
    plugins: [],
  },
});

// currently we don't support providing validation error translations
expectNotAssignable<EditGridComponentSchema>({
  id: 'yejak',
  type: 'editgrid' as const,
  key: 'someEditGrid',
  label: 'Some edit grid',
  components: [],
  disableAddingRemovingRows: false,
  groupLabel: 'Item',
  validate: {
    required: true,
  },
  translatedErrors: {
    nl: {
      required: 'Je moet een waarde opgeven!!!',
    },
  },
});

// the 'showIn*' properties are also not (yet?) exposed
expectNotAssignable<EditGridComponentSchema>({
  id: 'yejak',
  type: 'editgrid' as const,
  key: 'someEditGrid',
  label: 'Some edit grid',
  components: [],
  disableAddingRemovingRows: false,
  groupLabel: 'Item',
  showInSummary: true,
});
expectNotAssignable<EditGridComponentSchema>({
  id: 'yejak',
  type: 'editgrid' as const,
  key: 'someEditGrid',
  label: 'Some edit grid',
  components: [],
  disableAddingRemovingRows: false,
  groupLabel: 'Item',
  showInEmail: true,
});
expectNotAssignable<EditGridComponentSchema>({
  id: 'yejak',
  type: 'editgrid' as const,
  key: 'someEditGrid',
  label: 'Some edit grid',
  components: [],
  disableAddingRemovingRows: false,
  groupLabel: 'Item',
  showInPDF: true,
});

// there's no registration configuration (yet?)
expectNotAssignable<EditGridComponentSchema>({
  id: 'yejak',
  type: 'editgrid' as const,
  key: 'someEditGrid',
  label: 'Some edit grid',
  components: [],
  disableAddingRemovingRows: false,
  groupLabel: 'Item',
  registration: {attribute: ''},
});
