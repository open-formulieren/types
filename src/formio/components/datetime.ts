import {InputComponentSchema, MultipleCapable, PrefillConfig} from '..';
import {OFExtensions} from '../base';
import {
  DateConstraintConfiguration,
  DatePickerConfig,
  FutureDateConstraint,
  PastDateConstraint,
  PickerCustomOptions,
} from '../dates';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type DateTimeInputSchema = InputComponentSchema<string, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Base types
 */
export interface BaseDateTimeComponentSchema
  extends Omit<DateTimeInputSchema, 'hideLabel'>,
    PrefillConfig {
  type: 'datetime';
  openForms?: OFExtensions<TranslatableKeys>['openForms'] & {
    minDate?: Exclude<DateConstraintConfiguration, PastDateConstraint>;
    maxDate?: Exclude<DateConstraintConfiguration, FutureDateConstraint>;
  };
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
