import {InputComponentSchema} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export interface AddressData {
  postcode: string;
  houseNumber: string;
  houseLetter: string;
  houseNumberAddition: string;
  city?: string;
  streetName?: string;
  secretStreetCity?: string;
}

export type AddressNLInputSchema = InputComponentSchema<AddressData, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Concrete types
 */
export interface AddressNLComponentSchema
  extends Omit<AddressNLInputSchema, 'hideLabel' | 'placeholder' | 'disabled' | 'validateOn'> {
  type: 'addressNL';
  deriveAddress: boolean;
  layout: 'singleColumn' | 'doubleColumn';
}
