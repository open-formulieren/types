import {OFValidateOptions} from 'formio/validation';

import {AnyComponentSchema, InputComponentSchema} from '..';

type Validator = 'required' | 'maxLength';
type TranslatableKeys =
  | 'label'
  | 'description'
  | 'tooltip'
  | 'groupLabel'
  | 'addAnother'
  | 'saveRow'
  | 'removeRow';

/**
 * We don't currently support these properties - they get added in by base types, so we
 * need to strip them out again.
 */
type KeysToOmit =
  | 'registration'
  | 'placeholder'
  | 'multiple'
  // added by HasValidation, but currently not exposed in the form builder
  | 'errors'
  // added by HasValidation, but currently not exposed in the form builder
  | 'translatedErrors'
  | 'disabled'
  | 'validateOn'
  | 'showInSummary'
  | 'showInEmail'
  | 'showInPDF';

export type EditGridInputSchema = Omit<
  InputComponentSchema<unknown, Validator, TranslatableKeys>,
  'validate'
> & {
  /**
   * Input mode is implicitly multiple: true, so the (default) value must always have an array
   * shape.
   *
   * We don't know what the shape inside of components is at compile time, hence the `unknown`.
   */
  defaultValue?: unknown[];
  // do not include the plugins validator, this behaviour is undefined
  validate?: OFValidateOptions<Validator>;
};

/**
 * The editgrid component schema.
 *
 * Edit grids ("repeating groups") are used as a blueprint for array values with complex
 * nested structures (as opposed to textfield with multiple true) inside.
 *
 * The nested components describe a single group of fields that are repeated for every
 * item. Because of that, the `defaultValue` type cannot be statically defined, as it
 * is derived from the dynamic configuration.
 *
 * Edit grids are essentially always 'multiple: true', so this property does not apply
 * to this component type either.
 *
 * @todo
 *
 * There are probably a bunch of properties used in the SDK that are not exposed in the
 * form builder -> add them when we know what they are!
 *
 * @group Form.io components
 * @category Concrete types
 */
export interface EditGridComponentSchema extends Omit<EditGridInputSchema, KeysToOmit> {
  type: 'editgrid';
  /**
   * Nested components inside the group.
   */
  components: AnyComponentSchema[];

  /**
   * Control whether any rows can be added or removed.
   */
  disableAddingRemovingRows: boolean;
  /**
   * Button label to add another item.
   */
  addAnother?: string;
  /**
   * Button label to save/confirm a single item.
   */
  saveRow?: string;
  /**
   * Button label to remove a single item.
   */
  removeRow?: string;

  // custom properties

  /**
   * Label for an individual item, interpolated with the index of each item.
   */
  groupLabel: string;
}
