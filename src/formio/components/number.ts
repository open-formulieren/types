import {InputComponentSchema, PrefillConfig} from '..';

type Validator = 'required' | 'min' | 'max';
type TranslatableKeys = 'label' | 'description' | 'tooltip' | 'suffix';

export type NumberInputSchema = InputComponentSchema<number | null, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Base types
 */
export interface BaseNumberComponentSchema
  extends Omit<NumberInputSchema, 'hideLabel' | 'placeholder'>,
    PrefillConfig {
  type: 'number';
  defaultValue?: number | null;
  /*
    formio does math on `decimalLimit`` and feeds it to lodash.repeat -> must be int at
    runtime. There does not appear to be a more elegant way to only allow positive integers.
   */
  decimalLimit?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  allowNegative?: boolean;
  // re-add
  prefix?: string;
  suffix?: string;
}

/**
 * @group Form.io components
 * @category Concrete types
 */
export type NumberComponentSchema = BaseNumberComponentSchema;
