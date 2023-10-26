import {InputComponentSchema, MultipleCapable, PrefillConfig} from '..';

type Validator = 'required' | 'min' | 'max';
type TranslatableKeys = 'label' | 'description' | 'tooltip' | 'suffix';

export type CurrencyInputSchema = InputComponentSchema<number, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Base types
 */
export interface BaseCurrencyComponentSchema
  extends Omit<CurrencyInputSchema, 'hideLabel'>,
    PrefillConfig {
  type: 'currency';
  // additional properties
  currency?: 'EUR';
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
export type CurrencyComponentSchema = MultipleCapable<BaseCurrencyComponentSchema>;
