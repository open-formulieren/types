import {BaseComponent, Prettify, WithMultiple} from '../base';
import {ClearOnHide, Description, Hidden, IsSensitiveData, Label, Tooltip} from '../common';
import {Conditional, DisplayConfig, OFExtensions, Registration} from '../extensions';
import {Validation} from '../validation';

/**
 * Component shape/options for a license plate component.
 *
 * @remarks The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Special components
 */
export type LicensePlateComponentSchema = Prettify<
  BaseComponent<'licenseplate'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    Conditional &
    (Validation<'required' | 'pattern'> & {
      validate: {
        /**
         * The license plate pattern is fixed, defining a structure like `XXX-XXX-XXX`,
         * where `X` may be an alphanumeric character.
         *
         * This is barebones validation - it appears that within a group only the same
         * class of characters can be used (either letters or numbers), and there are
         * certain prefixes/ranges that are issued in particular years. We opt for the
         * minimal validation.
         *
         * @deprecated
         * This hardcoded regex will be removed in the future - the renderer itself will
         * implement the correct regex and apply it unless an override is specified.
         *
         * Possibly in the builder we will then allow form builders to provide their
         * own range/pattern.
         *
         * @remarks
         * The backslash escape is probably not necessary? The literal dash should be
         * sufficient.
         */
        pattern: '^[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}$';
      };
    }) &
    Registration &
    OFExtensions<'label' | 'description' | 'tooltip'> &
    // Unfortunately, this results in a top-level union and there's nothing we can do
    // about it due to TS limitations :(
    WithMultiple<string>
>;
