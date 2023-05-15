import {InputComponentSchema, PrefillConfig} from '..';

type Validator = 'required' | 'maxLength' | 'pattern';

export interface TextFieldComponentSchema
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
