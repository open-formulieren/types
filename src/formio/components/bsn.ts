import {InputComponentSchema, MultipleCapable, PrefillConfig} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type BsnInputSchema = InputComponentSchema<string, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Base types
 */
export interface BsnProperties {
  type: 'bsn';
  inputMask: '999999999';
  validateOn: 'blur';
}

/**
 * @group Form.io components
 * @category Base types
 */
export type BaseBsnComponentSchema = Omit<BsnInputSchema, 'hideLabel' | 'placeholder'> &
  BsnProperties &
  PrefillConfig;

/**
 * @group Form.io components
 * @category Concrete types
 */
export type BsnComponentSchema = MultipleCapable<BaseBsnComponentSchema>;
