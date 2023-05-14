import {ComponentSchema} from 'formiojs';

import {
  OFValidateOptions,
  ComponentErrorKeys,
  ComponentErrors,
  CuratedValidatorNames,
} from './validation';
import {ComponentTranslations, ErrorTranslations} from './i18n';

// Refinements of form.io 'builtin' types.

export interface HasValidation<VN extends CuratedValidatorNames> {
  validate?: OFValidateOptions<VN | 'plugins'>;
  errors?: ComponentErrors<ComponentErrorKeys<VN>>;
  translatedErrors?: ErrorTranslations<ComponentErrorKeys<VN>>;
}

// Custom Open Forms types

export interface DisplayConfig {
  showInSummary?: boolean;
  showInEmail?: boolean;
  showInPDF?: boolean;
}

export interface PrefillConfig {
  plugin: string | null;
  attribute: string | null;
}

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
  | 'input'  // often present in the schema, but I don't think we do anything with it
  | 'tableView'
  | 'protected'
  | 'prefix'
  | 'suffix'
  | 'unique'
  | 'persistent'
  | 'logic'  // the backend handles any logic - this may change in the future
  | 'customClass'  // only used in the content component -> re-add it there
  | 'dataGridLabel'
  | 'labelPosition'
  | 'labelWidth'
  | 'labelMargin'
  | 'errorLabel'
  | 'tooltip'
  | 'tabindex'
  | 'autofocus'
  | 'dbIndex'
  | 'customDefaultValue'
  | 'calculateValue'
  | 'allowCalculateOverride'
  | 'refreshOn'
  | 'clearOnRefresh'
;

// Define our base schema which refines Form.io's (too loose) schema. This applies
// to *most* of the component types we support.
interface StrictComponentSchema<T> extends Omit<ComponentSchema<T>, UnusedFormioProperties> {
  id: string;
  key: string;
  type: string;
  label: string;
}

// (user) inputs

export type InputComponentSchema<
  T = unknown,
  VN extends CuratedValidatorNames = CuratedValidatorNames,
> =
  StrictComponentSchema<T>
  & HasValidation<VN>
  & DisplayConfig
  & OFExtensions
;

// layout
export interface LayoutComponentSchema<T = never> extends Omit<ComponentSchema<T>, UnusedFormioProperties | 'validate'> {
}
