import {expectAssignable, expectNotAssignable} from 'tsd';

import {EditGridComponentSchema} from '../../../lib/';

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
