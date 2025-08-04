export type LanguageStrings = Record<string, string | Record<string, unknown>>;
export interface LanguageStringsCombined {
  messages: LanguageStrings;
}
