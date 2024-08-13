import {InputComponentSchema} from '..';
import {ComponentTranslations, ErrorTranslations} from '../i18n';

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

export interface ComponentValidation {
  validate: {pattern: string};
  translatedErrors: ErrorTranslations;
}

export interface AddressComponents {
  postcode?: ComponentValidation;
  city?: ComponentValidation;
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
