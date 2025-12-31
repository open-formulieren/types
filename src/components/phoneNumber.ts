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
import {Conditional, DisplayConfig, OFExtensions, Registration} from '../extensions';
import {Validation} from '../validation';

/**
 * Component shape/options for a phone number component.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Basic components
 */
export type PhoneNumberComponentSchema = Prettify<
  BaseComponent<'phoneNumber'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    AutoComplete &
    Conditional &
    Validation<'required' | 'pattern'> &
    Registration &
    OFExtensions<'label' | 'description' | 'tooltip'> &
    // Unfortunately, this results in a top-level union and there's nothing we can do
    // about it due to TS limitations :(
    WithMultiple<string>
>;
