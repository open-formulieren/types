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

/**
 * Component shape/options for a checkbox component.
 *
 * @remarks The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Basic components
 */
export type CheckboxComponentSchema = Prettify<
  BaseComponent<'checkbox'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    DefaultValue<boolean> &
    Conditional &
    Validation<'required'> &
    Registration &
    OFExtensions<'label' | 'description' | 'tooltip'>
>;
