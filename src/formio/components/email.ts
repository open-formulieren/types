import {InputComponentSchema, MultipleCapable} from '..';

type Validator = 'required';

interface BaseEmailComponentSchema
  extends Omit<InputComponentSchema<string, Validator>, 'hideLabel' | 'disabled'> {
  type: 'email';
  // additional properties
  autocomplete?: string;
  // OF custom properties
  confirmationRecipient?: boolean;
}

export type EmailComponentSchema = MultipleCapable<BaseEmailComponentSchema>;
