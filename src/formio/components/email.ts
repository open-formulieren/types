import {InputComponentSchema} from '..';

type Validator = 'required';

interface BaseEmailComponentSchema<T = string>
  extends Omit<InputComponentSchema<T, Validator>, 'hideLabel' | 'disabled'> {
  type: 'email';
  // additional properties
  autocomplete?: string;
  // OF custom properties
  confirmationRecipient?: boolean;
}

interface SingleValueEmailComponentSchema extends BaseEmailComponentSchema<string> {
  multiple?: false;
}

interface MultiValueEmailComponentSchema extends BaseEmailComponentSchema<string[]> {
  multiple?: true;
}

export type EmailComponentSchema = SingleValueEmailComponentSchema | MultiValueEmailComponentSchema;
