/**
 * Entrypoint for all available Formio component type schema definitions.
 *
 * @module components
 */
import {Email} from './email';
import {Number} from './number';
import {TextField} from './textfield';

export type AnyComponent = TextField | Email | Number;
export {TextField, Email, Number};
