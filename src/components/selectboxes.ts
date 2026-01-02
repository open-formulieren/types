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
 * Additional selectboxes-component configuration options that are custom from Formio.js,
 * stored in the top-level `openForms` property.
 *
 * These configurations are used by the backend and/or renderer.
 */
type SelectboxesExtensions = ManualValues | VariableValues | ReferenceListsValues;

/**
 * Additional properties specific to the selectboxes component definition.
 */
interface SelectboxesExtra {
  /**
   * The available options that the user can choose from. Either configured manually on
   * the component itself, or programmatically by the backend after resolving the
   * configured data source set in `openForms.dataSrc`.
   */
  values: Option[];
}

/**
 * Component shape/options for the selectboxes component.
 *
 * Selectboxes allow users to check one or more checkboxes for predefined options. It's
 * the multi-option variant of the `radio` component.
 *
 * @remarks
 * The submission data value type is a mapping of the `option` value to a boolean that
 * indicates if the option is checked or not.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Basic components
 */
export type SelectboxesComponentSchema = Prettify<
  BaseComponent<'selectboxes'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    DefaultValue<Record<string, boolean>> &
    SelectboxesExtra &
    Conditional &
    Validation<'required' | 'minSelectedCount' | 'maxSelectedCount'> &
    Registration &
    Required<OFExtensions<'label' | 'description' | 'tooltip', SelectboxesExtensions>>
>;
