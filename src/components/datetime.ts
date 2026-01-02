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
   * The earliest available datetime in the datepicker. Also used for the input validation.
   *
   * @remarks
   * Check if we can use the `Date` type here in the future.
   */
  minDate: string | null;
  /**
   * The last available datetime in the datepicker. Also used for the input validation.
   *
   * @remarks
   * Check if we can use the `Date` type here in the future.
   */
  maxDate: string | null;
}

/**
 * Additional properties specific to the date component definition.
 */
interface DateTimeExtras {
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
   * Options for how to derive/calculate the minimum allowed date.
   */
  minDate?:
    | NoDateConstraint
    | FixedValueDateConstraint
    | FutureDateConstraint<false>
    | RelativeDateConstraint;
  /**
   * Options for how to derive/calculate the maximum allowed date.
   */
  maxDate?:
    | NoDateConstraint
    | FixedValueDateConstraint
    | PastDateConstraint<false>
    | RelativeDateConstraint;
}

/**
 * Component shape/options for a date + time component.
 *
 * The smallest supported resolution is minutes - seconds are truncated to be 0 seconds.
 *
 * @remarks
 * Note that the value/`defaultValue` type is just a plain string - a serialized
 * ISO-8601 datetime. A `Date` instance could be explored in the future.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Basic components
 */
export type DateTimeComponentSchema = Prettify<
  BaseComponent<'datetime'> &
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
    DateTimeExtras &
    Registration &
    Prefill &
    OFExtensions<'label' | 'description' | 'tooltip', DateExtensions> &
    // Unfortunately, this results in a top-level union and there's nothing we can do
    // about it due to TS limitations :(
    WithMultiple<string>
>;
