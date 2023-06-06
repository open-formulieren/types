import {TranslationsContainer} from '../i18n';
import {BaseErrorKeys} from './validation';

export interface Translation {
  literal: string;
  translation: string;
}

export type ComponentTranslations = TranslationsContainer<Translation[]>;
export type ErrorTranslations<K extends BaseErrorKeys = BaseErrorKeys> = TranslationsContainer<{
  [key in K]?: string;
}>;
