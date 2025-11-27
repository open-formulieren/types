import {InputComponentSchema} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type DigitalAddressType = 'email' | 'phoneNumber';
export type PreferenceUpdateOptions = 'useOnlyOnce' | 'isNewPreferred';

export type DigitalAddress = {
  address: string;
  type: DigitalAddressType;
  preferenceUpdate?: PreferenceUpdateOptions;
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
