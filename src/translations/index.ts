import en from "./en";
import it from "./it";

export const locales = ["en", "it"] as const;
export type Locale = typeof locales[number];

export const translations = { en, it };
