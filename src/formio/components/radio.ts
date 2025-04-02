import {InputComponentSchema} from '..';
import {ManualValues, Option, ReferenceListsValues, VariableValues} from '../common';
import {Require} from '../util';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type RadioInputSchema<Extensions> = InputComponentSchema<
  string | null,
  Validator,
  TranslatableKeys,
  Extensions
>;

export type RadioUnsupported = 'hideLabel' | 'disabled';

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
type RadioManualValuesSchema = Omit<RadioInputSchema<ManualValues>, RadioUnsupported> &
  BaseRadioSchema & {
    values: Option[];
  };

/**
 * @group Form.io components
 * @category Base types
 */
type RadioVariableValuesSchema = Omit<RadioInputSchema<VariableValues>, RadioUnsupported> &
  BaseRadioSchema;

/**
 * @group Form.io components
 * @category Base types
 */
type RadioReferenceListsValuesSchema = Omit<
  RadioInputSchema<ReferenceListsValues>,
  RadioUnsupported
> &
  BaseRadioSchema;

/**
 * @group Form.io components
 * @category Concrete types
 */
export type RadioComponentSchema = Require<
  RadioManualValuesSchema | RadioVariableValuesSchema | RadioReferenceListsValuesSchema,
  'openForms'
>;
