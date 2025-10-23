import {expectAssignable} from 'tsd';

import {CustomerInteractionComponentSchema} from '../../../lib/';

// minimal customer interaction component schema
expectAssignable<CustomerInteractionComponentSchema>({
  id: '123',
  type: 'customerInteraction',
  key: 'customerInteraction',
  label: 'Customer interaction',
  digitalAddressTypes: {
    email: true,
    phoneNumber: true,
  },
  shouldUpdateCustomerData: false,
});

// Full customer interaction component schema
expectAssignable<CustomerInteractionComponentSchema>({
  id: '123',
  type: 'customerInteraction',
  key: 'customerInteraction',
  label: 'Customer interaction',
  description: 'Customer interaction description',
  tooltip: 'Customer interaction tooltip',
  digitalAddressTypes: {
    email: true,
    phoneNumber: true,
  },
  shouldUpdateCustomerData: false,
});

// With translations
expectAssignable<CustomerInteractionComponentSchema>({
  id: '123',
  type: 'customerInteraction',
  key: 'customerInteraction',
  label: 'Customer interaction',
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
