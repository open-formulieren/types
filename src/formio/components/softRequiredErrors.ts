import {LayoutComponentSchema, OFExtensions} from '..';

type TranslatableKeys = 'html';

/**
 * The softRequiredErrors component schema. It's a variation on the WYSIWYG content
 * component.
 *
 * Any validation errors related to soft-required fields (the fields are required but
 * don't block progressing in the form and are therefore mostly informational/warnings)
 * are displayed here. The form designer can control the body text, and the SDK will
 * then interpolate the actual field labels that violate the requirement(s). If there
 * are no errors, the component is not to be displayed.
 *
 * @group Form.io components
 * @category Concrete types
 */
export interface SoftRequiredErrorsComponentSchema
  extends Omit<
      LayoutComponentSchema<never>,
      | 'conditional'
      | 'tooltip'
      | 'multiple'
      | 'defaultValue'
      | 'clearOnHide'
      | 'validate'
      | 'errors'
      | 'description'
      | 'hidden'
      | 'hideLabel'
      | 'disabled'
      | 'widget'
      | 'validateOn'
      | 'placeholder'
    >,
    Omit<OFExtensions<TranslatableKeys>, 'registration' | 'isSensitiveData'> {
  id: string;
  key: string;
  type: 'softRequiredErrors';
  /**
   * Even though the label is present, it is typically not displayed anywhere.
   */
  html: string;
  label?: string;
}
