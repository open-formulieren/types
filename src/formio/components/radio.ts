import {InputComponentSchema} from '..';
import {OFExtensions} from '../base';
import {ManualValues, Option, VariableValues} from '../common';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type RadioInputSchema = InputComponentSchema<string | null, Validator, TranslatableKeys>;

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
type RadioManualValuesSchema = Omit<RadioInputSchema, 'hideLabel' | 'disabled'> &
  BaseRadioSchema & {
    openForms: OFExtensions<TranslatableKeys>['openForms'] & ManualValues;
    values: Option[];
  };

/**
 * @group Form.io components
 * @category Base types
 */
type RadioVariableValuesSchema = Omit<RadioInputSchema, 'hideLabel' | 'disabled'> &
  BaseRadioSchema & {
    openForms: OFExtensions<TranslatableKeys>['openForms'] & VariableValues;
  };

/**
 * @group Form.io components
 * @category Concrete types
 */
export type RadioComponentSchema = RadioManualValuesSchema | RadioVariableValuesSchema;
