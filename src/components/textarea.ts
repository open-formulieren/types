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
import {Conditional, DisplayConfig, OFExtensions} from '../extensions';
import {Validation} from '../validation';

type TextareaExtras = {
  /**
   * Number of rows making up the (starting) height of the textbox.
   */
  rows?: number;
  /**
   * If enabled, the textbox grows in size as the user types more text in it.
   */
  autoExpand: boolean;
};

/**
 * Component shape/options for a number component.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Basic components
 */
export type TextareaComponentSchema = Prettify<
  BaseComponent<'textarea'> &
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
    OFExtensions<'label' | 'description' | 'tooltip' | 'placeholder'> &
    TextareaExtras &
    // Unfortunately, this results in a top-level union and there's nothing we can do
    // about it due to TS limitations :(
    WithMultiple<string>
>;
