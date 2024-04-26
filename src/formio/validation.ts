/**
 * @file Types related to (client-side) formio validation and their error message overrides.
 *
 * This module is responsible for defining:
 * - the available validation constraints
 * - the corresponding (translatable) error codes.
 *
 * The `ValidateOptions` interface (which is extended/restricted for our needs) defines
 * the available validation constraints that can be used by a component. By using our custom
 * `OFValidateOptions` interface, one can define the available `validate` keys:
 *
 * ```ts
 * type TimeComponentSchema = SomeBaseComponent & {validate: OFValidateOptions<'min' | 'max'>};
 *
 * // a component with such a type can be defined as:
 * const timeComponent: TimeComponentSchema = {
 *   validate: {
 *     minTime: '11:00',
 *     maxTime: '13:00',
 *   }
 * }
 * ```
 *
 * Each validation constraint key can provide possible error keys if validation fails. This mapping
 * of constraint keys (e.g. `minTime`, `maxTime`) to the error keys is defined in `VALIDATOR_TO_ERROR_KEY`.
 *
 * This can be used when defining the error messages:
 *
 * ```ts
 * type TimeComponentSchema = SomeBaseComponent & {errors: ComponentErrors<ComponentErrorKeys<'minTime' | 'maxTime'>>};
 *
 * // a component with such a type can be defined as:
 * const numberComponent: NumberComponentSchema = {
 *   errors: {
 *     minTime: 'Time should be greater than ...',
 *     maxTime: 'Time should be lower than ...',
 *     invalid_time: 'Invalid time', // Both `minTime` and `maxTime` provides the `invalid_time` error key.
 *   }
 * }
 * ```
 *
 * NOTE: In some places of the file, we refer to the validation constraint keys as "validator names". Those should
 * *NOT* be confused with validator keys used in the SDK (e.g. `timeMinMax`).
 */
import {ValidateOptions} from 'formiojs';

// extend formio's validate interface with our custom extension(s)
declare module 'formiojs' {
  interface ValidateOptions {
    // it's not a validator but formio uses it and we can provide translations support
    // in the future
    customMessage?: string;
    plugins?: string[];
    minTime?: string | null;
    maxTime?: string | null;
  }
}

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
  | 'customMessage'
  | 'minSelectedCount'
  | 'maxSelectedCount'
  | 'invalid_date'
  // custom, added by OF
  | 'minTime'
  | 'maxTime'
  | 'invalid_time'
  | 'invalid_datetime';

export type ComponentErrors<Keys extends BaseErrorKeys = BaseErrorKeys> = {
  [K in Keys]?: string;
};

// We don't support all validators of Form.io, exclude the options that are not
// supported anywhere.

type UnsupportedValidateNames =
  | 'minLength'
  | 'custom'
  | 'customPrivate'
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
  customMessage: 'customMessage',
  required: 'required',
  min: 'min',
  max: 'max',
  maxLength: 'maxLength',
  pattern: 'pattern',
  minSelectedCount: 'minSelectedCount',
  maxSelectedCount: 'maxSelectedCount',
  // 'email': 'invalid_email',  // email component is exposed, but adds the validation implicitly
  // `min/maxDate` is a constraint used by both the date and datetime component:
  minDate: 'minDate' as 'minDate' | 'invalid_date' | 'invalid_datetime',
  maxDate: 'maxDate' as 'maxDate' | 'invalid_date' | 'invalid_datetime',
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
