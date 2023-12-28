import {InputComponentSchema} from '..';

type Validator = 'required' | 'min' | 'max';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type CurrencyInputSchema = InputComponentSchema<number | null, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Concrete types
 */
export interface CurrencyComponentSchema extends Omit<CurrencyInputSchema, 'hideLabel'> {
  type: 'currency';
  // additional properties
  currency: 'EUR';
  decimalLimit?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  allowNegative?: boolean;
  defaultValue?: number | null;
}
