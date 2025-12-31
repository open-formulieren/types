import {BaseComponent, Prettify, WithMultiple} from '../base';
import {
  AutoComplete,
  ClearOnHide,
  Description,
  Hidden,
  IsSensitiveData,
  Label,
  Tooltip,
} from '../common';
import {ConditionalOptions, DisplayConfig, OFExtensions, Registration} from '../extensions';
import {Validation} from '../validation';

interface EmailExtensions {
  /**
   * If enabled, then the user must confirm ownership/access of the provided email
   * address.
   */
  requireVerification?: boolean;
}

/**
 * Component shape/options for an email component.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Basic components
 */
export type EmailComponentSchema = Prettify<
  BaseComponent<'email'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    AutoComplete & {
      /**
       * Set to `true` to treat this email address as a recipient of the confirmation email.
       *
       * @remarks
       * TODO: move this into the `OFExtensions` instead, and prefix with `is`, which
       * will also require backend updates.
       */
      confirmationRecipient?: boolean;
    } & ConditionalOptions &
    Validation<'required'> &
    Registration &
    OFExtensions<'label' | 'description' | 'tooltip', EmailExtensions> &
    // Unfortunately, this results in a top-level union and there's nothing we can do
    // about it due to TS limitations :(
    WithMultiple<string>
>;
