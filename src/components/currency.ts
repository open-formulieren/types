import {BaseComponent, Prettify} from '../base';
import {
  ClearOnHide,
  DefaultValue,
  Description,
  Hidden,
  IsSensitiveData,
  Label,
  Tooltip,
} from '../common';
import {Conditional, DisplayConfig, OFExtensions, Registration} from '../extensions';
import {Validation} from '../validation';

type CurrencyExtras = {
  /**
   * The currency used in the component. Fixed to EUR.
   */
  currency: 'EUR';
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
 * Component shape/options for a currency (EUR) component.
 *
 * @remarks The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Basic components
 */
export type CurrencyComponentSchema = Prettify<
  BaseComponent<'currency'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    DefaultValue<number | null> &
    Conditional &
    Validation<'required' | 'min' | 'max'> &
    Registration &
    CurrencyExtras &
    OFExtensions<'label' | 'description' | 'tooltip'>
>;
