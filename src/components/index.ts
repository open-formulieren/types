/**
 * Entrypoint for all available Formio component type schema definitions.
 *
 * @module components
 */
import {EmailComponentSchema} from './email';
import {NumberComponentSchema} from './number';
import {PostcodeComponentSchema} from './postcode';
import {TextareaComponentSchema} from './textarea';
import {TextFieldComponentSchema} from './textfield';

export type AnyComponent =
  // basic
  | TextFieldComponentSchema
  | EmailComponentSchema
  | PostcodeComponentSchema
  | TextareaComponentSchema
  | NumberComponentSchema;

export {
  TextFieldComponentSchema,
  EmailComponentSchema,
  PostcodeComponentSchema,
  TextareaComponentSchema,
  NumberComponentSchema,
};
