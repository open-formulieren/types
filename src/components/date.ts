import {BaseComponent, Prettify, WithMultiple} from '../base';
import {
  ClearOnHide,
  Description,
  Hidden,
  IsSensitiveData,
  Label,
  ReadOnly,
  Tooltip,
} from '../common';
import {
  Conditional,
  DisplayConfig,
  FixedValueDateConstraint,
  FutureDateConstraint,
  NoDateConstraint,
  OFExtensions,
  PastDateConstraint,
  Prefill,
  Registration,
  RelativeDateConstraint,
} from '../extensions';
import {Validation} from '../validation';

/**
 * The configuration options for the `datePicker`.
 *
 * This is a stripped down version from what Formio.js itself actually uses, keeping
 * only what's relevant for our backend and/or renderer. The latter implements its own
 * date picker widget, so the options for flatpickr at no longer relevant.
 *
 * @remarks
 * The date picker configuration actually holds the min/max date validation values,
 * which you'd normally expect in the valiate property. We may consider moving this
 * for consistency sake.
 */
interface DatePicker {
  /**
   * The earliest available date in the datepicker. Also used for the input validation.
   */
  minDate: string | null;
  /**
   * The last available date in the datepicker. Also used for the input validation.
   */
  maxDate: string | null;
}

/**
 * Additional properties specific to the date component definition.
 */
interface DateExtras {
  datePicker?: DatePicker;
}

/**
 * Additional date-component configuration options that are custom from Formio.js,
 * stored in the top-level `openForms` property.
 *
 * These configurations are used by the backend and/or renderer.
 */
interface DateExtensions {
  /**
   * How to display the date component input field. The `inputGroup` provides separate
   * input fields for day, month and year, while the `datePicker` provides an input
   * field and toggle to open a date picker widget.
   *
   * The `inputGroup` is most convenient for "known dates" like birthdays.
   */
  widget?: 'inputGroup' | 'datePicker';
  /**
   * Options for how to derive/calculate the minimum allowed date.
   */
  minDate?:
    | NoDateConstraint
    | FixedValueDateConstraint
    | FutureDateConstraint<true>
    | RelativeDateConstraint;
  /**
   * Options for how to derive/calculate the maximum allowed date.
   */
  maxDate?:
    | NoDateConstraint
    | FixedValueDateConstraint
    | PastDateConstraint<true>
    | RelativeDateConstraint;
}

/**
 * Component shape/options for a date component.
 *
 * The smallest supported resolution is minutes - seconds are truncated to be 0 seconds.
 *
 * @remarks
 * Note that the value/`defaultValue` type is just a plain string - a serialized
 * ISO-8601 date. A `Date` instance could be explored in the future, but the time aspect
 * of it will need to be discarded.
 *
 * @remarks The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Basic components
 */
export type DateComponentSchema = Prettify<
  BaseComponent<'date'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    ReadOnly &
    Conditional &
    Validation<'required' | 'minDate' | 'maxDate'> &
    DateExtras &
    Registration &
    Prefill &
    OFExtensions<'label' | 'description' | 'tooltip', DateExtensions> &
    // Unfortunately, this results in a top-level union and there's nothing we can do
    // about it due to TS limitations :(
    WithMultiple<string>
>;
