import { createContext } from "react";

export const languages = [
  { displayName: "Español (Latam)", lang: "es-MX" },
  { displayName: "English", lang: "en-US" },
  { displayName: "Español (España)", lang: "es-ES" },
  { displayName: "Japonés", lang: "ja-JP" },
  { displayName: "Francés", lang: "fr-FR" },
  { displayName: "Italiano", lang: "it-IT" },
  { displayName: "Portugués", lang: "pt-BR" },
  { displayName: "Ruso", lang: "ru-RU" },
];

export const LanguageContext = createContext([languages[0].lang, () => {}]);
