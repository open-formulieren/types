import {InputComponentSchema} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export interface DigitalAddress {
  address: string;
  useOnlyOnce?: boolean;
  isNewPreferred?: boolean;
}

export interface CustomerProfileData {
  email?: DigitalAddress;
  phoneNumber?: DigitalAddress;
}

export type CustomerProfileInputSchema = InputComponentSchema<
  CustomerProfileData,
  Validator,
  TranslatableKeys
>;

/**
 * @group Form.io components
 * @category Base types
 */
export interface CustomerProfileProperties {
  type: 'customerProfile';
  shouldUpdateCustomerData: boolean;
  digitalAddressTypes: {
    email: boolean;
    phoneNumber: boolean;
  };
}

/**
 * @group Form.io components
 * @category Concrete types
 */
export type CustomerProfileComponentSchema = Omit<
  CustomerProfileInputSchema,
  'hideLabel' | 'placeholder' | 'disabled' | 'validateOn'
> &
  CustomerProfileProperties;
