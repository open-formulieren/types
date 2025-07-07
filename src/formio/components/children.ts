import {OFExtensions, StrictComponentSchema} from '..';

export interface ChildDetails {
  bsn: string;
  firstNames: string;
  dateOfBirth: string;
}
/**
 * @group Form.io components
 * @category Concrete types
 */
export interface ChildrenComponentSchema
  extends Omit<StrictComponentSchema<ChildDetails[]>, 'placeholder' | 'disabled' | 'validateOn'>,
    OFExtensions {
  type: 'children';
  enableSelection: boolean;
}
