import {expectAssignable, expectNotAssignable} from 'tsd';

import {ContentComponentSchema} from '../../../lib';

// Minimal schema
expectAssignable<ContentComponentSchema>({
  id: 'eqegfc',
  type: 'content',
  html: '',
  key: 'content',
});

// Full schema
expectAssignable<ContentComponentSchema>({
  id: 'eqegfc',
  type: 'content',
  // Display tab
  html: 'inhoud',
  label: 'Content',
  key: 'content',
  hidden: false,
  showInEmail: false,
  showInSummary: false,
  showInPDF: true,
  customClass: '',
  // Advanced tab
  conditional: {
    show: undefined,
    when: '',
    eq: '',
  },
  // Translations
  openForms: {
    translations: {
      nl: [],
    },
  },
});

// Bad customClass value
expectNotAssignable<ContentComponentSchema>({
  id: 'eqegfc',
  type: 'content',
  html: '',
  key: 'content',
  customClass: 'arbitraryValue',
} as const);

// Default value makes no sense for a layout component
expectNotAssignable<ContentComponentSchema>({
  id: 'eqegfc',
  type: 'content',
  html: '',
  key: 'content',
  defaultValue: '',
} as const);
