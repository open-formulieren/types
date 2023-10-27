import {InputComponentSchema, MultipleCapable} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type IbanInputSchema = InputComponentSchema<string, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Base types
 */
export interface BaseIbanComponentSchema extends Omit<IbanInputSchema, 'hideLabel' | 'disabled'> {
  type: 'iban';
  validateOn: 'blur';
}

/**
 * @group Form.io components
 * @category Concrete types
 */
export type IbanComponentSchema = MultipleCapable<BaseIbanComponentSchema>;
