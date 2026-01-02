/**
 * Type definitions for components that support selection of pre-defined options.
 *
 * @module options
 */
import {SupportedLocales} from './i18n';
import {JsonValue} from './json';

/**
 * A predefined choice/option definition.
 */
export interface Option {
  /**
   * The system value that uniquely identifies the option. The `value` is what
   * ultimately gets sent to registration backends.
   */
  value: string;
  /**
   * Human readable label that helps the user understand the meaning of the option.
   */
  label: string;
  /**
   * Optional additional information explaining the meaning of the option.
   */
  description?: string;
  /**
   * Open Forms specific extensions.
   */
  openForms?: {
    /**
     * Translations for the user-facing texts. The backend processes this and assigns
     * the matching top-level properties.
     */
    translations: {
      [K in SupportedLocales]?: {
        label?: string;
        description?: string;
      };
    };
  };
}

/**
 * @groupDescription Option data sources
 *
 * Components like select, radio and selectboxes present pre-defined options that the
 * user has to choose from. These options can be set/retrieved dynamically in the
 * backend from various data sources. Each data source comes with its own configuration
 * properties.
 *
 * @showGroups
 */

/**
 * Type for a JSON logic expression. It is an object with that should have a single
 * string key (the operator), and the value is anything that can be JSON serialized,
 * depending on the specific operation.
 *
 * @remarks
 * It's not possible to express that exactly one key is present, unless we define
 * all possible operators explicitly.
 *
 * @example
 * {"var": "foo"}
 * {"+": [{"var": "foo"}, {"var": "bar"}]}
 */
export type JsonLogicExpression = {
  [operator: string]: string | JsonValue[];
};

/**
 * The available options are defined manually on the component itself.
 *
 * @group Option data sources
 */
export interface ManualValues {
  dataSrc: 'manual';
}

/**
 * The options are extracted from another form variable using a JsonLogic expression.
 *
 * @group Option data sources
 */
export interface VariableValues {
  dataSrc: 'variable';
  /**
   * {@link https://jsonlogic.com/operations.html | JsonLogic} expression to extract
   * the available options. The result must be an array of `[value, label]` tuples.
   */
  itemsExpression: JsonLogicExpression;
}

/**
 * Retrieve the available options from a reference list.
 *
 * @group Option data sources
 */
export interface ReferenceListsValues {
  dataSrc: 'referenceLists';
  /**
   * Identifier to resolve the service pointing to the
   * {@link https://github.com/maykinmedia/referentielijsten | reference lists API}.
   */
  service: string;
  /**
   * Identifying code for a table in the
   * {@link https://github.com/maykinmedia/referentielijsten | reference lists API}.
   * The items present in this table will be returned as options.
   */
  code: string;
}
