import {AnyComponentSchema, LayoutComponentSchema} from '..';

/**
 * Configuration of a single column.
 *
 * Note that this deviates from Formio.js' own schema, as they are tightly coupled with
 * Bootstrap properties/class names, which we deliberately avoid.
 */
export interface Column {
  /**
   * Size on non-mobile viewports.
   *
   * The size specifies the number of columns spanned in a 12-column grid. If no mobile
   * size is specified, a 100% width is assumed.
   */
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /**
   * Size on mobile viewports.
   *
   * The mobile size specifies the numbers of columns spanned in a 4-column grid.
   *
   * @todo Add backend migration to ensure this attribute is set everywhere.
   */
  sizeMobile: 1 | 2 | 3 | 4;
  /**
   * Nested components inside a single column.
   */
  components: AnyComponentSchema[];
}

/**
 * The columns component schema.
 *
 * Columns are used to manage layout on desktop and mobile viewports by grouping nested
 * components inside into columns.
 *
 * @group Form.io components
 * @category Concrete types
 */
export interface ColumnsComponentSchema
  extends Omit<
    LayoutComponentSchema<never>,
    | 'label'
    | 'placeholder'
    | 'multiple'
    | 'defaultValue'
    | 'conditional'
    | 'errors'
    | 'description'
    | 'tooltip'
    | 'hideLabel'
    | 'disabled'
    | 'validateOn'
  > {
  id: string;
  key: string;
  type: 'columns';
  columns: Column[];
}
