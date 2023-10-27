import {InputComponentSchema, MultipleCapable} from '..';

type Validator = 'required' | 'pattern';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type LicensePlateInputSchema = InputComponentSchema<string, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Base types
 */
export interface LicensePlateProperties {
  type: 'licenseplate';
  validate: {
    pattern: '^[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}\\-[a-zA-Z0-9]{1,3}$';
  };
  validateOn: 'blur';
}

/**
 * @group Form.io components
 * @category Base types
 */
export type BaseLicensePlateComponentSchema = Omit<
  LicensePlateInputSchema,
  'hideLabel' | 'placeholder'
> &
  LicensePlateProperties;

/**
 * @group Form.io components
 * @category Concrete types
 */
export type LicensePlateComponentSchema = MultipleCapable<BaseLicensePlateComponentSchema>;
