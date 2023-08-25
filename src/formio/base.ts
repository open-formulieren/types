import {ComponentSchema} from 'formiojs';

import {ComponentTranslations, ErrorTranslations} from './i18n';
import {
  ComponentErrorKeys,
  ComponentErrors,
  CuratedValidatorNames,
  OFValidateOptions,
} from './validation';

// Refinements of form.io 'builtin' types.

export interface HasValidation<VN extends CuratedValidatorNames> {
  validate?: OFValidateOptions<VN | 'plugins'>;
  errors?: ComponentErrors<ComponentErrorKeys<VN>>;
  translatedErrors?: ErrorTranslations<ComponentErrorKeys<VN>>;
}

/**
 * @group Open Forms schema extensions
 */
export interface DisplayConfig {
  showInSummary?: boolean;
  showInEmail?: boolean;
  showInPDF?: boolean;
}

/**
 * @group Open Forms schema extensions
 */
export interface PrefillConfig {
  prefill?: {
    plugin: string | null;
    attribute: string | null;
    identifierRole: 'main' | 'authorised_person';
  };
}

/**
 * @group Open Forms schema extensions
 */
export interface OFExtensions {
  isSensitiveData?: boolean;
  openForms?: {
    translations: ComponentTranslations;
  };
  registration?: {
    attribute: string;
  };
}

// Form.io defines *a lot* of optional properties in their component schema. We can omit
// the ones we never make use of to reduce confusion for the formio-renderer and
// formio-builder libraries.
type UnusedFormioProperties =
  | 'input' // often present in the schema, but I don't think we do anything with it
  | 'tableView'
  | 'protected'
  | 'prefix'
  | 'suffix'
  | 'unique'
  | 'persistent'
  | 'logic' // the backend handles any logic - this may change in the future
  | 'customClass' // only used in the content component -> re-add it there
  | 'dataGridLabel'
  | 'labelPosition'
  | 'labelWidth'
  | 'labelMargin'
  | 'errorLabel'
  | 'tabindex'
  | 'autofocus'
  | 'dbIndex'
  | 'customDefaultValue'
  | 'calculateValue'
  | 'allowCalculateOverride'
  | 'refreshOn'
  | 'clearOnRefresh';

/**
 * Define a strict variant of Form.io's ComponentSchema interface.
 *
 * This schema refines Form.io's (too loose) schema. It applies to *most* of the
 * component types we support.
 *
 * We also exclude 'multiple' here to force people to explicitly opt-in through the
 * `MultipleCapable` for components that support it.
 *
 * @group Schema primitives
 */
export interface StrictComponentSchema<T>
  extends Omit<ComponentSchema<T>, UnusedFormioProperties | 'multiple'> {
  id: string;
  key: string;
  type: string;
  label: string;
}

/**
 * Make a given component schema multiple capable by type narrowing the `defaultValue`
 * based on the (literal) value of the multiple key.
 *
 * This is done by inferring the canonical data type of the component schema and
 * checking which generic type var is passed in to decide on the correct decision
 * branch. The T typevar is fed all the way down to Form.io's ComponentSchema<T>.
 *
 * Note that this requires the InputComponentSchema to define upfront that the
 * value can be T or T[], as the base type needs to be sufficiently wide.
 */
export type MultipleCapable<S> = S extends StrictComponentSchema<infer T>
  ? T extends Array<infer NT>
    ? S & {multiple?: true; defaultValue?: NT[]}
    : S & {multiple?: false; defaultValue?: T}
  : never;

// (user) inputs

/**
 * @group Schema primitives
 */
export interface InputComponentSchema<
  T = unknown,
  VN extends CuratedValidatorNames = CuratedValidatorNames
> extends StrictComponentSchema<T | T[]>,
    DisplayConfig,
    OFExtensions {
  validate?: HasValidation<VN>['validate'];
  errors?: HasValidation<VN>['errors'];
  translatedErrors?: HasValidation<VN>['translatedErrors'];
}

/**
 * @group Schema primitives
 */
export interface LayoutComponentSchema<T = never>
  extends Omit<ComponentSchema<T>, UnusedFormioProperties | 'validate'> {}
