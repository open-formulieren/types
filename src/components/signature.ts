import {BaseComponent, Prettify} from '../base';
import {ClearOnHide, Description, Hidden, IsSensitiveData, Label, Tooltip} from '../common';
import {Conditional, DisplayConfig, OFExtensions, Registration} from '../extensions';
import {Validation} from '../validation';

/**
 * The value is base64 encoded binary (image) data, or unset and then it's a string.
 *
 * When a non-empty value is set, enforce that it is serialized as a data URI.
 */
export type SignatureValue = `data:image/png;base64,${string}`;

/**
 * Component shape/options for a signature component.
 *
 * @deprecated The signature component has serious accesibility issues - ideally we'd
 * like to remove it.
 *
 * @remarks The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Special components
 */
export type SignatureComponentSchema = Prettify<
  BaseComponent<'signature'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData & {
      /**
       * The footer is a text displayed below the drawing canvas which may hint the
       * user to what is expected of them.
       *
       * @remarks
       * It's a bit unclear what the difference is with the `description` field.
       */
      footer?: string;
    } & Conditional &
    Validation<'required'> &
    Registration &
    OFExtensions<'label' | 'description' | 'tooltip' | 'footer'>
>;
