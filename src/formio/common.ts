import {JSONObject} from '@/types';

import {ComponentTranslations} from './i18n';

/**
 * @category Utilities
 */
export interface Option {
  value: string;
  label: string;
  openForms?: {
    translations: ComponentTranslations;
  };
}

/**
 * @category Utilities
 */
export interface ManualValues {
  dataSrc: 'manual';
}

/**
 * @category Utilities
 */
export interface VariableValues {
  dataSrc: 'variable';
  itemsExpression: string | JSONObject;
}
