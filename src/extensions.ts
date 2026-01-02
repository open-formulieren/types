/**
 * Open Forms-specific extensions to Formio component types.
 *
 * Historically, Open Forms has been adding extra configuration options haphazardly,
 * rather than properly namespacing those. The types in this module bundle logical units
 * together.
 *
 * @module extensions
 */
import {Prettify} from 'base';

import {SupportedLocales} from './i18n';

/**
 * Properties controlling in which kind of summaries the backend will include the
 * component for display.
 *
 * @group Open Forms schema extensions
 * @todo Move into `openForms` top-level key
 */
export interface DisplayConfig {
  /**
   * Include the component and its value in the submission data summary on the
   * confirmation page or not.
   */
  showInSummary?: boolean;
  /**
   * Include the component and its value in the confirmation email data.
   */
  showInEmail?: boolean;
  /**
   * Include the component and its value in the submission report PDF available for
   * download by the end-user and often included in registration plugins.
   */
  showInPDF?: boolean;
}

/**
 * Describe that the component is conditionally visible: `show` (or hide) this component
 * when the component with key `when` is equal to `eq`.
 *
 * The behaviour is not always obvious:
 * - `show: true` -> show the component when the condition is met, otherwise hide it
 * - `show: false` -> hide the component when the condition is met, otherwise show it
 * - the reference `when` may be an item inside an editgrid, in which case the key must
 *   be `editgridKey.componentKey` and the conditional is evaluated with the edit grid
 *   item data as scope (merged with the root scope)
 * - `eq` tests for equality, except when the reference component is an array of values
 *   (e.g. when the component has `multiple: true`), then the test is a membership check
 *   of the expected value.
 *
 * This type definition is different from Formio's `ConditionalOptions`:
 *
 * - we don't support `json`
 * - `eq` can be any JSON-serializable type, not just string. Note that our builder
 *   uses appropriate JS types for the component type referenced via `when`.
 */
export interface Conditional {
  conditional?: {
    /**
     * Whether the field should be shown (`true`) or hidden (`false`) when the condition
     * is met.
     */
    show?: boolean;
    /**
     * The reference component `key`. Its value will be retrieved and tested against `eq`.
     */
    when?: string;
    /**
     * The value that should be checked against the reference component value.
     *
     * For array values (of the reference component), the array is checked if it contains
     * the specified value.
     *
     * @note Only (a subset of) primitives are supported.
     */
    eq?: string | number | boolean;
  };
}

/**
 * @group Open Forms schema extensions
 */
export interface Registration {
  /**
   * Configuration on how to process the value of the component in the registration
   * plugin(s).
   *
   * @deprecated Component-level registration configuration does not work reliably when
   * multiple registration plugins are enabled on the form. This will be moved in the
   * new admin UI.
   */
  registration?: {
    attribute: string;
  };
}

/**
 * @group Open Forms schema extensions
 */
export interface Prefill {
  /**
   * Configuration on how to prefill the value of the component for the (authenticated)
   * user.
   *
   * @deprecated Component-level prefill configuration is not flexible enough, this will
   * be moved in the new admin UI.
   */
  prefill?: {
    /**
     * The plugin to use for prefill. If there's no prefill, the value must be an empty
     * string.
     */
    plugin: string;
    /**
     * Attribute within the plugin to read to extract the prefill value. If there's no
     * prefill, the value must be an empty string.
     */
    attribute: string;
    /**
     * In the event of a mandate, should the prefill be looked up from the beneficiary
     * or the authorizee?
     */
    identifierRole: 'main' | 'authorised_person';
  };
}

/**
 * Open Forms extensions, scoped under the top-level `openForms` key.`
 *
 * The `TP` type var expects a union of property names that can be translated, i.e. for
 * designers can supply translations for these properties and the backend will pick the
 * correct one.
 *
 * The `Extra` type var allows injection of additional component-specific extensions
 * under the `openForms` key.
 */
export interface OFExtensions<
  TP extends string = never,
  Extra extends object = Record<never, never>
> {
  openForms?: Prettify<
    {
      translations?: {
        [K in SupportedLocales]?: {
          [K in TP]?: string;
        };
      };
    } & Extra
  >;
}

/**
 * @groupDescription Date/datetime validations
 *
 * Date and datetime components can be configured with certain minimum/maximum date
 * validation modes, which are evaluated dynamically in the backend to resolve to
 * specific `min` or `max` values for the validation.
 *
 * The configurations are stored in the top-level `openForms` property of the component
 * definitions.
 *
 * @showGroups
 */

/**
 * Definition of a delta for a date constraint, in number of years, months and/or days.
 *
 * @remarks The numbers are expected to be integers.
 *
 * @group Date/datetime validations
 */
export interface DateConstraintDelta {
  /**
   * Number of years relative to the anchor date(time). Leaving this empty is equivalent
   * to 0. Summed together with the other properties to calculate an offset.
   */
  years: number | null;
  /**
   * Number of months relative to the anchor date(time). Leaving this empty is equivalent
   * to 0. Summed together with the other properties to calculate an offset.
   */
  months: number | null;
  /**
   * Number of days relative to the anchor date(time). Leaving this empty is equivalent
   * to 0. Summed together with the other properties to calculate an offset.
   */
  days: number | null;
}

/**
 * @group Date/datetime validations
 */
export interface NoDateConstraint {
  mode: '';
}

/**
 * Fixed date/datetime anchor point. The value is stored in the `component.datePicker`
 * configuration.
 *
 * @group Date/datetime validations
 */
export interface FixedValueDateConstraint {
  mode: 'fixedValue';
}

interface IncludeToday {
  /**
   * If true, then the current day/date is considered an allowed value too.
   */
  includeToday: boolean | null;
}

/**
 * Allow dates later than "now/today". For dates, `includeToday` controls if the current
 * day is valid too.
 *
 * @group Date/datetime validations
 */
export type FutureDateConstraint<WithIncludeToday extends boolean = false> = Prettify<
  {
    mode: 'future';
  } & (WithIncludeToday extends true ? IncludeToday : Record<never, never>)
>;

/**
 * Allow dates before "now/today". For dates, `includeToday` controls if the current
 * day is valid too.
 *
 * @group Date/datetime validations
 */
export type PastDateConstraint<WithIncludeToday extends boolean = false> = Prettify<
  {
    mode: 'past';
  } & (WithIncludeToday extends true ? IncludeToday : Record<never, never>)
>;

/**
 * Allow values that fall within the range determined by applying a delta to the
 * reference value/variable.
 *
 * @group Date/datetime validations
 */
export interface RelativeDateConstraint {
  mode: 'relativeToVariable';
  /**
   * Which (other) variable to add or subtract the delta to/from, resulting in a
   * calculated date/datetime to use as boundary.
   */
  variable?: string;
  /**
   * The amount of days to add to/subtract from the reference variable.
   */
  delta: DateConstraintDelta;
  /**
   * Whether to calculate a date after or before the reference variable.
   */
  operator?: 'add' | 'subtract';
}
