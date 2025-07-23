import {
  AddressNLComponentSchema,
  BsnComponentSchema,
  CheckboxComponentSchema,
  ChildrenComponentSchema,
  ColumnsComponentSchema,
  ContentComponentSchema,
  CosignV1ComponentSchema,
  CosignV2ComponentSchema,
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
  PartnersComponentSchema,
  PhoneNumberComponentSchema,
  PostcodeComponentSchema,
  ProductPriceComponentSchema,
  RadioComponentSchema,
  SelectComponentSchema,
  SelectboxesComponentSchema,
  SignatureComponentSchema,
  SoftRequiredErrorsComponentSchema,
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
  | ProductPriceComponentSchema
  | SignatureComponentSchema
  | CosignV2ComponentSchema
  | MapComponentSchema
  | EditGridComponentSchema
  | PartnersComponentSchema
  | ChildrenComponentSchema
  // layout
  | ContentComponentSchema
  | ColumnsComponentSchema
  | FieldsetComponentSchema
  | SoftRequiredErrorsComponentSchema
  // deprecated
  | PostcodeComponentSchema
  | CosignV1ComponentSchema;

/**
 * Convenience type alias for all supported concrete component schema types.
 *
 * @group Form.io components
 * @category Convenience
 */
export type AnyComponentSchemaType = AnyComponentSchema['type'];
