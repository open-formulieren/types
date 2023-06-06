import {InputComponentSchema, MultipleCapable, PrefillConfig} from '..';

type Validator = 'required' | 'maxLength' | 'pattern';

interface BaseTextFieldComponentSchema
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

export type TextFieldComponentSchema = MultipleCapable<BaseTextFieldComponentSchema>;
