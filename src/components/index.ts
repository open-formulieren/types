/**
 * Entrypoint for all available Formio component type schema definitions.
 *
 * @module components
 */
import {AddressNLComponentSchema} from './addressNL';
import {BsnComponentSchema} from './bsn';
import {CheckboxComponentSchema} from './checkbox';
import {ContentComponentSchema} from './content';
import {CosignV1ComponentSchema, CosignV2ComponentSchema} from './cosign';
import {CurrencyComponentSchema} from './currency';
import {EmailComponentSchema} from './email';
import {FileComponentSchema} from './file';
import {IbanComponentSchema} from './iban';
import {LicensePlateComponentSchema} from './licensePlate';
import {NpFamilyMembersComponentSchema} from './npFamilyMembers';
import {NumberComponentSchema} from './number';
import {PhoneNumberComponentSchema} from './phoneNumber';
import {PostcodeComponentSchema} from './postcode';
import {SignatureComponentSchema} from './signature';
import {SoftRequiredErrorsComponentSchema} from './softRequiredErrors';
import {TextareaComponentSchema} from './textarea';
import {TextFieldComponentSchema} from './textfield';

export type AnyComponent =
  // basic
  | TextFieldComponentSchema
  | EmailComponentSchema
  | PhoneNumberComponentSchema
  | PostcodeComponentSchema
  | FileComponentSchema
  | TextareaComponentSchema
  | NumberComponentSchema
  | CheckboxComponentSchema
  | CurrencyComponentSchema
  // special
  | IbanComponentSchema
  | LicensePlateComponentSchema
  | BsnComponentSchema
  | NpFamilyMembersComponentSchema
  | SignatureComponentSchema
  | CosignV2ComponentSchema
  | AddressNLComponentSchema
  // layout
  | ContentComponentSchema
  | SoftRequiredErrorsComponentSchema
  // deprecated
  | CosignV1ComponentSchema;

export {
  // basic
  TextFieldComponentSchema,
  EmailComponentSchema,
  PhoneNumberComponentSchema,
  PostcodeComponentSchema,
  FileComponentSchema,
  TextareaComponentSchema,
  NumberComponentSchema,
  CheckboxComponentSchema,
  CurrencyComponentSchema,
  // special
  IbanComponentSchema,
  LicensePlateComponentSchema,
  BsnComponentSchema,
  NpFamilyMembersComponentSchema,
  SignatureComponentSchema,
  CosignV2ComponentSchema,
  AddressNLComponentSchema,
  // layout
  ContentComponentSchema,
  SoftRequiredErrorsComponentSchema,
  // deprecated
  CosignV1ComponentSchema,
};
