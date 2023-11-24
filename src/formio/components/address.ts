import {InputComponentSchema} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export interface AddressData {
  postcode: string;
  housenumber: string;
  houseletter?: string;
  housenumberaddition?: string;
}

export type AddressInputSchema = InputComponentSchema<AddressData, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Concrete types
 */
export interface AddressComponentSchema
  extends Omit<AddressInputSchema, 'hideLabel' | 'placeholder' | 'disabled'> {
  type: 'address';
}
