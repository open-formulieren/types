import {BaseComponent, Prettify} from '../base';
import {ClearOnHide, Description, Hidden, IsSensitiveData, Label, Tooltip} from '../common';
import {Conditional, DisplayConfig, OFExtensions, Registration} from '../extensions';
import {Validation} from '../validation';

/**
 * Shape of the form field value in the submission data.
 */
export interface AddressData {
  /**
   * The postcode of the address, in the format `1234 AB` (space optional).
   *
   * Together with {@link houseNumber}, the street name and city can be derived.
   */
  postcode: string;
  /**
   * The house/address number, without any additions.
   *
   * Together with {@link postcode}, the street name and city can be derived.
   */
  houseNumber: string;
  /**
   * Optional house letter to narrow the exact address. If not applicable, use an empty
   * string.
   */
  houseLetter: string;
  /**
   * Optional addition to narrow the exact address. If not applicable, use an empty
   * string.
   */
  houseNumberAddition: string;
  /**
   * City/municipality part of the address. May be absent if no autofill of the address
   * was performed.
   */
  city?: string;
  /**
   * Street name ('openbare ruimte') part of the address. May be absent if no autofill
   * of the address was performed.
   */
  streetName?: string;
  /**
   * Anti-tampering hash for the resolved {@link city} and {@link streetName} generated
   * on the server. Client-side data tampering will invalidate the hash.
   */
  secretStreetCity?: string;
  /**
   * Marker to indicate that the address was autofilled or not (manually filled).
   *
   * Currently unused, but planned to be used in the component improvements.
   */
  autoPopulated?: boolean;
}

interface AddressNLExtensions {
  /**
   * Configuration options for the nested components/fields used in the addressNL
   * component.
   */
  components?: {
    postcode?: Prettify<Validation<'pattern', false>>;
    city?: Prettify<Validation<'pattern', false>>;
  };
}

/**
 * Component shape/options for the addressNL component.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Special components
 */
export type AddressNLComponentSchema = Prettify<
  BaseComponent<'addressNL'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData & {
      /**
       * Which layout variant to render in the frontend, presentational only.
       */
      layout: 'singleColumn' | 'doubleColumn';
      /**
       * Whether the {@link city} and {@link streetName} fields should be shown and
       * auto-filled through the backend based on {@link postcode} and {@link houseNumber}.
       */
      deriveAddress: boolean;
    } & Conditional &
    Validation<'required'> &
    Registration &
    OFExtensions<'label' | 'description' | 'tooltip', AddressNLExtensions>
>;
