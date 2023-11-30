import {AnyComponentSchema, LayoutComponentSchema, OFExtensions} from '..';

type TranslatableKeys = 'label';

/**
 * The fieldset component schema.
 *
 * Fieldsets are used to manage group fields together. They can improve accessibility
 * by grouping related fields together.
 *
 * The `key` property has no effect on the submission data structure (it does not create
 * a nesting level, the component is purely presentational).
 *
 * The label is displayed as the legend element, while the upstream component uses an
 * explicit legend property for this purpose.
 *
 * @group Form.io components
 * @category Concrete types
 */
export interface FieldsetComponentSchema
  extends Omit<
    LayoutComponentSchema<never>,
    | 'placeholder'
    | 'multiple'
    | 'defaultValue'
    | 'errors'
    | 'description'
    | 'hideLabel'
    | 'disabled'
    | 'validateOn'
  > {
  id: string;
  key: string;
  type: 'fieldset';
  label: string;
  /**
   * Nested components inside the group/fieldset.
   */
  components: AnyComponentSchema[];

  // custom properties
  /**
   * Control whether the fieldset header/legend is displayed or not.
   *
   * @deprecated This should probably use the built-in `hideLabel` property instead,
   * which requires a backend data migration and update to the SDK code.
   */
  hideHeader: boolean;
  openForms?: OFExtensions<TranslatableKeys>['openForms'];
}
