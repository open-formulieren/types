/**
 * Property definitions that are commonly used in various component types.
 *
 * Defined as standalone types so they can easily be merged/composed to define a
 * particular component type.
 *
 * @module common
 */

export type Label = {
  /**
   * The form field label text.
   */
  label: string;
};

export type Description = {
  /**
   * Additional information for the form field, displayed unconditionally.
   */
  description?: string;
};

export type Tooltip = {
  /**
   * Extra information or background for the form field. Displayed after interacting
   * with the tooltip icon/control near the label.
   */
  tooltip?: string;
};

export type Hidden = {
  /**
   * Hide or show the form field. This only controls the visibility - whether
   * submission data is retained or not is controlled through `clearOnHide`.
   */
  hidden?: boolean;
};

export type ClearOnHide = {
  /**
   * Clear the value (remove the key from the submission data) when the field is
   * hidden. This is applied if the component itself or any parent is hidden,
   * irrespective the mechanism that made it hidden.
   *
   * Related: `hidden`, `conditional`.
   */
  clearOnHide?: boolean;
};

export type IsSensitiveData = {
  /**
   * Marker for a form field that requests potentially (privacy) sensitive information.
   *
   * Pruning of submission data will clear the data of components marked as sensitive
   * data.
   *
   * This is specific to Open Forms.
   */
  isSensitiveData?: boolean;
};

export type AutoComplete = {
  /**
   * How to autocomplete the input field by the browser. Matches the native HTML
   * attribute.
   */
  autocomplete?: string;
};

export type ReadOnly = {
  /**
   * Should be named `readOnly` instead - displays the field, includes the data in
   * the submission but editing is not allowed.
   */
  disabled?: boolean;
};

export type Placeholder = {
  /**
   * Placeholder text displayed in the input field. Matches the native HTML attribute.
   */
  placeholder?: string;
};

export type ShowCharCount = {
  /**
   * If enabled, the number of characters entered into the input is displayed. If
   * there's also a `maxLength` configured in the component validation, the available
   * number of characters is displayed instead.
   *
   * @see validate
   */
  showCharCount?: boolean;
};

export type DefaultValue<T> = {
  /**
   * The default/initial value to populate the field with if no value is set yet.
   *
   * The typevar `T` determines the (intrinsic) value type of the component. If the
   * component supports the `multiple` property, use the `WithMultiple` type instead.
   */
  defaultValue?: T;
};
