import {BaseComponent, Prettify} from '../base';
import {ClearOnHide, Description, Hidden, IsSensitiveData, Label, Tooltip} from '../common';
import {Conditional, DisplayConfig, OFExtensions} from '../extensions';
import {Validation} from '../validation';

/**
 * Different kinds of digital addresses that a user may wish to receive communication
 * on. Also known as a "communication channel".
 */
export type DigitalAddressType = 'email' | 'phoneNumber';

/**
 * Possible ways to treat a user's digital address - if they're authenticated, there's
 * an option to update their customer profile, otherwise it's single use.
 */
export type PreferenceUpdateOptions = 'useOnlyOnce' | 'isNewPreferred';

/**
 * Details for a single digital address of a user.
 */
export type DigitalAddress = {
  /**
   * The address type. A user can provide multiple address of different types.
   */
  type: DigitalAddressType;
  /**
   * The value of the address. The shape and semantics are determined by the `type`.
   */
  address: string;
  /**
   * How to process this address when interacting with the customer profile. Absent for
   * anonymous users for which there's no known profile.
   */
  preferenceUpdate?: PreferenceUpdateOptions;
};

interface CustomerProfileExtra {
  /**
   * Which address types can be displayed and/or provided.
   */
  digitalAddressTypes: DigitalAddressType[];
  /**
   * If enabled and communication preferences were prefilled for a user, then the
   * profile in the customer interactions API can be updated when the submission is
   * processed. Disable to only register the preferences once without updating any
   * profile.
   */
  shouldUpdateCustomerData: boolean;
}

/**
 * Component shape/options for the customer profile component.
 *
 * The customer profile is typically used for digital communication preferences, and
 * can interact with the customer interaction APIs.
 *
 * The intrinsic value type in the submission data is an array of `DigitalAddress` items.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Special components
 */
export type CustomerProfileComponentSchema = Prettify<
  BaseComponent<'customerProfile'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    CustomerProfileExtra &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    Conditional &
    Validation<'required'> &
    OFExtensions<'label' | 'description' | 'tooltip'>
>;
