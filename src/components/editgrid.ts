import {BaseComponent, Prettify} from '../base';
import {
  ClearOnHide,
  DefaultValue,
  Description,
  Hidden,
  IsSensitiveData,
  Label,
  Tooltip,
} from '../common';
import {OFExtensions} from '../extensions';
import {Validation} from '../validation';
import {AnyComponentSchema} from './index';

interface EditGridExtras {
  /**
   * Form definition for each item in the repeating group.
   */
  components: AnyComponentSchema[];
  /**
   * If enabled, the label of the group will not be displayed.
   */
  hideLabel?: boolean;
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
   * Button label to remove a single item or cancel editing it.
   */
  removeRow?: string;
  /**
   * Label for an individual item, interpolated with the index of each item.
   *
   * Specific to Open Forms.
   */
  groupLabel: string;
}

/**
 * Component shape/options for the edit grid component.
 *
 * Edit grids are used for "repeating groups". The `components` configuration inside
 * the editgrid component describes a blueprint for each item - effectively creating a
 * list of nested forms with all their usual features.
 *
 * The intrinsic data type is an array of objects, where the shape of each object is
 * described by the `component.components` property.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Special components
 */
export type EditGridComponentSchema = Prettify<
  BaseComponent<'editgrid'> &
    Label &
    Description &
    Tooltip &
    Hidden &
    // TODO: see if we can drop the `null`
    DefaultValue<unknown[] | null> &
    ClearOnHide &
    IsSensitiveData &
    EditGridExtras &
    Pick<Validation<'required' | 'maxLength', false>, 'validate'> &
    OFExtensions<
      'label' | 'description' | 'tooltip' | 'groupLabel' | 'addAnother' | 'saveRow' | 'removeRow'
    >
>;
