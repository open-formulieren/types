/**
 * Entrypoint for all available Formio component type schema definitions.
 *
 * @module components
 */
import {AddressNLComponentSchema} from './addressNL';
import {BsnComponentSchema} from './bsn';
import {CheckboxComponentSchema} from './checkbox';
import {ChildrenComponentSchema} from './children';
import {ColumnsComponentSchema} from './columns';
import {ContentComponentSchema} from './content';
import {CosignV1ComponentSchema, CosignV2ComponentSchema} from './cosign';
import {CurrencyComponentSchema} from './currency';
import {CustomerProfileComponentSchema} from './customerProfile';
import {DateComponentSchema} from './date';
import {DateTimeComponentSchema} from './datetime';
import {EditGridComponentSchema} from './editgrid';
import {EmailComponentSchema} from './email';
import {FieldsetComponentSchema} from './fieldset';
import {FileComponentSchema} from './file';
import {IbanComponentSchema} from './iban';
import {LicensePlateComponentSchema} from './licensePlate';
import {MapComponentSchema} from './map';
import {NpFamilyMembersComponentSchema} from './npFamilyMembers';
import {NumberComponentSchema} from './number';
import {PartnersComponentSchema} from './partners';
import {PhoneNumberComponentSchema} from './phoneNumber';
import {PostcodeComponentSchema} from './postcode';
import {RadioComponentSchema} from './radio';
import {SelectComponentSchema} from './select';
import {SelectboxesComponentSchema} from './selectboxes';
import {SignatureComponentSchema} from './signature';
import {SoftRequiredErrorsComponentSchema} from './softRequiredErrors';
import {TextareaComponentSchema} from './textarea';
import {TextFieldComponentSchema} from './textfield';
import {TimeComponentSchema} from './time';

/**
 * Convenience type alias for all supported component schemas.
 *
 * @remarks
 * While the components may look like individual union members here, keep in mind that
 * each component itself may be a union - this is common for components that support the
 * `multiple` property.
 */
export type AnyComponentSchema =
  // basic
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
  | CheckboxComponentSchema
  | SelectboxesComponentSchema
  | SelectComponentSchema
  | CurrencyComponentSchema
  | RadioComponentSchema
  // special
  | IbanComponentSchema
  | LicensePlateComponentSchema
  | BsnComponentSchema
  | NpFamilyMembersComponentSchema
  | SignatureComponentSchema
  | CosignV2ComponentSchema
  | MapComponentSchema
  | EditGridComponentSchema
  | AddressNLComponentSchema
  | PartnersComponentSchema
  | ChildrenComponentSchema
  | CustomerProfileComponentSchema
  // layout
  | ContentComponentSchema
  | ColumnsComponentSchema
  | FieldsetComponentSchema
  | SoftRequiredErrorsComponentSchema
  // deprecated
  | CosignV1ComponentSchema;

export {
  // basic
  TextFieldComponentSchema,
  EmailComponentSchema,
  DateComponentSchema,
  DateTimeComponentSchema,
  TimeComponentSchema,
  PhoneNumberComponentSchema,
  PostcodeComponentSchema,
  FileComponentSchema,
  TextareaComponentSchema,
  NumberComponentSchema,
  CheckboxComponentSchema,
  SelectboxesComponentSchema,
  SelectComponentSchema,
  CurrencyComponentSchema,
  RadioComponentSchema,
  // special
  IbanComponentSchema,
  LicensePlateComponentSchema,
  BsnComponentSchema,
  NpFamilyMembersComponentSchema,
  SignatureComponentSchema,
  CosignV2ComponentSchema,
  MapComponentSchema,
  EditGridComponentSchema,
  AddressNLComponentSchema,
  PartnersComponentSchema,
  ChildrenComponentSchema,
  CustomerProfileComponentSchema,
  // layout
  ContentComponentSchema,
  ColumnsComponentSchema,
  FieldsetComponentSchema,
  SoftRequiredErrorsComponentSchema,
  // deprecated
  CosignV1ComponentSchema,
};
