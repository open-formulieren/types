import {BaseComponent, Prettify} from '../base';
import {ClearOnHide, Description, Hidden, IsSensitiveData, Label, Tooltip} from '../common';
import {Conditional, OFExtensions, Registration} from '../extensions';

export interface PartnerDetails {
  bsn: string;
  initials: string;
  affixes: string;
  lastName: string;
  /**
   * @remarks
   * TODO: add support for Date instances?
   */
  dateOfBirth: string;
}

/**
 * Component shape/options for the partners (family members) component.
 *
 * The submission data type is always an array of `PartnerDetails`, even if at most one
 * partner is expected.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Special components
 */
export type PartnersComponentSchema = Prettify<
  BaseComponent<'partners'> &
    Label &
    Description &
    Tooltip &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    Conditional &
    Registration &
    OFExtensions<'label' | 'description' | 'tooltip'>
>;
