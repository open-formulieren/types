export type SupportedLocales = 'en' | 'nl';

export type TranslationsContainer<T> = {
  [key in SupportedLocales]?: T;
}
