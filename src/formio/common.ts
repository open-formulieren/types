import {JSONObject} from '../types';
import {ComponentTranslations} from './i18n';

/**
 * @category Utilities
 */
export interface Option {
  value: string;
  label: string;
  description?: string;
  openForms?: {
    translations: ComponentTranslations<'label' | 'description'>;
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

/**
 * @category Utilities
 */
export interface ReferentielijstenValues {
  dataSrc: 'referentielijsten';
  service: string;
  code: string;
}
