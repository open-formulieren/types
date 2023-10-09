import {InputComponentSchema, MultipleCapable, PrefillConfig} from '..';
import {OFExtensions} from '../base';
import {
  FutureDateConstraint as BaseFutureDateConstraint,
  PastDateConstraint as BasePastDateConstraint,
  DateConstraintConfiguration,
  DatePickerConfig,
} from '../dates';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type DateInputSchema = InputComponentSchema<string, Validator, TranslatableKeys>;

export interface IncludeToday {
  includeToday: boolean | null;
}

type FutureOrPastDateConstraint = BaseFutureDateConstraint | BasePastDateConstraint;
type FutureDateConstraint = BaseFutureDateConstraint & IncludeToday;
type PastDateConstraint = BasePastDateConstraint & IncludeToday;

/**
 * @group Form.io components
 * @category Base types
 */
export interface BaseDateComponentSchema extends Omit<DateInputSchema, 'hideLabel'>, PrefillConfig {
  type: 'date';
  openForms?: OFExtensions<TranslatableKeys>['openForms'] & {
    minDate?:
      | Exclude<DateConstraintConfiguration, FutureOrPastDateConstraint>
      | FutureDateConstraint;
    maxDate?: Exclude<DateConstraintConfiguration, FutureOrPastDateConstraint> | PastDateConstraint;
  };
  datePicker?: DatePickerConfig;
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
