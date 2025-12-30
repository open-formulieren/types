/**
 * Base functionality to define Formio component types.
 *
 * It provides the building blocks for built-in and custom component types, allowing
 * for nuances between layout and data components.
 *
 * @module base
 */
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
} from './common';
import {ConditionalOptions, DisplayConfig, OFExtensions, Prefill, Registration} from './extensions';
import {Validation} from './validation';

/**
 * Utility type for complex composed types to make them more readable.
 *
 * Taken from {@link https://www.totaltypescript.com/concepts/the-prettify-helper}
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

/**
 * The shared base for all component types.
 *
 * The type parameter `T` is used for the discriminator to figure out what kind of
 * component it is.
 */
export interface BaseComponent<T extends string> {
  /**
   * Discriminator to determine the component type. Uniquely determines the shape of the
   * component configuration options.
   */
  type: T;

  /**
   * Unique ID for a component in a form definition. Used to render HTML IDs.
   *
   * @deprecated The new renderer does not need this.
   */
  id: string;

  /**
   * Unique key for the component in a larger form definition.
   *
   * The value must comply with the `(\w|\w[\w.\-]*\w)` regex, meaning that periods/dots
   * are allowed unless they're start or end. The period character creates a nesting
   * level in the submission data.
   *
   * @example
   * 'myField'
   * @example
   * 'parent.child' // creates `{parent: {child: <value}}` data.
   */
  key: string;
}

export type WithMultiple<TSingle, TMultiple = TSingle[]> =
  | {
      multiple?: false;
      defaultValue: TSingle;
    }
  | {
      multiple: true;
      defaultValue: TMultiple;
    };

/**
 * Component shape/options for a textfield component.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 */
export type TextField = Prettify<
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
    ConditionalOptions &
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

export type Email = Prettify<
  BaseComponent<'email'> & Label & Description & Tooltip & DisplayConfig
>;

export type AnyComponent = TextField | Email;

const textField: TextField = {
  type: 'textfield',
  id: '123',
  key: 'foo.bar',
  label: 'A text field',
  defaultValue: '',
};

console.log(textField);
