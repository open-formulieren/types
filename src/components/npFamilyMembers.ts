import {BaseComponent, Prettify} from '../base';
import {ClearOnHide, Description, Hidden, IsSensitiveData, Label, Tooltip} from '../common';
import {Conditional, DisplayConfig, OFExtensions, Registration} from '../extensions';
import {Validation} from '../validation';

/**
 * Component shape/options for the "natural person family members" component.
 *
 * This component is dynamically transformed into a selectboxes component by the
 * backend - only the configuration options are relevant.
 *
 * The option values are the `bsn` of each family members, and labels are their names.
 *
 * @deprecated Use the `children` and/or `partners` components instead, if possible.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Special components
 */
export type NpFamilyMembersComponentSchema = Prettify<
  BaseComponent<'npFamilyMembers'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData & {
      /**
       * Whether the look up and include options for partners of the authenticated user.
       */
      includePartners: boolean;
      /**
       * Whether the look up and include options for children of the authenticated user.
       */
      includeChildren: boolean;
    } & Conditional &
    Validation<'required'> &
    Registration &
    OFExtensions<'label' | 'description' | 'tooltip'>
>;
