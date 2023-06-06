import {InputComponentSchema, MultipleCapable, PrefillConfig} from '..';

type Validator = 'required' | 'maxLength' | 'pattern';

/**
 * @group Form.io components
 * @category Base types
 */
export interface BaseTextFieldComponentSchema
  extends Omit<InputComponentSchema<string, Validator>, 'hideLabel'>,
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
