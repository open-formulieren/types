import {HasValidation, InputComponentSchema} from '..';
import {ComponentTranslations} from '../i18n';

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

export interface AddressComponents {
  postcode?: HasValidation<'pattern', false>;
  city?: HasValidation<'pattern', false>;
}

export type AddressNLInputSchema = InputComponentSchema<AddressData, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Concrete types
 */
export interface AddressNLComponentSchema
  extends Omit<
    AddressNLInputSchema,
    'hideLabel' | 'placeholder' | 'disabled' | 'validateOn' | 'openForms'
  > {
  type: 'addressNL';
  deriveAddress: boolean;
  layout: 'singleColumn' | 'doubleColumn';
  openForms?: {
    components?: AddressComponents;
    translations?: ComponentTranslations<TranslatableKeys>;
  };
}
