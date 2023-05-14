import {ComponentSchema} from 'formiojs';

import {
  OFValidateOptions,
  ComponentErrorKeys,
  ComponentErrors,
  CuratedValidatorNames,
} from './validation';

// Refinements of form.io 'builtin' types.

export interface HasValidation<VN extends CuratedValidatorNames> {
  validate?: OFValidateOptions<VN | 'plugins'>;
  errors?: ComponentErrors<ComponentErrorKeys<VN>>;
  // TODO: can be refined more using generics!
  translatedErrors?: Record<string, Record<string, string>>;
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
    translations: TranslationsContainer;
  };
  registration?: {
    attribute: string;
  };
}

// Managing content translations

type SupportedLocales = 'en' | 'nl';

interface Translation {
  literal: string;
  translation: string;
}

export type TranslationsContainer = {
  [key in SupportedLocales]?: Translation[];
}

// Define our base schema which refines Form.io's (too loose) schema. This applies
// to *most* of the component types we support.

interface StrictComponentSchema<T> extends ComponentSchema<T> {
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

// // layout
// export interface LayoutComponentSchema<T = never> extends ComponentSchema<T> {
//   validate: never;
// }



// export type OpenFormsComponentSchemaBase<T = unknown> = ComponentSchema<T> &
//   DisplayConfig & {
//     prefill?: PrefillConfig;

//   };
