import {InputComponentSchema, MultipleCapable, PrefillConfig} from '..';
import {OFExtensions} from '../base';
import {DateConstraintConfiguration, DatePickerConfig} from '../dates';

type Validator = 'required';

/**
 * @group Form.io components
 * @category Base types
 */
export interface BaseDateComponentSchema
  extends Omit<InputComponentSchema<string, Validator>, 'hideLabel'>,
    PrefillConfig {
  type: 'date';
  openForms?: OFExtensions['openForms'] & {
    minDate?: DateConstraintConfiguration;
    maxDate?: DateConstraintConfiguration;
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
