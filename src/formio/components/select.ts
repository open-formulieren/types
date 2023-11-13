import {InputComponentSchema} from '..';
import {MultipleCapable, OFExtensions} from '../base';
import {ManualValues, Option, VariableValues} from '../common';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type SelectInputSchema = InputComponentSchema<string, Validator, TranslatableKeys>;

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
}

/**
 * @group Form.io components
 * @category Base types
 */
type SelectManualValuesSchema = Omit<SelectInputSchema, SelectUnsupported> &
  BaseSelectSchema & {
    openForms: OFExtensions<TranslatableKeys>['openForms'] & ManualValues;
    data: {
      values: Option[];
    };
  };

/**
 * @group Form.io components
 * @category Base types
 */
type SelectVariableValuesSchema = Omit<SelectInputSchema, SelectUnsupported> &
  BaseSelectSchema & {
    openForms: OFExtensions<TranslatableKeys>['openForms'] & VariableValues;
  };

/**
 * @group Form.io components
 * @category Concrete types
 */
export type SelectComponentSchema = MultipleCapable<
  SelectManualValuesSchema | SelectVariableValuesSchema
>;
