import {BaseComponent, Prettify, WithMultiple} from '../base';
import {
  ClearOnHide,
  Description,
  Hidden,
  IsSensitiveData,
  Label,
  ReadOnly,
  Tooltip,
} from '../common';
import {Conditional, DisplayConfig, OFExtensions, Prefill, Registration} from '../extensions';
import {Validation} from '../validation';

/**
 * Component shape/options for a postcode component.
 *
 * @remarks The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Basic components
 */
export type PostcodeComponentSchema = Prettify<
  BaseComponent<'postcode'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    ReadOnly &
    Conditional &
    (Validation<'required' | 'pattern'> & {
      validate: {
        /**
         * The postcode pattern is fixed, defining a structure like `1234 AB`. Certain
         * letter combinations are prohibited.
         *
         * A Dutch postcode has 4 numbers and 2 letters (case insensitive). Letter
         * combinations SS, SD and SA are not used due to the Nazi-association.
         * See {@link https://stackoverflow.com/a/17898538/7146757 and https://nl.wikipedia.org/wiki/Postcodes_in_Nederland}
         *
         * @deprecated
         * This hardcoded regex will be removed in the future - the renderer itself will
         * implement the correct regex and apply it unless an override is specified.
         *
         * Possibly in the builder we will then allow form builders to provide their
         * own range/pattern.
         */
        pattern: '^[1-9][0-9]{3} ?(?!sa|sd|ss|SA|SD|SS)[a-zA-Z]{2}$';
      };
    }) &
    Registration &
    Prefill &
    OFExtensions<'label' | 'description' | 'tooltip'> &
    // Unfortunately, this results in a top-level union and there's nothing we can do
    // about it due to TS limitations :(
    WithMultiple<string>
>;
