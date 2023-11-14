import {InputComponentSchema, MultipleCapable} from '..';

type Validator = 'required' | 'maxLength' | 'pattern';
type TranslatableKeys = 'label' | 'description' | 'tooltip' | 'defaultValue' | 'placeholder';

export type TextareaInputSchema = InputComponentSchema<string, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Base types
 */
export interface BaseTextareaComponentSchema extends Omit<TextareaInputSchema, 'hideLabel'> {
  type: 'textarea';
  // additional properties
  showCharCount?: boolean;
  autocomplete?: string;
  rows: number;
  // OF custom properties
  autoExpand: boolean;
}

/**
 * @group Form.io components
 * @category Concrete types
 */
export type TextareaComponentSchema = MultipleCapable<BaseTextareaComponentSchema>;
