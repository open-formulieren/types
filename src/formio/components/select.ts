import {InputComponentSchema} from '..';
import {MultipleCapable} from '../base';
import {ManualValues, Option, ReferenceListsValues, VariableValues} from '../common';
import {Require} from '../util';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type SelectInputSchema<Extensions> = InputComponentSchema<
  string,
  Validator,
  TranslatableKeys,
  Extensions
>;

export type SelectUnsupported = 'hideLabel' | 'disabled' | 'placeholder';

/**
 * @group Form.io components
 * @category Base types
 */
interface BaseSelectSchema {
  type: 'select';
  // not to be confused with openforms.dataSrc. Formio itself supports dynamic sources
  // like json/url/resource/custom but we don't use any of that, our backend resolves
  // dynamic values into data.values already.
  // So our openForms.dataSrc == itemsExpression results in dataSrc == values.
  dataSrc: 'values';
  // Fix for https://github.com/open-formulieren/open-forms/issues/4772
  // ensure the datatype is set to string to avoid formio casting it to other
  // types (such as integer)
  dataType: 'string';
}

/**
 * @group Form.io components
 * @category Base types
 */
type SelectManualValuesSchema = Omit<SelectInputSchema<ManualValues>, SelectUnsupported> &
  BaseSelectSchema & {
    data: {
      values: Option[];
    };
  };

/**
 * @group Form.io components
 * @category Base types
 */
type SelectVariableValuesSchema = Omit<SelectInputSchema<VariableValues>, SelectUnsupported> &
  BaseSelectSchema;

/**
 * @group Form.io components
 * @category Base types
 */
type SelectReferenceListsValuesSchema = Omit<
  SelectInputSchema<ReferenceListsValues>,
  SelectUnsupported
> &
  BaseSelectSchema;

/**
 * @group Form.io components
 * @category Concrete types
 */
export type SelectComponentSchema = MultipleCapable<
  Require<
    SelectManualValuesSchema | SelectVariableValuesSchema | SelectReferenceListsValuesSchema,
    'openForms'
  >
>;
