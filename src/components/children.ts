import {BaseComponent, Prettify} from '../base';
import {ClearOnHide, Description, Hidden, IsSensitiveData, Label, Tooltip} from '../common';
import {Conditional, OFExtensions, Registration} from '../extensions';

export interface ChildDetails {
  bsn: string;
  firstNames: string;
  /**
   * @remarks
   * TODO: add support for Date instances?
   */
  dateOfBirth: string;
  /**
   * If child selection is enabled, the submission data will include this key.
   */
  selected?: boolean;
}

/**
 * Component shape/options for the children (family members) component.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Special components
 */
export type ChildrenComponentSchema = Prettify<
  BaseComponent<'children'> &
    Label &
    Description &
    Tooltip &
    Hidden &
    ClearOnHide &
    IsSensitiveData & {
      /**
       * If selection is not enabled, all retrieved/entered children are submitted. If
       * it is enabled, the user must select the relevant children and only those will
       * be part of the submission data.
       */
      enableSelection: boolean;
    } & Conditional &
    Registration &
    OFExtensions<'label' | 'description' | 'tooltip'>
>;
