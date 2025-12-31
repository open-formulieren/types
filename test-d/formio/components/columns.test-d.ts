import {expectAssignable, expectNotAssignable} from 'tsd';

import {Column, ColumnsComponentSchema} from '../../../dist';

// Minimal schema
expectAssignable<ColumnsComponentSchema>({
  id: 'eqegfc',
  type: 'columns',
  key: 'columns',
  columns: [],
});

// Full schema
expectAssignable<ColumnsComponentSchema>({
  id: 'eqegfc',
  type: 'columns',
  key: 'columns',
  columns: [
    {
      size: 6,
      sizeMobile: 4,
      components: [
        {
          id: 'wien53il',
          type: 'textfield',
          key: 'nestedTextField',
          label: 'Nested text field',
        },
      ],
    },
    {
      size: 3,
      sizeMobile: 4,
      components: [
        {
          id: 'abcdefgh',
          type: 'textfield',
          key: 'nested2',
          label: 'Second text field',
        },
      ],
    },
  ],
});

expectNotAssignable<Column>({
  size: 0 as const,
  sizeMobile: 4 as const,
  components: [],
});

expectNotAssignable<Column>({
  size: 13 as const,
  sizeMobile: 4 as const,
  components: [],
});

expectNotAssignable<Column>({
  size: 3.14 as number,
  sizeMobile: 4 as const,
  components: [],
});
