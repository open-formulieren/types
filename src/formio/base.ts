import {ComponentSchema} from 'formiojs';

import {ComponentTranslations, ErrorTranslations} from './i18n';
import {
  ComponentErrorKeys,
  ComponentErrors,
  CuratedValidatorNames,
  OFValidateOptions,
} from './validation';

// Refinements of form.io 'builtin' types.

/**
 * The `HasValidation` interfaces encapsulates properties involved in validation.
 *
 * - The `validate` property defines the types for each possible Formio validator, e.g.
 *   a `pattern` must be a string, while a `maxLength` must be a number. Open Forms
 *   also supports backend validators that are called async, which is specified as a
 *   list of strings for the validator names.
 * - The `errors` property defines the (translated) error messages that may be returned
 *   by the backend, at runtime. The possible keys are coupled with the possible
 *   validator names in the `validate` property. The resulting strings are the strings
 *   that are ultimately presented to the end user.
 * - The `translatedErrors` property is used to store the translated error messages. The
 *   keys are the supported language codes, the values have the same shape as the
 *   `errors` property. Effectively, at runtime, this object is assigned for the active
 *   language: `Object.assign(obj.errors, obj.translatedErrors[activeLanguage])`.
 *
 * There are some generics involed:
 *
 * - `VN`: the relevant validator names. Most components only use a small subset of
 *   validator options depending on their type. E.g. a `pattern` makes no sense for a
 *   number field, only for textfield/textarea etc. Likewise, `max` only has meaning for
 *   numbers, but not for strings. Typically you pass in a union:
 *   `'pattern' | 'maxLength'`. This generic is then used to populate the `errors` and
 *   `translatedErrors` objects with only the relevant keys.
 * - `WithPlugins` - most components support plugin validation, but the error messages
 *   come from the server. The `plugins` key is never included in the `errors` and
 *   `translatedErrors` objects. Pass `false` if plugin validation is not available for
 *   the component.
 */
export interface HasValidation<
  VN extends CuratedValidatorNames,
  WithPlugins extends boolean = true
> {
  validate?: OFValidateOptions<WithPlugins extends true ? VN | 'plugins' : VN>;
  errors?: ComponentErrors<ComponentErrorKeys<VN>>;
  translatedErrors?: ErrorTranslations<ComponentErrorKeys<VN>>;
}

// any schema having (localised) validators
export type SchemaWithValidation = HasValidation<CuratedValidatorNames>;
// given a specific component schema, extract the possible keys that can be used for
// translated/specific validation errors. This returns the translatable error keys, not
// the validator names.
export type PossibleValidatorErrorKeys<S extends SchemaWithValidation> = Exclude<
  keyof Required<S>['errors'],
  // MultiCapable causes objects to be part of the type, resulting in keyof Object
  // also being a valid key, but it isn't.
  keyof Object
>;

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
    plugin: string; // when no prefill is applicable, the value must be empty string
    attribute: string; // when no prefill is applicable, the value must be empty string
    identifierRole: 'main' | 'authorised_person';
  };
}

/**
 * @group Open Forms schema extensions
 *
 * The `Extra` type variable allows specifying additional, component-specific,
 * extensions namespaced under the `openForms` key.
 */
export interface OFExtensions<TK extends string = string, Extra = {}> {
  isSensitiveData?: boolean;
  openForms?: {
    translations: ComponentTranslations<TK>;
  } & Extra;
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
  | 'widget'
  | 'refreshOn'
  | 'clearOnRefresh'
  // we roll our own validate with only the relevant keys for each component
  | 'validate';

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

export interface Multiple<T> {
  multiple: true;
  defaultValue?: T[];
}

export interface Single<T> {
  multiple?: false;
  defaultValue?: T;
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
export type MultipleCapable<S> = S extends {defaultValue?: infer DV}
  ? DV extends Array<infer NT>
    ? S & Multiple<NT>
    : S & Single<DV>
  : never;

// (user) inputs

/**
 * @group Schema primitives
 *
 * The `ExtraExtensions` type variable allows specifying additional, component-specific,
 * extensions namespaced under the `openForms` key.
 */
export type InputComponentSchema<
  T = unknown,
  VN extends CuratedValidatorNames = CuratedValidatorNames,
  TK extends string = string,
  ExtraExtensions = {}
> = StrictComponentSchema<T | T[]> &
  DisplayConfig &
  OFExtensions<TK, ExtraExtensions> &
  HasValidation<VN>;

/**
 * @group Schema primitives
 */
export interface LayoutComponentSchema<T = never>
  extends Omit<ComponentSchema<T>, UnusedFormioProperties> {}
