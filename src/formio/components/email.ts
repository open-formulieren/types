import {InputComponentSchema, MultipleCapable} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export interface EmailExtensions {
  requireVerification?: boolean;
}

export type EmailInputSchema = InputComponentSchema<
  string,
  Validator,
  TranslatableKeys,
  EmailExtensions
>;

/**
 * @group Form.io components
 * @category Base types
 */
export interface BaseEmailComponentSchema extends Omit<EmailInputSchema, 'hideLabel' | 'disabled'> {
  type: 'email';
  validateOn: 'blur';
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
