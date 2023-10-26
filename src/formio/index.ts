import {
  CheckboxComponentSchema,
  ContentComponentSchema,
  CurrencyComponentSchema,
  DateComponentSchema,
  DateTimeComponentSchema,
  EmailComponentSchema,
  FileComponentSchema,
  IbanComponentSchema,
  LicensePlateComponentSchema,
  NumberComponentSchema,
  PhoneNumberComponentSchema,
  PostcodeComponentSchema,
  RadioComponentSchema,
  SelectboxesComponentSchema,
  TextFieldComponentSchema,
  TimeComponentSchema,
} from './components';

/**
 * A fallback, minimal schema to handle the cases where component.type is something unknown.
 *
 * This could be because someone pasted a JSON configuration from Form.io's hosted
 * form builder into our components or just wrote component definitions directly to our
 * API endpoints.
 *
 * @group Form.io components
 * @category Concrete types
 */
export interface FallbackSchema {
  type?: string;
}

export * from './base';
export * from './components';

/**
 * Convenience type alias for all supported concrete component schemas.
 *
 * @group Form.io components
 * @category Convenience
 */
export type AnyComponentSchema =
  // inputs
  | TextFieldComponentSchema
  | EmailComponentSchema
  | DateComponentSchema
  | DateTimeComponentSchema
  | TimeComponentSchema
  | PhoneNumberComponentSchema
  | PostcodeComponentSchema
  | FileComponentSchema
  | NumberComponentSchema
<<<<<<< HEAD
  | CurrencyComponentSchema
  // special types
  | IbanComponentSchema
  | LicensePlateComponentSchema
=======
  | CheckboxComponentSchema
  | SelectboxesComponentSchema
  | RadioComponentSchema
>>>>>>> dab8ef2 (✨ [#2] Apply feedback and add `radio` component)
  // layout
  | ContentComponentSchema;

/**
 * Convenience type alias for all supported concrete component schema types.
 *
 * @group Form.io components
 * @category Convenience
 */
export type AnyComponentSchemaType = AnyComponentSchema['type'];
