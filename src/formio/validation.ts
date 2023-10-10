import {ValidateOptions} from 'formiojs';

// extend formio's validate interface with our custom extension(s)
declare module 'formiojs' {
  interface ValidateOptions {
    plugins?: string[];
    minTime?: string | null;
    maxTime?: string | null;
  }
}

/**
 * Types related to (client-side) formio validation and their error message overrides.
 */

// See formio.js/src/validator/Validator.js constructor for the source of available
// (translatable) error keys.
export type BaseErrorKeys =
  | 'required'
  | 'min'
  | 'max'
  | 'maxLength'
  | 'invalid_email'
  | 'pattern'
  | 'minDate'
  | 'maxDate'
  // custom, added by OF
  | 'minTime'
  | 'maxTime'
  | 'invalid_time';

export type ComponentErrors<Keys extends BaseErrorKeys = BaseErrorKeys> = {
  [K in Keys]?: string;
};

// We don't support all validators of Form.io, exclude the options that are not
// supported anywhere.

type UnsupportedValidateNames =
  | 'minLength'
  | 'custom'
  | 'customPrivate'
  | 'minSelectedCount'
  | 'maxSelectedCount'
  | 'minWords'
  | 'maxWords'
  | 'email' // email component is exposed, but adds the validation implicitly
  | 'url'
  | 'date'
  | 'day'
  | 'json'
  | 'mask'; // not to be confused with component.inputMask

export type CuratedValidateOptions = Omit<ValidateOptions, UnsupportedValidateNames | 'plugins'>;
export type CuratedValidatorNames = keyof CuratedValidateOptions;

type ValidatorToErrorMap = Required<{[K in CuratedValidatorNames]: BaseErrorKeys}>;
const VALIDATOR_TO_ERROR_KEY = {
  required: 'required',
  min: 'min',
  max: 'max',
  maxLength: 'maxLength',
  pattern: 'pattern',
  // 'email': 'invalid_email',  // email component is exposed, but adds the validation implicitly
  minDate: 'minDate',
  maxDate: 'maxDate',
  // custom, for time component
  minTime: 'minTime' as 'minTime' | 'invalid_time',
  maxTime: 'maxTime' as 'maxTime' | 'invalid_time',
} as const satisfies ValidatorToErrorMap;

// infer valid component error keys from the mapping of validation error code to the
// error key (used for localisation/custom error messages)
export type ComponentErrorKeys<VN extends CuratedValidatorNames> = Pick<
  typeof VALIDATOR_TO_ERROR_KEY,
  VN
>[VN];

/*
  Open Forms-specific extensions.
 */

export interface ExtendedValidateOptions extends CuratedValidateOptions {
  plugins?: string[];
}
export type OFValidatorNames = keyof ExtendedValidateOptions;

// Get a subset of validate options
//   OFValidateOptions<'required' | 'plugins'>
export type OFValidateOptions<K extends OFValidatorNames = OFValidatorNames> = Pick<
  ExtendedValidateOptions,
  K
>;
