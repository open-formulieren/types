import {InputComponentSchema} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type DigitalAddressType = 'email' | 'phoneNumber';

export type DigitalAddress = {
  address: string;
  type: DigitalAddressType;
  useOnlyOnce?: boolean;
  isNewPreferred?: boolean;
};

export type CustomerProfileData = DigitalAddress[];

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
  digitalAddressTypes: DigitalAddressType[];
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
