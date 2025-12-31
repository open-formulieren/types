/**
 * Base functionality to define Formio component types.
 *
 * It provides the building blocks for built-in and custom component types, allowing
 * for nuances between layout and data components.
 *
 * @module base
 */

/**
 * Utility type for complex composed types to make them more readable.
 *
 * Taken from {@link https://www.totaltypescript.com/concepts/the-prettify-helper}
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

/**
 * The shared base for all component types.
 *
 * The type parameter `T` is used for the discriminator to figure out what kind of
 * component it is.
 */
export interface BaseComponent<T extends string> {
  /**
   * Discriminator to determine the component type. Uniquely determines the shape of the
   * component configuration options.
   */
  type: T;

  /**
   * Unique ID for a component in a form definition. Used to render HTML IDs.
   *
   * @deprecated The new renderer does not need this.
   */
  id: string;

  /**
   * Unique key for the component in a larger form definition.
   *
   * The value must comply with the `(\w|\w[\w.\-]*\w)` regex, meaning that periods/dots
   * are allowed unless they're start or end. The period character creates a nesting
   * level in the submission data.
   *
   * @example
   * 'myField'
   * @example
   * 'parent.child' // creates `{parent: {child: <value}}` data.
   */
  key: string;
}

export type WithMultiple<TSingle, TMultiple = TSingle[]> =
  | {
      /**
       * Flag that controls the multi-value mode of the field.
       *
       * If multiple values are enabled, typically an array of values will be submitted
       * for the field instead of a single item.
       */
      multiple?: false;
      /**
       * The default/initial value to populate the field with if no value is set yet.
       */
      defaultValue?: TSingle;
    }
  | {
      /**
       * Flag that controls the multi-value mode of the field.
       *
       * If multiple values are enabled, typically an array of values will be submitted
       * for the field instead of a single item.
       */
      multiple: true;
      /**
       * The default/initial value to populate the field with if no value is set yet.
       */
      defaultValue?: TMultiple;
    };
