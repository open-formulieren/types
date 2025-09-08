import {InputComponentSchema, MultipleCapable, PrefillConfig} from '..';
import {
  FutureDateConstraint as BaseFutureDateConstraint,
  PastDateConstraint as BasePastDateConstraint,
  DateConstraintConfiguration,
  DatePickerConfig,
  PickerCustomOptions,
} from '../dates';

type Validator = 'required' | 'minDate' | 'maxDate';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export interface IncludeToday {
  includeToday: boolean | null;
}

type FutureOrPastDateConstraint = BaseFutureDateConstraint | BasePastDateConstraint;
type FutureDateConstraint = BaseFutureDateConstraint & IncludeToday;
type PastDateConstraint = BasePastDateConstraint & IncludeToday;

export interface DateExtensions {
  widget?: 'inputGroup' | 'datePicker';
  minDate?: Exclude<DateConstraintConfiguration, FutureOrPastDateConstraint> | FutureDateConstraint;
  maxDate?: Exclude<DateConstraintConfiguration, FutureOrPastDateConstraint> | PastDateConstraint;
}

export type DateInputSchema = InputComponentSchema<
  string,
  Validator,
  TranslatableKeys,
  DateExtensions
>;

/**
 * @group Form.io components
 * @category Base types
 */
export interface BaseDateComponentSchema extends Omit<DateInputSchema, 'hideLabel'>, PrefillConfig {
  type: 'date';
  datePicker?: DatePickerConfig;
  customOptions?: PickerCustomOptions;
}

/**
 * A date component schema.
 *
 * Note that the value/`defaultValue` type is just a plain string, as native Date
 * objects must be serialized into a string for data exchange via JSON. The expected
 * date format is ISO-8601, i.e. YYYY-MM-DD.
 *
 * @group Form.io components
 * @category Concrete types
 */
export type DateComponentSchema = MultipleCapable<BaseDateComponentSchema>;
