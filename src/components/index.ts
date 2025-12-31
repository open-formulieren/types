/**
 * Entrypoint for all available Formio component type schema definitions.
 *
 * @module components
 */
import {EmailComponentSchema} from './email';
import {NumberComponentSchema} from './number';
import {TextFieldComponentSchema} from './textfield';

export type AnyComponent = TextFieldComponentSchema | EmailComponentSchema | NumberComponentSchema;
export {TextFieldComponentSchema, EmailComponentSchema, NumberComponentSchema};
