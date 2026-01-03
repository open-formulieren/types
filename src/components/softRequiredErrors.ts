import {BaseComponent, Prettify} from '../base';
import {OFExtensions} from '../extensions';

/**
 * Component shape/options for a "soft required errors" component.
 *
 * This component tracks the values of other components that are marked as
 * "soft required" - i.e. you can continue without filling in a value, but it's highly
 * recommended *not to do that*. This component is responsible for displaying a warning
 * message.
 *
 * @remarks The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Layout components
 */
export type SoftRequiredErrorsComponentSchema = Prettify<
  BaseComponent<'softRequiredErrors'> &
    OFExtensions<'html'> & {
      /**
       * Rich text content, in HTML form. Expected to contain the `{{ missingFields }}`
       * placeholder/token.
       */
      html: string;
    }
>;
