import {InputComponentSchema, MultipleCapable, PrefillConfig} from '..';
import {
  DateConstraintConfiguration,
  DatePickerConfig,
  FutureDateConstraint,
  PastDateConstraint,
  PickerCustomOptions,
} from '../dates';

type Validator = 'required' | 'minDate' | 'maxDate';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export interface DateTimeExtensions {
  minDate?: Exclude<DateConstraintConfiguration, PastDateConstraint>;
  maxDate?: Exclude<DateConstraintConfiguration, FutureDateConstraint>;
}

export type DateTimeInputSchema = InputComponentSchema<
  string,
  Validator,
  TranslatableKeys,
  DateTimeExtensions
>;

/**
 * @group Form.io components
 * @category Base types
 */
export interface BaseDateTimeComponentSchema
  extends Omit<DateTimeInputSchema, 'hideLabel'>,
    PrefillConfig {
  type: 'datetime';
  datePicker?: DatePickerConfig;
  customOptions?: PickerCustomOptions;
}

/**
 * A date component schema.
 *
 * Note that the value/`defaultValue` type is just a plain string, as native Date
 * objects must be serialized into a string for data exchange via JSON. The expected
 * date format is ISO-8601 with time information, e.g. YYYY-MM-DDThh:mmZ.
 *
 * The smallest supported resolution is minutes, seconds are truncated to be 0 seconds.
 *
 * @group Form.io components
 * @category Concrete types
 */
export type DateTimeComponentSchema = MultipleCapable<BaseDateTimeComponentSchema>;
