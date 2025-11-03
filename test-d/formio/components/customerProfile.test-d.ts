import {expectAssignable} from 'tsd';

import {CustomerProfileComponentSchema} from '../../../lib/';

// minimal customer profile component schema
expectAssignable<CustomerProfileComponentSchema>({
  id: '123',
  type: 'customerProfile',
  key: 'customerProfile',
  label: 'Customer profile',
  digitalAddressTypes: {
    email: true,
    phoneNumber: true,
  },
  shouldUpdateCustomerData: false,
});

// Full customer profile component schema
expectAssignable<CustomerProfileComponentSchema>({
  id: '123',
  type: 'customerProfile',
  key: 'customerProfile',
  label: 'Customer profile',
  description: 'Customer profile description',
  tooltip: 'Customer profile tooltip',
  digitalAddressTypes: {
    email: true,
    phoneNumber: true,
  },
  shouldUpdateCustomerData: false,
});

// With translations
expectAssignable<CustomerProfileComponentSchema>({
  id: '123',
  type: 'customerProfile',
  key: 'customerProfile',
  label: 'Customer profile',
  digitalAddressTypes: {
    email: true,
    phoneNumber: true,
  },
  shouldUpdateCustomerData: false,
  openForms: {
    translations: {
      nl: {
        label: 'NL translation',
        description: 'NL translation',
        tooltip: 'NL translation',
      },
    },
  },
});
