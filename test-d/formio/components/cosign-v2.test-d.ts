import {expectAssignable, expectNotAssignable} from 'tsd';

import {CosignV2ComponentSchema} from '../../../lib/';

// minimal cosign component schema
expectAssignable<CosignV2ComponentSchema>({
  id: 'yejak',
  type: 'cosign',
  key: 'someCoSign',
  label: 'Some cosign',
  checkBsn: true,
});

// full, correct schema
expectAssignable<CosignV2ComponentSchema>({
  id: 'yejak',
  type: 'cosign',
  // basic tab in builder form
  label: 'Some cosign',
  key: 'someCoSign',
  description: 'A description',
  tooltip: 'A tooltip',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  hidden: false,
  clearOnHide: true,
  isSensitiveData: true,
  defaultValue: {
    bsn: '',
    email: ''
  },
  checkBsn: false,
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
    attribute: 'foo',
  },
  // translations tab in builder form
  openForms: {
    translations: {
      nl: {
        label: 'foo',
        description: 'bar',
        tooltip: 'baz',
      },
    },
  },
});

// different component type
expectNotAssignable<CosignV2ComponentSchema>({
  type: 'fieldset' as const,
});

// using unsupported properties
expectNotAssignable<CosignV2ComponentSchema>({
  id: 'yejak',
  type: 'cosign' as const,
  validateOn: 'blur' as const,
  key: 'someCoSign',
  label: 'Some cosign',
  hideLabel: true,
});

// multiple is not supported
expectNotAssignable<CosignV2ComponentSchema>({
  id: 'yejak',
  type: 'cosign' as const,
  key: 'someCoSign',
  label: 'Some cosign',
  multiple: true as boolean,
});
expectNotAssignable<CosignV2ComponentSchema>({
  id: 'yejak',
  type: 'cosign' as const,
  key: 'someCoSign',
  label: 'Some cosign',
  defaultValue: [],
});

// while it shares functionality with email, we should not be able to use all
// email extensions
expectNotAssignable<CosignV2ComponentSchema>({
  id: 'yejak',
  type: 'cosign' as const,
  key: 'someCoSign',
  label: 'Some cosign',
  confirmationRecipient: true,
});
