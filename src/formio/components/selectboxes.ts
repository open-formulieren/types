import {InputComponentSchema} from '..';
import {OFExtensions} from '../base';
import {ManualValues, Option, VariableValues} from '../common';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type SelectboxesInputSchema = InputComponentSchema<
  Record<string, boolean>,
  Validator,
  TranslatableKeys
>;

/**
 * @group Form.io components
 * @category Base types
 */
interface BaseSelectboxesSchema {
  type: 'selectboxes';
  defaultValue: Record<string, boolean>;
  multiple?: false;
}

/**
 * @group Form.io components
 * @category Base types
 */
type SelectboxesManualValuesSchema = Omit<SelectboxesInputSchema, 'hideLabel' | 'disabled'> &
  BaseSelectboxesSchema & {
    openForms: OFExtensions<TranslatableKeys>['openForms'] & ManualValues;
    values: Option[];
  };

/**
 * @group Form.io components
 * @category Base types
 */
type SelectboxesVariableValuesSchema = Omit<SelectboxesInputSchema, 'hideLabel' | 'disabled'> &
  BaseSelectboxesSchema & {
    openForms: OFExtensions<TranslatableKeys>['openForms'] & VariableValues;
  };

/**
 * @group Form.io components
 * @category Concrete types
 */
export type SelectboxesComponentSchema =
  | SelectboxesManualValuesSchema
  | SelectboxesVariableValuesSchema;
