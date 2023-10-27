import {InputComponentSchema} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type CheckboxInputSchema = InputComponentSchema<boolean, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Concrete types
 */
export interface CheckboxComponentSchema
  extends Omit<CheckboxInputSchema, 'hideLabel' | 'disabled'> {
  type: 'checkbox';
  defaultValue: boolean;
}
