import {DisplayConfig, LayoutComponentSchema, OFExtensions} from '..';

/**
 * The content component schema, intended for WYSIWYG content.
 *
 * The content component type is a mechanism to include additional text/content by
 * form designers to provide additional information. It is not possible to submit any
 * value(s) for it.
 *
 * @group Form.io components
 * @category Concrete types
 */
export interface ContentSchema
  extends Omit<
      LayoutComponentSchema<never>,
      | 'multiple'
      | 'defaultValue'
      | 'clearOnHide'
      | 'validate'
      | 'errors'
      | 'description'
      | 'hideLabel'
      | 'disabled'
      | 'widget'
      | 'validateOn'
      | 'placeholder'
    >,
    DisplayConfig,
    OFExtensions {
  id: string;
  key: string;
  type: 'content';
  /**
   * Even though the label is present, it is typically not displayed anywhere.
   */
  html: string;
  label?: string;
  hidden?: boolean;
  customClass?: '' | 'success' | 'info' | 'warning' | 'error';
}
