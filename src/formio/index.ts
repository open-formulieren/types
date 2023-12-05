import {
  AddressNLComponentSchema,
  BsnComponentSchema,
  CheckboxComponentSchema,
  ColumnsComponentSchema,
  ContentComponentSchema,
  CurrencyComponentSchema,
  DateComponentSchema,
  DateTimeComponentSchema,
  EditGridComponentSchema,
  EmailComponentSchema,
  FieldsetComponentSchema,
  FileComponentSchema,
  IbanComponentSchema,
  LicensePlateComponentSchema,
  MapComponentSchema,
  NpFamilyMembersComponentSchema,
  NumberComponentSchema,
  PhoneNumberComponentSchema,
  PostcodeComponentSchema,
  RadioComponentSchema,
  SelectComponentSchema,
  SelectboxesComponentSchema,
  SignatureComponentSchema,
  TextFieldComponentSchema,
  TextareaComponentSchema,
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
  | TextareaComponentSchema
  | NumberComponentSchema
  | SelectComponentSchema
  | CheckboxComponentSchema
  | SelectboxesComponentSchema
  | CurrencyComponentSchema
  | RadioComponentSchema
  // special types
  | IbanComponentSchema
  | LicensePlateComponentSchema
  | BsnComponentSchema
  | AddressNLComponentSchema
  | NpFamilyMembersComponentSchema
  | SignatureComponentSchema
  | MapComponentSchema
  | EditGridComponentSchema
  // layout
  | ContentComponentSchema
  | ColumnsComponentSchema
  | FieldsetComponentSchema;

/**
 * Convenience type alias for all supported concrete component schema types.
 *
 * @group Form.io components
 * @category Convenience
 */
export type AnyComponentSchemaType = AnyComponentSchema['type'];
