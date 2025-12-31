/**
 * Entrypoint for all available Formio component type schema definitions.
 *
 * @module components
 */
import {EmailComponentSchema} from './email';
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
  | NumberComponentSchema;

export {
  TextFieldComponentSchema,
  EmailComponentSchema,
  PhoneNumberComponentSchema,
  PostcodeComponentSchema,
  TextareaComponentSchema,
  NumberComponentSchema,
};
