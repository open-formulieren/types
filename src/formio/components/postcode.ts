import {InputComponentSchema, MultipleCapable, PrefillConfig} from '..';

type Validator = 'required' | 'pattern' | 'customMessage';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type PostCodeInputSchema = InputComponentSchema<string, Validator, TranslatableKeys>;

/**
 * The textfield component properties that configure it for Dutch postal codes.
 *
 * @group Form.io components
 * @category Base types
 */
export interface PostcodeProperties {
  inputMask: '9999 AA';
  validate: {
    // Dutch postcode has 4 numbers and 2 letters (case insensitive). Letter combinations SS, SD and SA
    // are not used due to the Nazi-association.
    // See https://stackoverflow.com/a/17898538/7146757 and https://nl.wikipedia.org/wiki/Postcodes_in_Nederland
    pattern: '^[1-9][0-9]{3} ?(?!sa|sd|ss|SA|SD|SS)[a-zA-Z]{2}$';
  };
  validateOn: 'blur';
}

/**
 * @group Form.io components
 * @category Base types
 * @deprecated Use textfield instead, with the additional hardcoded properties.
 */
export type BasePostcodeComponentSchema = Omit<PostCodeInputSchema, 'hideLabel' | 'placeholder'> &
  PrefillConfig &
  PostcodeProperties & {
    type: 'postcode';
    // additional properties
    autocomplete?: string;
  };

/**
 * @group Form.io components
 * @category Concrete types
 * @deprecated Use textfield instead, with the additional hardcoded properties.
 */
export type PostcodeComponentSchema = MultipleCapable<BasePostcodeComponentSchema>;
