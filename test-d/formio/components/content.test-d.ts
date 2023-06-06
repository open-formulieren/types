import {expectAssignable, expectNotAssignable} from 'tsd';

import {ContentSchema} from '../../../lib';

// Minimal schema
expectAssignable<ContentSchema>({
  id: 'eqegfc',
  type: 'content',
  html: '',
  key: 'content',
});

// Full schema
expectAssignable<ContentSchema>({
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
expectNotAssignable<ContentSchema>({
  id: 'eqegfc',
  type: 'content',
  html: '',
  key: 'content',
  customClass: 'arbitraryValue',
});

// Default value makes no sense for a layout component
expectNotAssignable<ContentSchema>({
  id: 'eqegfc',
  type: 'content',
  html: '',
  key: 'content',
  defaultValue: '',
});
