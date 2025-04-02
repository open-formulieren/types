import {InputComponentSchema} from '..';
import {ManualValues, Option, ReferenceListsValues, VariableValues} from '../common';
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
type SelectboxesReferenceListsValuesSchema = Omit<
  SelectboxesInputSchema<ReferenceListsValues>,
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
  | SelectboxesReferenceListsValuesSchema,
  'openForms'
>;
