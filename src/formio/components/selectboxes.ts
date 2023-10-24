import {InputComponentSchema} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type SelectboxesInputSchema = InputComponentSchema<string, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Concrete types
 */
export interface SelectboxesComponentSchema
  extends Omit<SelectboxesInputSchema, 'hideLabel' | 'disabled'> {
  type: 'selectboxes';
  // OF custom properties
  dataSrc: 'manual' | 'variable';
  itemsExpression?: string;
}
