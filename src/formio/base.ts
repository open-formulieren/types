// import {ComponentSchema} from 'formiojs';

import {
  OFValidateOptions,
  ComponentErrorKeys,
  ComponentErrors,
  CuratedValidatorNames,
} from './validation';

// Refinements of form.io 'builtin' types.

export interface HasValidation<N extends CuratedValidatorNames> {
  validate?: OFValidateOptions<N | 'plugins'>;
  errors?: ComponentErrors<ComponentErrorKeys<N>>;
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

// (user) inputs

// export interface InputComponentSchema<
//   T = unknown,
//   VK extends keyof ExtendedValidateOptions = keyof ExtendedValidateOptions
// > extends ComponentSchema<T>, DisplayConfig {
//   id: string;
//   key: string;
//   type: string;
//   label: string;
//   validate?: OFValidateOptions<VK>,
// }

// // layout
// export interface LayoutComponentSchema<T = never> extends ComponentSchema<T> {
//   validate: never;
// }



// export type OpenFormsComponentSchemaBase<T = unknown> = ComponentSchema<T> &
//   DisplayConfig & {
//     validate?: ExtendedValidateOptions;
//     isSensitiveData?: boolean;
//     translatedErrors?: Record<string, Record<string, string>>;
//     errors?: ComponentErrors;
//     prefill?: PrefillConfig;
//     registration?: {
//       attribute: string;
//     };
//     openForms?: {
//       translations: TranslationsContainer;
//     };
//   };
