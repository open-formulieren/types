import {InputComponentSchema} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type ProductPriceInputSchema = InputComponentSchema<never, Validator, TranslatableKeys>;

/**
 * Experimental feature that could change.
 * @experimental
 * @group Form.io components
 * @category Concrete types
 */
export interface ProductPriceComponentSchema
  extends Omit<ProductPriceInputSchema, 'hideLabel' | 'disabled'> {
  type: 'productPrice';
  product: string;
}
