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
import {ManualValues, Option, ReferenceListsValues, VariableValues} from '../options';
import {Validation} from '../validation';

/**
 * Additional radio-component configuration options that are custom from Formio.js,
 * stored in the top-level `openForms` property.
 *
 * These configurations are used by the backend and/or renderer.
 */
type RadioExtensions = ManualValues | VariableValues | ReferenceListsValues;

/**
 * Additional properties specific to the radio component definition.
 */
interface RadioExtra {
  /**
   * The available options that the user can choose from. Either configured manually on
   * the component itself, or programmatically by the backend after resolving the
   * configured data source set in `openForms.dataSrc`.
   */
  values: Option[];
}

/**
 * Component shape/options for the radio component.
 *
 * Radio allows users to check exactly one option in a set of predefined options.
 *
 * @remarks
 * The submission data value type is the `value` property of the selected option, always
 * a string.
 *
 * @remarks The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Basic components
 */
export type RadioComponentSchema = Prettify<
  BaseComponent<'radio'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    // TODO: we can probably drop `null` because empty strings for `value` are not allowed.
    DefaultValue<string | null> &
    RadioExtra &
    Conditional &
    Validation<'required'> &
    Registration &
    Required<OFExtensions<'label' | 'description' | 'tooltip', RadioExtensions>>
>;
