/**
 * Available validators in Open Forms, a subset *and* extension of the validators
 * in Formio.
 *
 * Validation describes the possible validator names (like `required` or `maxLength`),
 * and integrates with the validation error message machinery where a custom text can
 * be specified for each language, for each validator error key. Note that some
 * validators may support multiple errors keys!
 *
 * @module validation
 */
import {Prettify} from './base';
import {SupportedLocales} from './i18n';

export interface ValidateOptions {
  /**
   * Set to true to require a non-empty value to be provided for the field.
   */
  required?: boolean;
  /**
   * Maximum length of a value for text-based fields.
   */
  maxLength?: number;
  /**
   * RegExp pattern that the value of text-based fields must match.
   */
  pattern?: string;
  /**
   * Minimum value for numeric values.
   */
  min?: number;
  /**
   * Maximum value for numeric values.
   */
  max?: number;
  /**
   * The minimum number of options that must be selected for fields that support
   * multi-option selection, like select and selectboxes.
   */
  minSelectedCount?: number;
  /**
   * The maximum number of options that may be selected for fields that support
   * multi-option selection, like select and selectboxes.
   */
  maxSelectedCount?: number;
  /**
   * Minimum date or datetime, including the boundary. The value must be on or after
   * this day/moment.
   *
   * @todo Support `Date` instances for native types - doing the parsing once.
   */
  minDate?: string | null;
  /**
   * Maximum date or datetime, including the boundary. The value must be on or before
   * this day/moment.
   *
   * @todo Support `Date` instances for native types - doing the parsing once.
   */
  maxDate?: string | null;
  /**
   * Minimum time, including the boundary. The value must be later than this time,
   * unless a `maxTime` is specified that comes before `minTime`, then the interval is
   * considered to span midnight.
   *
   * This is an Open Forms-specific feature.
   *
   * @todo Support `Date` instances for native types - doing the parsing once.
   */
  minTime?: string | null;
  /**
   * Maximum time, including the boundary. The value must be before this time,
   * unless a `minTime` is specified that comes after `maxTime`, then the interval is
   * considered to span midnight.
   * This is an Open Forms-specific feature.
   *
   * @todo Support `Date` instances for native types - doing the parsing once.
   */
  maxTime?: string | null;
  /**
   * List of plugin identifiers for async backend validation. The value is considered
   * valid as soon as one plugin considers the value valid.
   *
   * This is an Open Forms-specific feature.
   */
  plugins?: string[];
}

export type ValidatorNames = Prettify<Exclude<keyof ValidateOptions, 'plugins'>>;

type AllSupportedErrorKeys =
  | 'required'
  | 'min'
  | 'max'
  | 'maxLength'
  | 'invalid_email'
  | 'pattern'
  | 'minDate'
  | 'maxDate'
  | 'minSelectedCount'
  | 'maxSelectedCount'
  | 'invalid_date'
  | 'minTime'
  | 'maxTime'
  | 'invalid_time'
  | 'invalid_datetime';

type ValidatorToErrorMap = Required<{[K in ValidatorNames]: AllSupportedErrorKeys}>;
const VALIDATOR_TO_ERROR_KEY = {
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

/**
 * Infer the available error message keys for the requested validators.
 *
 * The `VALIDATOR_TO_ERROR_KEY` mapping tracks which error message keys can be used
 * by a given validator.
 */
export type ErrorMessageKeys<VN extends ValidatorNames> = Pick<
  typeof VALIDATOR_TO_ERROR_KEY,
  VN
>[VN];

/**
 * Build the validation properties from the requested validator names.
 *
 * - Constructs the validate shape.
 * - Constructs the translated options shape.
 *
 * @example
 * type F = Validate<'required' | 'maxLength' | 'pattern'>; // also includes the 'plugins'
 * type G = Validate<'required' | 'min', false> // omits the 'plugins'
 *
 * If for some reason you don't need part of the shape, you can omit those parts (or
 * `Pick` just what you need).
 *
 * @example
 * type OnlyValidate = Omit<Validate<'required'>, 'translatedErrors'>;
 *
 * The typevars are:
 * - `V` - union of validator names (the keys of `ValidateOptions`)
 * - `WithPlugins` - boolean (default `true`) whether the `plugins` validate option
 *   should be included or not.
 */
export type Validation<V extends ValidatorNames, WithPlugins extends boolean = true> = {
  /**
   * The validation configuration of the component.
   */
  validate?: Prettify<Pick<ValidateOptions, WithPlugins extends true ? V | 'plugins' : V>>;
  /**
   * Custom, user-supplied validation error messages for each error message type
   * supported by the validators used in the validation configuration.
   *
   * Specified for each supported language - the backend reads this configuration and
   * writes it to `errors`.
   */
  translatedErrors?: {
    [K in SupportedLocales]?: {
      [K in ErrorMessageKeys<V>]?: string;
    };
  };
  /**
   * Resolved custom error messages, for the active locale. Set by the backend from
   * `translatedErrors` - should never be written to.
   */
  readonly errors?: {
    readonly [K in ErrorMessageKeys<V>]?: string;
  };
};
