import {InputComponentSchema} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export interface AddressData {
  postcode: string;
  houseNumber: string;
  houseLetter: string;
  houseNumberAddition: string;
}

export type AddressInputSchema = InputComponentSchema<AddressData, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Concrete types
 */
export interface AddressComponentSchema
  extends Omit<AddressInputSchema, 'hideLabel' | 'placeholder' | 'disabled' | 'validateOn'> {
  type: 'address';
}
