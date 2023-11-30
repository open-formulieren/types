import {expectAssignable} from 'tsd';

import {FieldsetComponentSchema} from '../../../lib';

// Minimal schema
expectAssignable<FieldsetComponentSchema>({
  id: 'eqegfc',
  type: 'fieldset',
  key: 'fieldset',
  label: 'Fieldset',
  hideHeader: false,
  components: [],
});

// Full schema
expectAssignable<FieldsetComponentSchema>({
  id: 'eqegfc',
  type: 'fieldset',
  key: 'fieldset',
  label: 'Fieldset',
  tooltip: 'A tooltip for the group',
  hideHeader: false,
  hidden: true,
  clearOnHide: true,
  components: [
    {
      id: 'wien53il',
      type: 'textfield',
      key: 'nestedTextField',
      label: 'Nested text field',
    },
  ],
});
