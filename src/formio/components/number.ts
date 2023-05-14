import {InputComponentSchema} from '..';

export interface NumberComponentSchema extends InputComponentSchema<number, 'required' | 'min' | 'max'> {
  type: 'number';
  decimalLimit?: bigint;  // formio does math on it and feeds it to lodash.repeat -> must be int
  allowNegative?: boolean;
}
