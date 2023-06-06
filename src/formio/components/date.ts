import {InputComponentSchema, MultipleCapable, PrefillConfig} from '..';
import {OFExtensions} from '../base';

/**
 * Date picker min/max date validation types.
 *
 * These are processed in the backend. For the implementation and type definitions:
 * https://github.com/open-formulieren/open-forms/blob/master/src/openforms/formio/dynamic_config/date.py#L53
 */

/**
 * Expression of a date constraint delta.
 *
 * @remarks The numbers are expected to be integers.
 */
interface DateConstraintDelta {
  years: number | null;
  months: number | null;
  days: number | null;
}

interface DateConstraintConfiguration {
  mode: '' | 'fixedValue' | 'future' | 'past' | 'relativeToVariable';
  includeToday: boolean | null;
  variable?: string;
  delta: DateConstraintDelta;
  operator?: 'add' | 'subtract';
}

/**
 * A lot of this is *guesswork*, except for `minDate`/`maxDate`. At this time it's also
 * unclear how relevant each property is, except for minDate/maxDate.
 */
export interface DatePickerConfig {
  showWeeks: boolean;
  startingDay: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  initDate: string;
  minMode: 'day' | 'month' | 'year';
  maxMode: 'day' | 'month' | 'year';
  yearRows: number;
  yearColumns: number;
  minDate: string | null;
  maxDate: string | null;
}

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
