import {BaseComponent, Prettify, WithMultiple} from '../base';
import {
  AutoComplete,
  ClearOnHide,
  Description,
  Hidden,
  IsSensitiveData,
  Label,
  Placeholder,
  ReadOnly,
  ShowCharCount,
  Tooltip,
} from '../common';
import {Conditional, DisplayConfig, OFExtensions, Prefill, Registration} from '../extensions';
import {Validation} from '../validation';

/**
 * Component shape/options for a textfield component.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Basic components
 */
export type TextFieldComponentSchema = Prettify<
  BaseComponent<'textfield'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    AutoComplete &
    ReadOnly &
    Placeholder &
    ShowCharCount &
    Conditional &
    Validation<'required' | 'maxLength' | 'pattern'> &
    Registration &
    Prefill & {
      /**
       * @deprecated in favour of addressNL component
       */
      deriveStreetName?: boolean;
      /**
       * @deprecated in favour of addressNL component
       */
      deriveCity?: boolean;
      /**
       * @deprecated in favour of addressNL component
       */
      derivePostcode?: string;
      /**
       * @deprecated in favour of addressNL component
       */
      deriveHouseNumber?: string;
    } & OFExtensions<'label' | 'description' | 'tooltip' | 'placeholder'> &
    // Unfortunately, this results in a top-level union and there's nothing we can do
    // about it due to TS limitations :(
    WithMultiple<string>
>;
