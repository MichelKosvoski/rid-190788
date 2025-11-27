import { translations } from "../i18n";

export default function useTranslate(lang) {
  function t(key) {
    return translations[lang]?.[key] || key;
  }

  return { t };
}
