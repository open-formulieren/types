import {InputComponentSchema, MultipleCapable, PrefillConfig} from '..';

type Validator = 'required' | 'maxLength' | 'pattern';
type TranslatableKeys = 'label' | 'description' | 'tooltip' | 'defaultValue' | 'placeholder';

export type TextFieldInputSchema = InputComponentSchema<string, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Base types
 */
export interface BaseTextFieldComponentSchema
  extends Omit<TextFieldInputSchema, 'hideLabel'>,
    PrefillConfig {
  type: 'textfield';
  // additional properties
  showCharCount?: boolean;
  autocomplete?: string;
  // OF custom properties
  deriveStreetName?: boolean;
  deriveCity?: boolean;
  derivePostcode?: string;
  deriveHouseNumber?: string;
}

/**
 * @group Form.io components
 * @category Concrete types
 */
export type TextFieldComponentSchema = MultipleCapable<BaseTextFieldComponentSchema>;
