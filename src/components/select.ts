import {BaseComponent, Prettify, WithMultiple} from '../base';
import {ClearOnHide, Description, Hidden, IsSensitiveData, Label, Tooltip} from '../common';
import {Conditional, DisplayConfig, OFExtensions, Registration} from '../extensions';
import {ManualValues, Option, ReferenceListsValues, VariableValues} from '../options';
import {Validation} from '../validation';

/**
 * Additional select-component configuration options that are custom from Formio.js,
 * stored in the top-level `openForms` property.
 *
 * These configurations are used by the backend and/or renderer.
 */
type SelectExtensions = ManualValues | VariableValues | ReferenceListsValues;

/**
 * Additional properties specific to the select component definition.
 *
 * Vanilla formio supports additional properties, such as `dataSrc`. Our renderer only
 * supports manual values, so those extra properties have been omitted since they're not
 * relevant for us.
 */
interface SelectExtra {
  /**
   * Data for the select component, containing the available values.
   *
   * This a Formio.js implementation detail handling the polymorphism through `dataSrc`.
   * For Open Forms, this is not relevant, but we comply with the upstream configuration.
   *
   * If other data sources are used (through `openForms.dataSrc`), they result in `data`
   * and `data.values` being set by the backend.
   */
  data: {
    /**
     * The available options that the user can choose from. Either configured manually on
     * the component itself, or programmatically by the backend after resolving the
     * configured data source set in `openForms.dataSrc`.
     */
    values: Option[];
  };
}

/**
 * Component shape/options for the select component.
 *
 * Select allows users to check one or more options from a set of predefined options,
 * depending on component configuration.
 *
 * @remarks
 * The submission data value type depends on the value of `multiple` - for single value
 * components, it's a string matching the `value` the `value` property of the selected
 * option. For multi-value fields, it's an array of strings that match the options
 * values.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Basic components
 */
export type SelectComponentSchema = Prettify<
  BaseComponent<'select'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    SelectExtra &
    Conditional &
    Validation<'required'> &
    Registration &
    Required<OFExtensions<'label' | 'description' | 'tooltip', SelectExtensions>> &
    WithMultiple<string>
>;
