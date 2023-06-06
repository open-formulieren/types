import {InputComponentSchema, MultipleCapable} from '..';

type Validator = 'required';

/**
 * @group Form.io components
 * @category Base types
 */
export interface BaseEmailComponentSchema
  extends Omit<InputComponentSchema<string, Validator>, 'hideLabel' | 'disabled'> {
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
