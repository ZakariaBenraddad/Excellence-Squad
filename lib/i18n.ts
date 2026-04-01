import fr from "@/locales/fr.json";
import en from "@/locales/en.json";
import nl from "@/locales/nl.json";

export type Locale = "fr" | "en" | "nl";

const dictionaries = {
  fr,
  en,
  nl,
} as const;

export type Messages = (typeof dictionaries)["fr"];

export function getDict(locale: Locale): Messages {
  return dictionaries[locale] ?? dictionaries.fr;
}

export function t(obj: Record<string, unknown>, path: string, fallback?: string): string {
  try {
    return (
      path.split(".").reduce((acc: Record<string, unknown> | unknown, key) => (acc as Record<string, unknown>)?.[key], obj as unknown) as string ??
      fallback ??
      path
    );
  } catch {
    return fallback ?? path;
  }
}
