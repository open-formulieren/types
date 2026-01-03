import {BaseComponent, Prettify, WithMultiple} from '../base';
import {
  ClearOnHide,
  Description,
  Hidden,
  IsSensitiveData,
  Label,
  ReadOnly,
  Tooltip,
} from '../common';
import {Conditional, DisplayConfig, OFExtensions, Prefill, Registration} from '../extensions';
import {Validation} from '../validation';

/**
 * Component shape/options for a BSN component.
 *
 * @remarks The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Special components
 */
export type BsnComponentSchema = Prettify<
  BaseComponent<'bsn'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    ReadOnly &
    Conditional &
    Validation<'required'> &
    Registration &
    Prefill &
    OFExtensions<'label' | 'description' | 'tooltip'> &
    // Unfortunately, this results in a top-level union and there's nothing we can do
    // about it due to TS limitations :(
    WithMultiple<string>
>;
