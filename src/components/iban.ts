import {BaseComponent, Prettify, WithMultiple} from '../base';
import {ClearOnHide, Description, Hidden, IsSensitiveData, Label, Tooltip} from '../common';
import {Conditional, DisplayConfig, OFExtensions, Registration} from '../extensions';
import {Validation} from '../validation';

/**
 * Component shape/options for a IBAN component.
 *
 * @remarks The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Special components
 */
export type IbanComponentSchema = Prettify<
  BaseComponent<'iban'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    Conditional &
    Validation<'required'> &
    Registration &
    OFExtensions<'label' | 'description' | 'tooltip'> &
    // Unfortunately, this results in a top-level union and there's nothing we can do
    // about it due to TS limitations :(
    WithMultiple<string>
>;
