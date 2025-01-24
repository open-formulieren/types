import {HasValidation, InputComponentSchema} from '..';

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
  autoPopulated?: boolean;
}

export interface AddressComponents {
  postcode?: HasValidation<'pattern', false>;
  city?: HasValidation<'pattern', false>;
}

export interface AddressNLExtensions {
  components?: AddressComponents;
}

export type AddressNLInputSchema = InputComponentSchema<
  AddressData,
  Validator,
  TranslatableKeys,
  AddressNLExtensions
>;

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
