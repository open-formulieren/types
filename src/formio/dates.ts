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
 *
 * @group Utilities
 */
export interface DateConstraintDelta {
  years: number | null;
  months: number | null;
  days: number | null;
}

/**
 * @group Utilities
 */
export interface NoDateConstraint {
  mode: '';
}

/**
 * @group Utilities
 */
export interface FixedValueDateConstraint {
  mode: 'fixedValue';
}

/**
 * @group Utilities
 */
export interface FutureDateConstraint {
  mode: 'future';
}

/**
 * @group Utilities
 */
export interface PastDateConstraint {
  mode: 'past';
}

/**
 * @group Utilities
 */
export interface RelativeDateConstraint {
  mode: 'relativeToVariable';
  variable?: string;
  delta: DateConstraintDelta;
  operator?: 'add' | 'subtract';
}

/**
 * @group Utilities
 */
export type DateConstraintConfiguration =
  | NoDateConstraint
  | FixedValueDateConstraint
  | FutureDateConstraint
  | PastDateConstraint
  | RelativeDateConstraint;

/**
 * A lot of this is *guesswork*, except for `minDate`/`maxDate`. At this time it's also
 * unclear how relevant each property is, except for `minDate`/`maxDate`.
 *
 * @group Form.io
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

/** Flatpickr specific custom options for the widget **/
export interface PickerCustomOptions {
  allowInvalidPreload?: boolean;
}
