import {InputComponentSchema} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type ProductPriceInputSchema = InputComponentSchema<never, Validator, TranslatableKeys>;

/**
 * @group Form.io components
 * @category Base types
 */
export interface ProductPriceComponentSchema
  extends Omit<ProductPriceInputSchema, 'hideLabel' | 'disabled'> {
  type: 'productPrice';
  product: string;
}
