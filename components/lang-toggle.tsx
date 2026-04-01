"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export type Lang = "fr" | "en" | "nl";
const SUPPORTED_LANGS: Lang[] = ["fr", "en", "nl"];

export default function LangToggle({
  onChange,
  initial = "fr" as Lang,
}: {
  onChange?: (lang: Lang) => void;
  initial?: Lang;
}) {
  const [lang, setLang] = useState<Lang>(initial);
  const router = useRouter();
  const pathname = usePathname();
  const LANGS: { code: Lang; label: string; flag: string }[] = [
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  ];

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (localStorage.getItem("lang") as Lang | null)
        : null;
    const parts = pathname?.split("/").filter(Boolean) ?? [];
    const fromPath = parts.find((part): part is Lang =>
      SUPPORTED_LANGS.includes(part as Lang)
    );
    const urlLang: Lang | undefined = fromPath;
    const next = urlLang || stored || initial;
    setLang(next);
    onChange?.(next);
  }, []);

  const select = (next: Lang) => {
    setLang(next);
    try {
      localStorage.setItem("lang", next);
    } catch {}
    onChange?.(next);
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const current = pathname || "/";
    const parts = current.split("/").filter(Boolean);
    const localeIndex = parts.findIndex((part) =>
      SUPPORTED_LANGS.includes(part as Lang)
    );

    let nextParts: string[];
    if (localeIndex >= 0) {
      nextParts = [...parts];
      nextParts[localeIndex] = next;
    } else if (parts.length === 0) {
      nextParts = [next];
    } else {
      nextParts = [next, ...parts];
    }

    const target = `/${nextParts.join("/")}${hash}`;
    router.push(target);
  };

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label="Select language"
          className="text-white/90 gap-2"
        >
          <span className="text-lg leading-none">{current.flag}</span>
          <span className="hidden sm:inline">{current.label}</span>
          <span className="sm:hidden">{lang.toUpperCase()}</span>
          <ChevronDown className="h-4 w-4 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[180px]">
        {LANGS.map((item) => (
          <DropdownMenuItem
            key={item.code}
            onClick={() => select(item.code)}
            className={`gap-2 ${
              item.code === lang ? "font-semibold text-white" : ""
            }`}
          >
            <span className="text-lg leading-none">{item.flag}</span>
            <span>{item.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
