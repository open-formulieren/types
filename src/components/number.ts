import {BaseComponent, Prettify} from '../base';
import {
  AutoComplete,
  ClearOnHide,
  DefaultValue,
  Description,
  Hidden,
  IsSensitiveData,
  Label,
  Tooltip,
} from '../common';
import {
  ConditionalOptions,
  DisplayConfig,
  OFExtensions,
  Prefill,
  Registration,
} from '../extensions';
import {Validation} from '../validation';

type NumberFieldExtras = {
  /**
   * Short indicator that describes the field value, displayed before the input.
   *
   * A limited set of HTML elements are supported.
   */
  prefix?: string;
  /**
   * Short indicator that describes the field value, displayed after the input. Typically used for units.
   *
   * A limited set of HTML elements are supported.
   */
  suffix?: string;

  /**
   * Maximum number of decimal places after the decimal separator.
   */
  decimalLimit?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * Controls whether negative values are allowed or not (minus sign).
   *
   * @remarks
   * TODO: incorporate this into/derive from the `validate.min` instead? See
   * {@link https://github.com/open-formulieren/open-forms/issues/3430}
   */
  allowNegative?: boolean;
};

/**
 * Component shape/options for a number component.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Basic components
 */
export type Number = Prettify<
  BaseComponent<'number'> &
    Label &
    Description &
    Tooltip &
    NumberFieldExtras &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    DefaultValue<number | null> &
    AutoComplete &
    ConditionalOptions &
    Validation<'required' | 'min' | 'max'> &
    Registration &
    Prefill &
    OFExtensions<'label' | 'description' | 'tooltip' | 'prefix' | 'suffix'>
>;
