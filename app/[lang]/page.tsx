"use client";

import { useState, useEffect, useMemo, lazy, Suspense } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Lightbulb,
  Leaf,
  Award,
  Star,
  CheckCircle,
  Mail,
  Phone,
  Globe,
  Menu,
  ArrowDownRight,
  Sparkles,
  Coffee,
  Building2,
  GraduationCap,
  Clock,
  Sprout,
  Cpu,
  BarChart3,
  Zap,
  Shield,
} from "lucide-react";
import LangToggle, { type Lang } from "@/components/lang-toggle";
import { getDict, t, type Locale } from "@/lib/i18n";
import { useParams } from "next/navigation";

const ScrollToTopLazy = lazy(() =>
  import("@/components/scroll-to-top").then((mod) => ({
    default: mod.ScrollToTop,
  }))
);
const WhatsAppButtonLazy = lazy(() => import("@/components/whatsapp-button"));

export default function LocalizedLanding() {
  const params = useParams();
  const lang = ((params?.lang as string) || "fr") as Locale;
  const dict = useMemo(() => getDict(lang), [lang]);
  const approachWebsite = "https://excellencesquad.eu";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { key: "about", href: "#about" },
    { key: "approach", href: "#approach" },
    { key: "services", href: "#services" },
    { key: "uniqueness", href: "#uniqueness" },
    { key: "clients", href: "#clients" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen text-white">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="flex items-center flex-shrink-0 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-orange-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="/Ponit_Excellence_Squad.png"
                  alt="Point Squad"
                  width={220}
                  height={60}
                  className="relative h-14 sm:h-16 lg:h-[4.5rem] w-auto object-contain drop-shadow-[0_0_12px_rgba(249,115,22,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all duration-300"
                  priority
                />
              </div>
            </a>
            <div className="flex items-center gap-2">
              <LangToggle
                initial={lang as Lang}
              />
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={t(dict, "nav.openMenu") ?? "Open menu"}
                    className="text-white"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-black text-white border-gray-800"
                >
                  <SheetHeader className="pb-2 border-b border-gray-800/50">
                    <SheetTitle>
                      <Image
                        src="/Ponit_Excellence_Squad.png"
                        alt="Point Squad"
                        width={180}
                        height={50}
                        className="h-14 w-auto object-contain drop-shadow-[0_0_12px_rgba(249,115,22,0.3)]"
                      />
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="mt-2 flex flex-col gap-1">
                    {navLinks.map(({ key, href }) => (
                      <SheetClose asChild key={key}>
                        <a
                          href={href}
                          className="px-3 py-3 rounded-md text-base font-medium font-body text-gray-200 hover:text-white hover:bg-gray-900/60 transition-colors"
                        >
                          {t(dict, `nav.links.${key}`)}
                        </a>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto p-4 text-xs text-gray-400">
                    {t(dict, "nav.copyright").replace(
                      "{{year}}",
                      String(new Date().getFullYear())
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-[calc(100vh-80px)] mt-16 pt-12 sm:pt-8 lg:pt-0 flex items-center justify-center relative overflow-hidden hero-mobile-safe mobile-no-overflow"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20" />
        <div className="mt-12 max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 items-center content-center gap-8 md:gap-12 lg:gap-8 xl:gap-12 2xl:gap-16">
            <Reveal
              direction="up"
              durationMs={750}
              className="text-center lg:text-left min-w-0 max-w-full lg:max-w-xl xl:max-w-2xl justify-self-center lg:justify-self-start space-y-4 sm:space-y-6 px-2 sm:px-0 lg:pr-4 xl:pr-8"
            >
              <style>{`@keyframes slideInX{0%{opacity:0;transform:translateX(-18px)}100%{opacity:1;transform:translateX(0)}}`}</style>
              <div className="flex flex-nowrap items-center justify-start gap-1 sm:gap-2 lg:gap-3 mb-6 overflow-x-auto lg:overflow-x-visible no-scrollbar">
                {Array.isArray(dict.hero.tags) &&
                  dict.hero.tags.map((tag: string, i: number) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-2 sm:px-3 py-1.5 rounded-full border border-gray-700/50 whitespace-nowrap flex-shrink-0 lg:[animation:none]"
                      style={{
                        animation: "slideInX 0.55s ease-out forwards",
                        animationDelay: `${i * 0.12}s`,
                      }}
                    >
                      <ShieldIcon index={i} />
                      <span className="text-gray-300 text-xs sm:text-sm font-medium">
                        {tag}
                      </span>
                    </div>
                  ))}
              </div>
              <div className="space-y-4">
                <div className="flex justify-center lg:justify-start">
                  <div className="inline-flex items-center px-4 sm:px-6 py-3 sm:py-4 border border-white rounded-full bg-orange-500/10 backdrop-blur-sm">
                    <span className="text-orange-500 font-semibold text-xl sm:text-2xl lg:text-3xl whitespace-nowrap">
                      {t(dict, "hero.badge")}
                    </span>
                  </div>
                </div>
              </div>
              <h1
                id="hero-heading"
                className="font-bold font-heading leading-tight tracking-tight text-[clamp(1.5rem,6vw,2.75rem)] text-balance max-w-[20ch] mx-auto lg:mx-0"
              >
                <span className="text-orange-gradient">
                  {t(dict, "hero.headline")}
                </span>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-8">
                {[
                  {
                    icon: <Sparkles className="h-6 w-6" />,
                    title: t(dict, "services.categories.housekeeping.title"),
                  },
                  {
                    icon: <Coffee className="h-6 w-6" />,
                    title: t(dict, "services.categories.breakfast.title"),
                  },
                  {
                    icon: <Building2 className="h-6 w-6" />,
                    title: t(dict, "services.categories.maintenance.title"),
                  },
                  {
                    icon: <Users className="h-6 w-6" />,
                    title: t(dict, "services.categories.frontoffice.title"),
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group relative bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 hover:border-orange-500/60 hover:bg-black/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="flex-shrink-0 p-3 bg-orange-500/10 rounded-xl group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300">
                        <div className="text-orange-500 group-hover:text-orange-400 transition-colors duration-300 [filter:drop-shadow(0_0_8px_rgba(255,115,0,0.5))]">
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300 font-heading leading-tight">
                          {service.title}
                        </h3>
                        <div className="mt-1 h-0.5 bg-gradient-to-r from-orange-500/60 to-transparent group-hover:from-orange-400/80 transition-colors duration-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full flex flex-col items-center justify-center pt-6 px-2">
                <Button
                  onClick={scrollToContact}
                  className="bg-orange-gradient hover:opacity-90 hover:shimmer text-white px-4 sm:px-6 py-6 sm:py-8 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black mobile-button-spacing touch-manipulation text-center leading-snug w-full max-w-sm"
                  aria-label={t(dict, "hero.cta")}
                >
                  {t(dict, "hero.cta")}
                </Button>
              </div>
              <div className="pt-6 border-t border-gray-800/50">
                <p className="text-gray-400 text-sm text-center lg:text-left">
                  {t(dict, "hero.partnersLine")}
                </p>
              </div>
            </Reveal>
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[450px] xl:max-w-[500px] justify-self-center lg:justify-self-end lg:ml-12 xl:ml-16 2xl:ml-20 hidden lg:block">
              <div className="relative h-[380px] sm:h-[420px] lg:h-[460px] z-10">
                <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border border-gray-800/40 -rotate-1 animate-float-slow [animation-delay:0.3s]">
                  <Image
                    src="/redGuy2.jpg"
                    alt={t(dict, "images.heroAlt")}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 0px, (max-width: 1024px) 50vw, (max-width: 1280px) 450px, 500px"
                    priority
                    quality={95}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500/5 rounded-full blur-xl z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-alt mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>

      <section
        id="about"
        className="py-16 md:py-20 bg-transparent scroll-mt-24 md:scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="up" durationMs={400}>
              <div className="space-y-6">
                <h2 className="fluid-h2 font-bold font-heading text-white mb-8">
                  {t(dict, "about.title")}
                </h2>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-body">
                  {t(dict, "about.body")}
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={30} direction="right" className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/30 via-orange-400/10 to-yellow-400/10 rounded-2xl blur-2xl opacity-80 group-hover:opacity-100 transition duration-500 z-0"></div>
                <Image
                  src="/picine.jpeg"
                  alt={t(dict, "images.maidAlt")}
                  width={320}
                  height={240}
                  className="relative rounded-2xl shadow-2xl max-w-xs w-full h-auto object-cover animate-float-slow border-4 border-orange-500/10 group-hover:border-orange-400/30 transition-all duration-300"
                  loading="lazy"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="section-divider-alt mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>

      <section className="py-12 md:py-16 bg-transparent overflow-hidden">
        <div className="w-full">
          <Reveal direction="up">
            <h2 className="fluid-h2 font-bold font-heading text-center text-orange-500 mb-12">
              {t(dict, "refs.title")}
            </h2>
          </Reveal>
          <Reveal delayMs={40} direction="up">
            <div className="w-full bg-gradient-to-r from-black/60 via-gray-900/40 to-black/60 backdrop-blur-xl border-y border-gray-700/50 py-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 animate-pulse pointer-events-none"></div>
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center max-w-6xl mx-auto">
                  {[
                    { src: "/circuit.png", alt: "Circuits Boutique Hotel" },
                    {
                      src: "/domaine-Photoroom.png",
                      alt: "Domaine des Hautes Fagnes",
                    },
                    { src: "/ibis-Photoroom.png", alt: "Ibis Hotel" },
                    { src: "/ramada-Photoroom.png", alt: "Ramada Hotel" },
                    { src: "/smartflat.png", alt: "Smartflats" },
                    { src: "/chateauform.png", alt: "Chateau" },
                    { src: "/newreference.png", alt: "Catalonia" },
                    { src: "/Mere.png", alt: "Mere Hotels" },
                  ].map((logo, index) => (
                    <div
                      key={index}
                      className="group relative w-full max-w-[120px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[200px] h-20 sm:h-24 md:h-32 lg:h-36 p-3 sm:p-4 md:p-5 lg:p-6 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-600/40 hover:border-orange-500/60 transition-all duration-300 hover:bg-white/20 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 flex items-center justify-center mx-auto"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/15 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={160}
                        height={80}
                        loading="lazy"
                        quality={85}
                        className={`relative max-w-full max-h-full object-contain transition-all duration-500 ease-out group-hover:scale-105 filter group-hover:drop-shadow-2xl opacity-95 group-hover:opacity-100 contrast-110 brightness-110 ${
                          index === 1 ? "brightness-0 invert" : ""
                        } ${
                          index === 5 || index === 7
                            ? "brightness-0 invert contrast-200 saturate-0"
                            : ""
                        }`}
                        style={
                          index === 5 || index === 7
                            ? {
                                filter:
                                  "brightness(0) invert(1) contrast(2) saturate(0)",
                              }
                            : {}
                        }
                        sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 180px, 200px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider-alt mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>

      <section
        id="services"
        className="py-16 md:py-20 bg-transparent scroll-mt-24 md:scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <Reveal direction="up">
              <h2 className="fluid-h2 font-bold font-heading text-orange-500 mb-8">
                {t(dict, "services.title")}
              </h2>
            </Reveal>
            <Reveal delayMs={20} direction="up">
              <div className="bg-black rounded-lg p-6 sm:p-8 max-w-2xl mx-auto border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  {t(dict, "services.subtitle")}
                </h3>
                <div className="w-full flex justify-center">
                  <Badge className="bg-orange-gradient text-white px-4 py-2 text-sm sm:text-base md:text-lg max-w-full whitespace-normal break-words text-center overflow-hidden">
                    <span className="min-w-0">{t(dict, "services.cta")}</span>
                  </Badge>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mt-16">
            {[
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: t(dict, "services.categories.housekeeping.title"),
                description: t(dict, "services.categories.housekeeping.desc"),
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: t(dict, "services.categories.maintenance.title"),
                description: t(dict, "services.categories.maintenance.desc"),
              },
              {
                icon: <Coffee className="h-8 w-8" />,
                title: t(dict, "services.categories.breakfast.title"),
                description: t(dict, "services.categories.breakfast.desc"),
              },
              {
                icon: <Building2 className="h-8 w-8" />,
                title: t(dict, "services.categories.frontoffice.title"),
                description: t(dict, "services.categories.frontoffice.desc"),
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: t(dict, "services.categories.academy.title"),
                description: t(dict, "services.categories.academy.desc"),
              },
            ].map((service, index) => (
              <Reveal key={index} delayMs={index * 100} direction="up">
                <Card className="bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60 backdrop-blur-xl border border-gray-700/50 hover:border-orange-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 group h-full">
                  <CardContent className="p-4 sm:p-6 text-center relative overflow-hidden h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="p-3 sm:p-4 bg-orange-500/10 rounded-2xl w-fit mx-auto mb-3 sm:mb-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                        <div className="text-orange-500 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-heading group-hover:text-orange-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm font-body group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider-alt mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>

      <section
        id="uniqueness"
        className="py-16 md:py-20 bg-transparent scroll-mt-24 md:scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <h2 className="fluid-h2 font-bold font-heading text-center text-orange-500 mb-12 md:mb-16">
              {t(dict, "unique.title")}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 items-stretch">
            {Array.isArray(dict.unique.cards) &&
              dict.unique.cards.map((card: { title: string; desc: string }, i: number) => (
                <Reveal
                  key={i}
                  delayMs={i * 70}
                  direction={i % 2 === 0 ? "up" : "down"}
                >
                  <Card className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 hover:border-orange-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 group h-full min-h-[280px]">
                    <CardContent className="p-4 sm:p-6 h-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="p-3 bg-orange-500/10 rounded-xl w-fit mb-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                          {getIcon(i)}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-heading group-hover:text-orange-400 transition-colors duration-300">
                          {card.title}
                        </h3>
                        <p className="text-gray-300 text-xs sm:text-sm font-body flex-1 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      <div className="section-divider-alt mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>

      <section
        id="approach"
        className="relative py-20 md:py-28 bg-transparent scroll-mt-24 md:scroll-mt-28 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left mb-12 lg:mb-0 flex flex-col justify-center">
              <Reveal direction="up">
                <h2 className="fluid-h2 font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 drop-shadow-lg mb-8">
                  {t(dict, "approach.title")}
                </h2>
              </Reveal>
              <Reveal delayMs={80} direction="up">
                <div className="relative">
                  <div className="absolute -left-4 -top-4 w-10 h-10 bg-orange-500/20 rounded-full blur-lg hidden sm:block"></div>
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-body relative z-10">
                    {t(dict, "approach.body")}
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={140} direction="up">
                <div className="mt-10 flex justify-center lg:justify-start">
                  <Button
                    asChild
                    className="bg-orange-gradient hover:opacity-95 hover:shimmer text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg shadow-orange-500/20 transition-all duration-300 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <a
                      href={approachWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Globe className="mr-2 h-5 w-5 animate-spin-slow text-orange-200" />
                      <span>{t(dict, "approach.cta")}</span>
                    </a>
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="flex justify-center lg:justify-end relative">
              <Reveal delayMs={120} direction="right" className="relative">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/30 via-orange-400/10 to-yellow-400/10 rounded-2xl blur-2xl opacity-80 group-hover:opacity-100 transition duration-500 z-0"></div>
                  <Image
                    src="/CleaningLady.png"
                    alt={t(dict, "images.maidAlt")}
                    width={320}
                    height={480}
                    loading="lazy"
                    className="relative rounded-2xl shadow-2xl max-w-xs w-full h-auto object-cover animate-float-slow border-4 border-orange-500/10 group-hover:border-orange-400/30 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-alt mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>

      <section className="py-16 md:py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center mb-14 md:mb-20">
            <Reveal direction="left">
              <div>
                <h2 className="font-heading font-extrabold leading-[0.9] text-white text-5xl sm:text-6xl lg:text-7xl">
                  <span className="block">{t(dict, "capital.titleLeft")}</span>
                  <span className="block">
                    {t(dict, "capital.titleCenter")}
                  </span>
                  <span className="inline-flex items-center gap-4 mt-2">
                    <span className="text-orange-500 text-6xl sm:text-7xl lg:text-8xl">
                      &amp;
                    </span>
                    <span className="text-white">
                      {t(dict, "capital.titleRight")}
                    </span>
                  </span>
                </h2>
                <p className="mt-6 text-gray-300/90 max-w-xl">
                  {t(dict, "capital.body")}
                </p>
              </div>
            </Reveal>
            <Reveal direction="right" delayMs={80}>
              <div className="relative group w-full max-w-xl">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/30 via-orange-400/10 to-yellow-400/10 rounded-2xl blur-2xl opacity-80 group-hover:opacity-100 transition duration-500 z-0"></div>
                <Image
                  src="/CIT.png"
                  alt={t(dict, "images.tabletAlt")}
                  width={576}
                  height={400}
                  loading="lazy"
                  className="relative rounded-2xl shadow-2xl max-w-xl w-full h-auto object-cover animate-float-slow border-4 border-orange-500/10 group-hover:border-orange-400/30 transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, 576px"
                  style={{ minWidth: 0 }}
                />
                <Image
                  src="/Dashboard.png"
                  alt={t(dict, "images.tabletAlt")}
                  width={576}
                  height={400}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-4 border-orange-500/10 group-hover:border-orange-400/30"
                  sizes="(max-width: 768px) 100vw, 576px"
                />
              </div>
            </Reveal>
          </div>
          <Reveal direction="up">
            <h3 className="sr-only">Capital &amp; Innovation</h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Reveal direction="left">
              <div className="mx-auto w-full max-w-xl group">
                <div className="w-full">
                  <Image
                    src="/tablet.png"
                    alt={t(dict, "images.tabletAlt")}
                    width={640}
                    height={400}
                    loading="lazy"
                    className="w-full rounded-2xl ring-1 ring-white/10 shadow-2xl object-cover aspect-[16/10] md:aspect-[21/10]"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 640px"
                  />
                </div>
                <div className="h-4 sm:h-6" />
                <Card className="bg-black/55 backdrop-blur-md border border-gray-800/60 hover:border-orange-500/70 transition-all duration-300 hover:shadow-[0_0_60px_-20px] hover:shadow-orange-500/30">
                  <CardContent className="p-6 sm:p-8 relative overflow-visible">
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-orange-500/10 rounded-xl mr-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                          <Users className="h-7 w-7 text-orange-500" />
                        </div>
                        <h4 className="text-2xl font-bold font-heading text-white">
                          {t(dict, "capital.human.title")}
                        </h4>
                      </div>
                      <ul className="space-y-4 text-gray-300 font-body">
                        {Array.isArray(dict.capital.human.bullets) &&
                          dict.capital.human.bullets.map((txt: string) => (
                            <li
                              key={txt}
                              className="flex items-start group/item"
                            >
                              <div className="p-1 bg-orange-500/20 rounded-full mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-orange-500/40 transition-colors duration-300">
                                <CheckCircle className="h-4 w-4 text-orange-500" />
                              </div>
                              <span className="group-hover/item:text-white transition-colors duration-300">
                                {txt}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Reveal>
            <Reveal delayMs={100} direction="right">
              <Card className="bg-black/50 backdrop-blur-sm border border-gray-800/60 hover:border-orange-500/70 transition-all duration-300 hover:shadow-[0_0_60px_-20px] hover:shadow-orange-500/30 group">
                <CardContent className="p-6 sm:p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/3 rounded-full blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-orange-500/10 rounded-xl mr-4 group-hover:bg-orange-500/20 transition-colors duration-300 group-hover:scale-110 transform">
                        <Lightbulb className="h-7 w-7 text-orange-500" />
                      </div>
                      <h4 className="text-2xl font-bold font-heading text-white">
                        {t(dict, "capital.ict.title")}
                      </h4>
                    </div>
                    <ul className="space-y-3 text-gray-300 font-body mb-6">
                      {Array.isArray(dict.capital.ict.bullets) &&
                        dict.capital.ict.bullets.map((txt: string) => (
                          <li key={txt} className="flex items-start group/item">
                            <div className="p-1 bg-orange-500/20 rounded-full mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-orange-500/40 transition-colors duration-300">
                              <CheckCircle className="h-4 w-4 text-orange-500" />
                            </div>
                            <span className="group-hover/item:text-white transition-colors duration-300">
                              {txt}
                            </span>
                          </li>
                        ))}
                    </ul>
                    <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-auto pt-8 sm:pt-12 pb-6 sm:pb-8">
                      {Array.isArray(dict.capital.ict.stats) &&
                        dict.capital.ict.stats.map((s: { value: string; label: string }, idx: number) => (
                          <div key={idx} className="text-center group/stat">
                            <div className="flex justify-center mb-2 sm:mb-4">
                              {idx === 0 ? (
                                <Globe className="h-8 w-8 sm:h-10 md:h-12 lg:w-12 lg:h-12 text-orange-500 group-hover/stat:scale-110 transition-transform duration-300" />
                              ) : idx === 1 ? (
                                <Zap className="h-8 w-8 sm:h-10 md:h-12 lg:w-12 lg:h-12 text-orange-500 group-hover/stat:scale-110 transition-transform duration-300" />
                              ) : (
                                <BarChart3 className="h-8 w-8 sm:h-10 md:h-12 lg:w-12 lg:h-12 text-orange-500 group-hover/stat:scale-110 transition-transform duration-300" />
                              )}
                            </div>
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover/stat:text-orange-500 transition-colors duration-300 mb-1 sm:mb-2">
                              {s.value}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-400 group-hover/stat:text-gray-300 transition-colors duration-300">
                              {s.label}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="section-divider-alt mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>

      <section className="py-16 md:py-24 bg-transparent scroll-mt-24 md:scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 md:mb-20">
            <Reveal className="text-center mb-8" direction="up">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-green-500/30 via-green-400/10 to-emerald-400/10 rounded-2xl blur-xl opacity-80"></div>
                  <div className="relative p-4 bg-green-500/10 rounded-2xl backdrop-blur-sm border border-green-500/20">
                    <Leaf className="h-12 w-12 text-green-500" />
                  </div>
                </div>
              </div>
              <h2 className="font-heading font-extrabold leading-[0.9] text-white text-4xl sm:text-5xl lg:text-6xl">
                <span className="block">{t(dict, "sustain.title")}</span>
                <span className="inline-flex items-center gap-4 mt-2">
                  <span className="text-green-500 text-5xl sm:text-6xl lg:text-7xl">
                    &
                  </span>
                  <span className="text-white">
                    {t(dict, "sustain.title2")}
                  </span>
                </span>
              </h2>
            </Reveal>
            <Reveal delayMs={15} direction="up">
              <p className="mt-6 text-gray-300/90 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed font-body">
                {t(dict, "sustain.body")}
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <Reveal direction="left" delayMs={30}>
              <Card className="bg-black/50 backdrop-blur-sm border border-gray-800/60 hover:border-green-500/70 transition-all duration-300 hover:shadow-[0_0_60px_-20px] hover:shadow-green-500/30 group h-full">
                <CardContent className="p-6 sm:p-8 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="relative mb-6 rounded-xl overflow-hidden">
                      <Image
                        src="/welcome.png"
                        alt={t(dict, "images.practicesAlt")}
                        width={400}
                        height={192}
                        loading="lazy"
                        quality={80}
                        className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <div className="p-2 bg-green-500/20 backdrop-blur-sm rounded-lg border border-green-400/30">
                          <Leaf className="h-5 w-5 text-green-400" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-green-500/10 rounded-xl mr-4 group-hover:bg-green-500/20 transition-colors duration-300">
                        <Leaf className="h-7 w-7 text-green-500" />
                      </div>
                      <h4 className="text-2xl font-bold font-heading text-white">
                        {t(dict, "sustain.practices.title")}
                      </h4>
                    </div>
                    <ul className="space-y-4 text-gray-300 font-body mt-auto">
                      {Array.isArray(dict.sustain.practices.list) &&
                        dict.sustain.practices.list.map((p: string) => (
                          <li key={p} className="flex items-start group/item">
                            <div className="p-1 bg-green-500/20 rounded-full mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-500/40 transition-colors duration-300">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            </div>
                            <span className="group-hover/item:text-white transition-colors duration-300">
                              {p}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal direction="right" delayMs={40}>
              <Card className="bg-black/50 backdrop-blur-sm border border-gray-800/60 hover:border-green-500/70 transition-all duration-300 hover:shadow-[0_0_60px_-20px] hover:shadow-green-500/30 group h-full">
                <CardContent className="p-6 sm:p-8 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex flex-col h-full text-center">
                    <div className="mb-8 relative">
                      <Image
                        src="/Greenkey.jpeg"
                        alt={t(dict, "images.greenkeyAlt")}
                        width={290}
                        height={290}
                        loading="lazy"
                        quality={80}
                        className="w-116 h-116 mx-auto object-contain filter drop-shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="290px"
                      />
                    </div>
                    <div className="flex items-center justify-center mb-6">
                      <div className="p-3 bg-green-500/10 rounded-xl mr-4 group-hover:bg-green-500/20 transition-colors duration-300">
                        <Award className="h-7 w-7 text-green-500" />
                      </div>
                      <h4 className="text-2xl font-bold font-heading text-white">
                        {t(dict, "sustain.greenkey.title")}
                      </h4>
                    </div>
                    <p className="text-gray-300/90 font-body mb-8 group-hover:text-gray-200 transition-colors duration-300">
                      {t(dict, "sustain.greenkey.subtitle")}
                    </p>
                    <ul className="space-y-5 text-gray-300 font-body text-left mt-auto">
                      {Array.isArray(dict.sustain.greenkey.benefits) &&
                        dict.sustain.greenkey.benefits.map((b: string) => (
                          <li key={b} className="flex items-center group/item">
                            <div className="p-1.5 bg-green-500/20 rounded-full mr-4 flex-shrink-0 group-hover/item:bg-green-500/40 transition-colors duration-300">
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            </div>
                            <span className="group-hover/item:text-white transition-colors duration-300 text-base leading-relaxed">
                              {b}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="section-divider-alt mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>

      <section
        id="clients"
        className="py-16 md:py-20 bg-transparent scroll-mt-24 md:scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <h2 className="fluid-h2 font-bold font-heading text-center text-white mb-12 md:mb-16">
              {t(dict, "clients.title")}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {[0, 1, 2, 3].map((i) => (
              <Reveal
                key={i}
                delayMs={20}
                direction={
                  i === 0 ? "left" : i === 1 ? "up" : i === 2 ? "down" : "right"
                }
              >
                <Card className="bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60 backdrop-blur-xl border border-gray-700/50 hover:border-orange-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 group">
                  <CardContent className="p-8 h-full flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="text-center mb-8">
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-orange-600/20 to-orange-500/30 blur-3xl group-hover:blur-4xl transition-all duration-700 animate-pulse"></div>
                          <div
                            className={`relative overflow-hidden transition-all duration-500 group-hover:scale-105 shadow-2xl group-hover:shadow-orange-500/40 ${
                              i === 0
                                ? "w-48 h-48 rounded-3xl rotate-3 group-hover:rotate-0"
                                : "w-48 h-48 rounded-full scale-110 group-hover:scale-100"
                            }`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 via-orange-600/30 to-orange-500/50 rounded-inherit p-1">
                              <div className="w-full h-full rounded-inherit overflow-hidden">
                                <Image
                                  src={
                                    i === 0
                                      ? "/alexandre.jpg"
                                      : i === 1
                                      ? "/pauline.jpg"
                                      : i === 2
                                      ? "/chris.jpeg"
                                      : "/sandrive.jpeg"
                                  }
                                  alt={dict.clients.names[i]}
                                  width={192}
                                  height={192}
                                  loading="lazy"
                                  quality={80}
                                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                                  sizes="192px"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 space-y-2">
                          <h3 className="text-2xl font-bold text-white font-heading group-hover:text-orange-400 transition-colors duration-300">
                            {dict.clients.names[i]}
                          </h3>
                          <p className="text-orange-500 font-semibold text-lg font-body">
                            {dict.clients.companies[i]}
                          </p>
                        </div>
                      </div>
                      <div className="flex-1 flex items-center">
                        <blockquote className="text-xl text-gray-300 italic text-center font-body leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {dict.clients.quotes[i]}
                        </blockquote>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider-alt mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>

      <section
        id="contact"
        className="py-20 bg-transparent scroll-mt-24 md:scroll-mt-28 relative"
      >
        <div className="absolute bottom-8 right-8 text-white/60">
          <ArrowDownRight className="h-12 w-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal direction="up">
              <h2 className="fluid-h1 font-bold font-heading text-orange-gradient mb-8">
                {t(dict, "contact.cta")}
              </h2>
            </Reveal>
          </div>
          <div className="flex justify-center">
            <Reveal direction="up">
              <div className="max-w-2xl w-full">
                <h3 className="text-2xl font-bold text-white mb-8 font-heading text-center">
                  {t(dict, "contact.title")}
                </h3>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                  <div className="flex items-center p-3 bg-black/20 rounded-lg border border-gray-800/50">
                    <Globe className="h-6 w-6 text-orange-500 mr-2" />
                    <span className="text-gray-300 font-body">
                      {dict.contact.website}
                    </span>
                  </div>
                  <div className="flex items-center p-3 bg-black/20 rounded-lg border border-gray-800/50">
                    <Mail className="h-6 w-6 text-orange-500 mr-2" />
                    <span className="text-gray-300 font-body">
                      {dict.contact.email}
                    </span>
                  </div>
                  <div className="flex items-center p-3 bg-black/20 rounded-lg border border-gray-800/50 min-w-[190px]">
                    <Phone className="h-6 w-6 text-orange-500 mr-2" />
                    <span className="text-gray-300 font-body">
                      {dict.contact.phone}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <Suspense fallback={null}>
        <ScrollToTopLazy />
      </Suspense>
      <Suspense fallback={null}>
        <WhatsAppButtonLazy />
      </Suspense>
    </div>
  );
}

function ShieldIcon({ index }: { index: number }) {
  const icons = [Shield, GraduationCap, Clock, Award, Cpu, Sprout];
  const Icon = icons[index % icons.length];
  return <Icon className="h-4 w-4 text-orange-500 flex-shrink-0" />;
}

function getIcon(i: number) {
  if (i === 0) return <Users className="h-8 w-8 text-orange-500" />;
  if (i === 1) return <Award className="h-8 w-8 text-orange-500" />;
  if (i === 2) return <Star className="h-8 w-8 text-orange-500" />;
  if (i === 3) return <CheckCircle className="h-8 w-8 text-orange-500" />;
  if (i === 4) return <GraduationCap className="h-8 w-8 text-orange-500" />;
  if (i === 5) return <Cpu className="h-8 w-8 text-orange-500" />;
  return <Leaf className="h-8 w-8 text-orange-500" />;
}
