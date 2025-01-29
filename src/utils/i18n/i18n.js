import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import enLang from "./locales/en/en.json";
import czLang from "./locales/cz/cz.json";
import uaLang from "./locales/ua/ua.json";
import deLang from "./locales/de/de.json";

// the translations
const resources = {
  cz: {
    translation: czLang,
  },
  en: {
    translation: enLang,
  },
  ua: {
    translation: uaLang,
  },
  de: {
    translation: deLang,
  },
};

i18n
  .use(I18nextBrowserLanguageDetector) // Automatically detects user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: ["cz", "en"], // Specify multiple fallbacks if needed
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage", "cookie"], // Cache user language selection
    },
    interpolation: {
      escapeValue: false, // React handles XSS by default
    },
  });

export default i18n;
