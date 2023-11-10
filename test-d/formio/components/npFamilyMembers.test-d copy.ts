import {expectAssignable, expectNotAssignable} from 'tsd';

import {NpFamilyMembersComponentSchema} from '../../../lib/';

// minimal npFamilyMembers component schema
expectAssignable<NpFamilyMembersComponentSchema>({
  id: '123',
  type: 'npFamilyMembers',
  key: 'aFamilyMembers',
  label: 'A Family Members',
  includeChildren: true,
  includePartners: true,
} as const);

// multiple false (implicit) and appropriate default value type
expectAssignable<NpFamilyMembersComponentSchema>({
  id: '123',
  type: 'npFamilyMembers',
  key: 'aFamilyMembers',
  label: 'A Family Members',
  includeChildren: true,
  includePartners: true,
} as const);

// different component type
expectNotAssignable<NpFamilyMembersComponentSchema>({
  type: 'textfield',
} as const);

// using unsupported properties
expectNotAssignable<NpFamilyMembersComponentSchema>({
  id: '123',
  type: 'npFamilyMembers',
  key: 'aFamilyMembers',
  label: 'A Family Members',
  includeChildren: true,
  includePartners: true,
  hideLabel: true,
} as const);

// No defaultValue allowed
expectNotAssignable<NpFamilyMembersComponentSchema>({
  id: '123',
  type: 'npFamilyMembers',
  key: 'aFamilyMembers',
  label: 'A Family Members',
  includeChildren: true,
  includePartners: true,
  defaultValue: 1,
});

// full, correct schema
expectAssignable<NpFamilyMembersComponentSchema>({
  id: '8aosjaw',
  type: 'npFamilyMembers',
  // basic tab in builder form
  label: 'A label',
  key: 'test',
  includeChildren: true,
  includePartners: true,
  description: 'Sample description',
  tooltip: 'A tooltip',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  // multiple: false,
  hidden: false,
  clearOnHide: true,
  isSensitiveData: false,
  // advanced tab in builder form
  conditional: {
    show: undefined,
    when: undefined,
    eq: undefined,
  },
  // validation tab in builder form
  validate: {
    required: false,
    plugins: undefined,
  },
  translatedErrors: {
    nl: {
      required: 'Je moet een waarde opgeven!!!',
    },
  },
  errors: {
    // translatedErrors is converted into errors by the backend
    required: 'Je moet een waarde opgeven!!!',
  },
  // registration tab in builder form
  registration: {
    attribute: '',
  },
  // translations tab in builder form
  openForms: {
    translations: {
      nl: {tooltip: 'bar'},
    },
  },
});
