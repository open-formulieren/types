import {OFExtensions, StrictComponentSchema} from '..';

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
 */
export interface CosignV1ComponentSchema extends Omit<CosignV1InputSchema, KeysToOmit> {
  type: 'coSign';
  authPlugin: string; // plugin identifiers in the backend are dynamic
}
