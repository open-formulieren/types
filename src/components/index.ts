/**
 * Entrypoint for all available Formio component type schema definitions.
 *
 * @module components
 */
import {BsnComponentSchema} from './bsn';
import {CheckboxComponentSchema} from './checkbox';
import {ContentComponentSchema} from './content';
import {CurrencyComponentSchema} from './currency';
import {EmailComponentSchema} from './email';
import {IbanComponentSchema} from './iban';
import {LicensePlateComponentSchema} from './licensePlate';
import {NumberComponentSchema} from './number';
import {PhoneNumberComponentSchema} from './phoneNumber';
import {PostcodeComponentSchema} from './postcode';
import {TextareaComponentSchema} from './textarea';
import {TextFieldComponentSchema} from './textfield';

export type AnyComponent =
  // basic
  | TextFieldComponentSchema
  | EmailComponentSchema
  | PhoneNumberComponentSchema
  | PostcodeComponentSchema
  | TextareaComponentSchema
  | NumberComponentSchema
  | CheckboxComponentSchema
  | CurrencyComponentSchema
  // special
  | IbanComponentSchema
  | LicensePlateComponentSchema
  | BsnComponentSchema
  // layout
  | ContentComponentSchema;

export {
  // basic
  TextFieldComponentSchema,
  EmailComponentSchema,
  PhoneNumberComponentSchema,
  PostcodeComponentSchema,
  TextareaComponentSchema,
  NumberComponentSchema,
  CheckboxComponentSchema,
  CurrencyComponentSchema,
  // special
  IbanComponentSchema,
  LicensePlateComponentSchema,
  BsnComponentSchema,
  // layout
  ContentComponentSchema,
};
