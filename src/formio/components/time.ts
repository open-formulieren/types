import {InputComponentSchema, MultipleCapable} from '..';

type Validator = 'required' | 'minTime' | 'maxTime';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type TimeInputSchema = InputComponentSchema<string, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Base types
 */
export interface BaseTimeComponentSchema extends Omit<TimeInputSchema, 'hideLabel'> {
  type: 'time';
  // hardcoded in builder
  inputType: 'text';
  format: 'HH:mm';
  validateOn: 'blur';
}

/**
 * A time component schema.
 *
 * Note that the value/`defaultValue` type is just a plain string - a serialized
 * ISO-8601 time.
 *
 * The smallest supported resolution is minutes, seconds are truncated to be 0 seconds.
 *
 * @group Form.io components
 * @category Concrete types
 */
export type TimeComponentSchema = MultipleCapable<BaseTimeComponentSchema>;
