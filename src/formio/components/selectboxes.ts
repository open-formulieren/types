import {InputComponentSchema} from '..';
import {ManualValues, Option, VariableValues} from '../common';
import {Require} from '../util';

type Validator = 'required' | 'minSelectedCount' | 'maxSelectedCount';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type SelectboxesInputSchema<Extensions> = InputComponentSchema<
  Record<string, boolean>,
  Validator,
  TranslatableKeys,
  Extensions
>;

/**
 * @group Form.io components
 * @category Base types
 */
interface BaseSelectboxesSchema {
  type: 'selectboxes';
  defaultValue: Record<string, boolean>;
}

/**
 * @group Form.io components
 * @category Base types
 */
type SelectboxesManualValuesSchema = Omit<
  SelectboxesInputSchema<ManualValues>,
  'hideLabel' | 'disabled'
> &
  BaseSelectboxesSchema & {
    values: Option[];
  };

/**
 * @group Form.io components
 * @category Base types
 */
type SelectboxesVariableValuesSchema = Omit<
  SelectboxesInputSchema<VariableValues>,
  'hideLabel' | 'disabled'
> &
  BaseSelectboxesSchema;

/**
 * @group Form.io components
 * @category Concrete types
 */
export type SelectboxesComponentSchema = Require<
  SelectboxesManualValuesSchema | SelectboxesVariableValuesSchema,
  'openForms'
>;
