import {BaseComponent, Prettify} from '../base';
import {ClearOnHide} from '../common';
import {AnyComponentSchema} from './index';

/**
 * Configuration of a single column.
 *
 * @remarks
 * Vanilla/standard formio.js has a whole set of different properties, which are
 * tightly coupled to bootstrap classes for the column sizes. As Open Forms doesn't
 * use Bootstrap, we've opted for our own schema here instead.
 */
export interface Column {
  /**
   * Size on non-mobile viewports.
   *
   * The size specifies the number of columns spanned in a 12-column grid. Does not act
   * as a fallback for mobile viewports - if the `sizeMobile` property is not set, a
   * fallback to 100% width is used.
   */
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /**
   * Size on mobile viewports.
   *
   * The mobile size specifies the numbers of columns spanned in a 4-column grid.
   *
   * @privateRemarks Add backend migration to ensure this attribute is set everywhere.
   */
  sizeMobile?: 1 | 2 | 3 | 4;
  /**
   * Nested components inside a single column.
   */
  components: AnyComponentSchema[];
}

/**
 * Component shape/options for a columns component.
 *
 * @remarks The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Layout components
 */
export type ColumnsComponentSchema = Prettify<
  BaseComponent<'columns'> &
    ClearOnHide & {
      /**
       * The columns to display side-by-side, each with their configured size.
       */
      columns: Column[];
    }
>;
