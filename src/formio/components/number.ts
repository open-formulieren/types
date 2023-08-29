import {InputComponentSchema, MultipleCapable} from '..';

type Validator = 'required' | 'min' | 'max';

/**
 * @group Form.io components
 * @category Base types
 */
export interface BaseNumberComponentSchema
  extends Omit<InputComponentSchema<number, Validator>, 'hideLabel' | 'placeholder'> {
  type: 'number';
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
export type NumberComponentSchema = MultipleCapable<BaseNumberComponentSchema>;
