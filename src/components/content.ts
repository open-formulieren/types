import {BaseComponent, Prettify} from '../base';
import {Hidden} from '../common';
import {Conditional, DisplayConfig, OFExtensions} from '../extensions';

/**
 * Component shape/options for a content (rich text) component.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Layout components
 */
export type ContentComponentSchema = Prettify<
  BaseComponent<'content'> &
    Hidden &
    DisplayConfig &
    Conditional &
    OFExtensions<'html'> & {
      /**
       * Rich text content, in HTML form. It may be post-processed by the backend for
       * compatibility with CSP headers.
       */
      html: string;
      /**
       * A custom CSS class/modifier to apply to convey the type of information.
       */
      customClass?: '' | 'success' | 'info' | 'warning' | 'error';
    }
>;
