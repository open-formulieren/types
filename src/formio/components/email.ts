import {InputComponentSchema, MultipleCapable} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type EmailInputSchema = InputComponentSchema<string, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Base types
 */
export interface BaseEmailComponentSchema extends Omit<EmailInputSchema, 'hideLabel' | 'disabled'> {
  type: 'email';
  // additional properties
  autocomplete?: string;
  // OF custom properties
  confirmationRecipient?: boolean;
}

/**
 * @group Form.io components
 * @category Concrete types
 */
export type EmailComponentSchema = MultipleCapable<BaseEmailComponentSchema>;
