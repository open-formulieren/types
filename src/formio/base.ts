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
 */
export interface OFExtensions<TK extends string = string> {
  isSensitiveData?: boolean;
  openForms?: {
    translations: ComponentTranslations<TK>;
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
 */
export type InputComponentSchema<
  T = unknown,
  VN extends CuratedValidatorNames = CuratedValidatorNames,
  TK extends string = string
> = StrictComponentSchema<T | T[]> & DisplayConfig & OFExtensions<TK> & HasValidation<VN>;

/**
 * @group Schema primitives
 */
export interface LayoutComponentSchema<T = never>
  extends Omit<ComponentSchema<T>, UnusedFormioProperties> {}
