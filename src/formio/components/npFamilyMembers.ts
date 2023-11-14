import {InputComponentSchema} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

export type NpFamilyMembersInputSchema = InputComponentSchema<
  never, // No value whatsoever, done by the backend
  Validator,
  TranslatableKeys
>;

/**
 * @group Form.io components
 * @category Concrete types
 */
export interface NpFamilyMembersComponentSchema
  extends Omit<NpFamilyMembersInputSchema, 'hideLabel' | 'disabled'> {
  type: 'npFamilyMembers';
  includePartners: boolean;
  includeChildren: boolean;
}
