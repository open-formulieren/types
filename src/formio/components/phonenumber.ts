import {InputComponentSchema, MultipleCapable} from '..';

type Validator = 'required' | 'pattern';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type PhoneNumberInputSchema = InputComponentSchema<string, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Base types
 */
export interface BasePhoneNumberComponentSchema extends Omit<PhoneNumberInputSchema, 'hideLabel'> {
  type: 'phoneNumber';
  inputMask: null;
  // additional properties
  autocomplete?: string;
}

/**
 * @group Form.io components
 * @category Concrete types
 */
export type PhoneNumberComponentSchema = MultipleCapable<BasePhoneNumberComponentSchema>;
