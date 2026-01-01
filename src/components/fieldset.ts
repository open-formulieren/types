import {BaseComponent, Prettify} from '../base';
import {ClearOnHide, Hidden, Label, Tooltip} from '../common';
import {Conditional, OFExtensions} from '../extensions';
import {AnyComponent} from './index';

/**
 * Component shape/options for a fieldset component.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Layout components
 */
export type FieldsetComponentSchema = Prettify<
  BaseComponent<'fieldset'> &
    Label &
    Tooltip &
    Hidden &
    ClearOnHide &
    Conditional &
    OFExtensions<'label'> & {
      /**
       * Control whether the fieldset header/legend is displayed or not.
       *
       * @deprecated This should probably use the built-in `hideLabel` property instead,
       * which requires a backend data migration and update to the SDK code.
       */
      hideHeader: boolean;
      /**
       * Nested components/fields inside the fieldset.
       */
      components: AnyComponent[];
    }
>;
