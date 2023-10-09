import {TranslationsContainer} from '../i18n';
import {BaseErrorKeys} from './validation';

/**
 * A single translated literal.
 *
 * Keys should be possible properties of the component.
 */
export type Translation<K extends string> = {
  [key in K]?: string;
};

export type ComponentTranslations<K extends string = string> = TranslationsContainer<
  Translation<K>
>;
export type ErrorTranslations<K extends BaseErrorKeys = BaseErrorKeys> = TranslationsContainer<{
  [key in K]?: string;
}>;
