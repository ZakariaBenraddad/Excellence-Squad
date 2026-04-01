"use client";
import { useEffect } from "react";

export default function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    if (typeof document !== "undefined" && lang) {
      document.documentElement.setAttribute("lang", lang);
    }
  }, [lang]);
  return null;
}
