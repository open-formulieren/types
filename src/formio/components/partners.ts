import {OFExtensions, StrictComponentSchema} from '..';

export interface PartnerDetails {
  bsn: string;
  initials: string;
  affixes: string;
  lastName: string;
  dateOfBirth: string;
}
/**
 * @group Form.io components
 * @category Concrete types
 */
export interface PartnersComponentSchema
  extends Omit<StrictComponentSchema<PartnerDetails[]>, 'placeholder' | 'disabled' | 'validateOn'>,
    OFExtensions {
  type: 'partners';
}
