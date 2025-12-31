import {expectAssignable, expectNotAssignable} from 'tsd';

import {SignatureComponentSchema} from '../../../dist/';

// minimal signature component schema
expectAssignable<SignatureComponentSchema>({
  id: 'yejak',
  type: 'signature',
  key: 'someSignature',
  label: 'Some signature',
});

// with additional, signature-component specific properties
expectAssignable<SignatureComponentSchema>({
  id: 'yejak',
  type: 'signature',
  key: 'someSignature',
  label: 'Some signature',
  defaultValue: 'data:image/png;base64,dGhlIGdhbWU=',
  footer: 'Please do not draw inappropriate images',
});

// full, correct schema
expectAssignable<SignatureComponentSchema>({
  id: 'yejak',
  type: 'signature',
  // basic tab in builder form
  label: 'Some signature',
  key: 'someSignature',
  description: 'A description',
  tooltip: 'A tooltip',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  hidden: false,
  clearOnHide: true,
  isSensitiveData: false,
  defaultValue: '',
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
      nl: {
        label: 'foo',
        description: 'bar',
      },
    },
  },
});

// different component type
expectNotAssignable<SignatureComponentSchema>({
  type: 'fieldset' as const,
});

// using unsupported properties
expectNotAssignable<SignatureComponentSchema>({
  id: 'yejak',
  type: 'signature' as const,
  key: 'someSignature',
  label: 'Some signature',
  hideLabel: true,
});

// bad value format
expectNotAssignable<SignatureComponentSchema>({
  id: 'yejak',
  type: 'signature' as const,
  key: 'someSignature',
  label: 'Some signature',
  defaultValue: 'random string',
});

// multiple is not supported
expectNotAssignable<SignatureComponentSchema>({
  id: 'yejak',
  type: 'signature' as const,
  key: 'someSignature',
  label: 'Some signature',
  multiple: true,
  defaultValue: [],
});
