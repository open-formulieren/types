import {InputComponentSchema} from '..';

export interface NumberComponentSchema
  extends Omit<InputComponentSchema<number, 'required' | 'min' | 'max'>, 'hideLabel'> {
  type: 'number';
  decimalLimit?: bigint; // formio does math on it and feeds it to lodash.repeat -> must be int
  allowNegative?: boolean;
}
