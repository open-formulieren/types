import {InputComponentSchema} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip' | 'footer';

/**
 * The value is base64 encoded binary (image) data, or unset and then it's a string.
 *
 * When a non-empty value is set, enforce that it is serialized as a data URI.
 */
export type SignatureValue = `data:image/png;base64,${string}`;

export type SignatureInputSchema = InputComponentSchema<
  SignatureValue | '',
  Validator,
  TranslatableKeys
>;

/**
 * The built-in Formio.js signature component type.
 *
 * Source code this is based on:
 * https://github.com/formio/formio.js/blob/4.13.x/src/components/signature/Signature.js
 *
 * Note that we don't offer support for many properties through our form builder, like:
 *
 *   - width
 *   - height
 *   - penColor
 *   - backgroundColor
 *   - minWidth
 *   - maxWidth
 *
 * Because of that, they are also not added to the type definitions (yet). That may
 * change once we implement our own renderer.
 *
 * @group Form.io components
 * @category Concrete types
 */
export interface SignatureComponentSchema
  extends Omit<
    SignatureInputSchema,
    'hideLabel' | 'disabled' | 'placeholder' | 'validateOn' | 'multiple'
  > {
  type: 'signature';
  /**
   * The footer is a text displayed below the drawing canvas which may hint the user on
   * what is expected of them.
   *
   * I'm not sure what the difference is with the 'description' field.
   */
  footer?: string; // translatable instruction

  /**
   * The value type of the component. We don't support `multiple: true` in this component.
   *
   * Note that we use the `defaultValue` property to infer the value type, we do not
   * support actually setting a component default value.
   */
  defaultValue?: SignatureValue | '';
}
