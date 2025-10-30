import {InputComponentSchema, PrefillConfig} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

interface DigitalAddress {
  address: string;
  useOnlyOnce?: boolean;
  isNewPreferred?: boolean;
}

export interface CustomerInteractionData {
  email?: DigitalAddress;
  phoneNumber?: DigitalAddress;
}

export type CustomerInteractionInputSchema = InputComponentSchema<
  CustomerInteractionData,
  Validator,
  TranslatableKeys
>;

/**
 * @group Form.io components
 * @category Base types
 */
export interface CustomerInteractionProperties {
  type: 'customerInteraction';
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
export type CustomerInteractionComponentSchema = Omit<
  CustomerInteractionInputSchema,
  'hideLabel' | 'placeholder' | 'disabled' | 'validateOn'
> &
  CustomerInteractionProperties &
  PrefillConfig;
