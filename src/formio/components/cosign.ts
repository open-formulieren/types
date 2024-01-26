import {OFExtensions, StrictComponentSchema} from '..';
import {EmailInputSchema} from './email';

type TranslatableKeys = 'label' | 'description';

/**
 * We don't currently support these properties - they get added in by base types, so we
 * need to strip them out again.
 */
type KeysToOmit =
  | 'hideLabel'
  | 'placeholder'
  | 'multiple'
  | 'clearOnHide'
  | 'conditional'
  | 'errors'
  | 'disabled'
  | 'validateOn'
  | 'tooltip';

export type CosignV1InputSchema = StrictComponentSchema<never> &
  Pick<OFExtensions<TranslatableKeys>, 'openForms'>;

/**
 * The legacy Cosign component type, otherwise known as 'CosignOld'.
 *
 * The component does not actually provide any input data, it mostly functions as a
 * marker in the form that cosigning is expected, hence the `never` value type. In the
 * UI, it displays a button to start an (additional) login session to authenticate the
 * cosigner and requires them to be physically in the same space.
 *
 * @group Form.io components
 * @category Concrete types
 *
 * @deprecated
 *
 * The in-band cosign flow is problematic with existing DigiD/eHerkenning sessions. It
 * is currently not scheduled for removal, but we recommend using the V2 variant for
 * better UX.
 */
export interface CosignV1ComponentSchema extends Omit<CosignV1InputSchema, KeysToOmit> {
  type: 'coSign';
  authPlugin: string; // plugin identifiers in the backend are dynamic
}

type V2KeysToOmit = 'hideLabel' | 'disabled' | 'placeholder';

/**
 * The cosign component type, otherwise known as 'Cosign'.
 *
 * This is a custom component sharing most of the functionality with the email input
 * component type - it collects the e-mail address of any/a cosigner so that they
 * receive a notification they're expected to cosign. The actual cosigning happens
 * out-of-band. This component *does* take form data input, as opposed to the V1
 * component implementation.
 *
 * @group Form.io components
 * @category Concrete types
 */
export interface CosignV2ComponentSchema extends Omit<EmailInputSchema, V2KeysToOmit> {
  type: 'cosign';
  validateOn: 'blur';
  defaultValue?: string; // no multiple support, so must always be a single string
  autocomplete?: string;
}
