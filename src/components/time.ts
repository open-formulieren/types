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
import {Conditional, DisplayConfig, OFExtensions, Registration} from '../extensions';
import {Validation} from '../validation';

/**
 * Component shape/options for a time component.
 *
 * The smallest supported resolution is minutes - seconds are truncated to be 0 seconds.
 *
 * @remarks
 * Note that the value/`defaultValue` type is just a plain string - a serialized
 * ISO-8601 time. There's no native time type in JS that we can use instead.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Basic components
 */
export type TimeComponentSchema = Prettify<
  BaseComponent<'time'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    ReadOnly &
    Conditional &
    Validation<'required' | 'minTime' | 'maxTime'> &
    Registration &
    OFExtensions<'label' | 'description' | 'tooltip'> &
    // Unfortunately, this results in a top-level union and there's nothing we can do
    // about it due to TS limitations :(
    WithMultiple<string>
>;
