import {InputComponentSchema} from '..';
import {ManualValues, Option, ReferentielijstenValues, VariableValues} from '../common';
import {Require} from '../util';

type Validator = 'required' | 'minSelectedCount' | 'maxSelectedCount';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type SelectboxesInputSchema<Extensions> = InputComponentSchema<
  Record<string, boolean>,
  Validator,
  TranslatableKeys,
  Extensions
>;

export type SelectboxesUnsupported = 'hideLabel' | 'disabled';

/**
 * @group Form.io components
 * @category Base types
 */
interface BaseSelectboxesSchema {
  type: 'selectboxes';
  defaultValue: Record<string, boolean>;
  openForms?: {transformData?: boolean};
}

/**
 * @group Form.io components
 * @category Base types
 */
type SelectboxesManualValuesSchema = Omit<
  SelectboxesInputSchema<ManualValues>,
  SelectboxesUnsupported
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
  SelectboxesUnsupported
> &
  BaseSelectboxesSchema;

/**
 * @group Form.io components
 * @category Base types
 */
type SelectboxesReferentielijstenValuesSchema = Omit<
  SelectboxesInputSchema<ReferentielijstenValues>,
  SelectboxesUnsupported
> &
  BaseSelectboxesSchema;

/**
 * @group Form.io components
 * @category Concrete types
 */
export type SelectboxesComponentSchema = Require<
  | SelectboxesManualValuesSchema
  | SelectboxesVariableValuesSchema
  | SelectboxesReferentielijstenValuesSchema,
  'openForms'
>;
