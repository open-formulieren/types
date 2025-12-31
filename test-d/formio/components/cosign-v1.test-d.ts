import {expectAssignable, expectNotAssignable} from 'tsd';

import {CosignV1ComponentSchema} from '../../../dist/';

// minimal CoSign component schema
expectAssignable<CosignV1ComponentSchema>({
  id: 'yejak',
  type: 'coSign',
  key: 'someCoSign',
  label: 'Some cosign',
  authPlugin: 'digid',
});

// full, correct schema
expectAssignable<CosignV1ComponentSchema>({
  id: 'yejak',
  type: 'coSign',
  key: 'someCoSign',
  // basic tab in builder form
  label: 'Some cosign',
  description: 'A description',
  authPlugin: 'oidc-digid',
  hidden: false,
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
expectNotAssignable<CosignV1ComponentSchema>({
  type: 'fieldset' as const,
});

// using unsupported properties
expectNotAssignable<CosignV1ComponentSchema>({
  id: 'yejak',
  type: 'CoSign' as const,
  key: 'someCoSign',
  label: 'Some cosign',
  authPlugin: 'digid',
  hideLabel: true,
});

// multiple is not supported
expectNotAssignable<CosignV1ComponentSchema>({
  id: 'yejak',
  type: 'CoSign' as const,
  key: 'someCoSign',
  label: 'Some cosign',
  authPlugin: 'digid',
  multiple: true as boolean,
});
