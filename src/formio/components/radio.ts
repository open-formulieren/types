import {InputComponentSchema} from '..';
import {ManualValues, Option, VariableValues} from '../common';
import {Require} from '../util';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type RadioInputSchema<Extensions> = InputComponentSchema<
  string | null,
  Validator,
  TranslatableKeys,
  Extensions
>;

/**
 * @group Form.io components
 * @category Base types
 */
interface BaseRadioSchema {
  type: 'radio';
  defaultValue: string | null;
}

/**
 * @group Form.io components
 * @category Base types
 */
type RadioManualValuesSchema = Omit<RadioInputSchema<ManualValues>, 'hideLabel' | 'disabled'> &
  BaseRadioSchema & {
    values: Option[];
  };

/**
 * @group Form.io components
 * @category Base types
 */
type RadioVariableValuesSchema = Omit<RadioInputSchema<VariableValues>, 'hideLabel' | 'disabled'> &
  BaseRadioSchema;

/**
 * @group Form.io components
 * @category Concrete types
 */
export type RadioComponentSchema = Require<
  RadioManualValuesSchema | RadioVariableValuesSchema,
  'openForms'
>;
