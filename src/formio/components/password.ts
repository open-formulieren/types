import {InputComponentSchema, MultipleCapable} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type PasswordInputSchema = InputComponentSchema<string, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Base types
 *
 * @deprecated
 *
 * The password component should not be used anymore - it's intended usage has never
 * been clear.
 */
export interface BasePasswordComponentSchema
  extends Omit<PasswordInputSchema, 'hideLabel' | 'disabled' | 'placeholder'> {
  type: 'password';
  autocomplete?: string;
}

/**
 * @group Form.io components
 * @category Concrete types
 *
 * @deprecated
 *
 * The password component should not be used anymore - it's intended usage has never
 * been clear.
 */
export type PasswordComponentSchema = MultipleCapable<BasePasswordComponentSchema>;
