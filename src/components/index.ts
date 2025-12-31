/**
 * Entrypoint for all available Formio component type schema definitions.
 *
 * @module components
 */
import {Email} from './email';
import {TextField} from './textfield';

export type AnyComponent = TextField | Email;
export {TextField, Email};
