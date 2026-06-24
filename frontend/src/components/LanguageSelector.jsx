import { useState, useRef, useEffect } from "react";
import { FiGlobe, FiCheck } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "yo", label: "Yorùbá", flag: "🇳🇬" },
  { code: "ig", label: "Igbo", flag: "🇳🇬" },
];

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-9 h-9 rounded-lg border border-base-300 flex items-center justify-center hover:bg-base-200 transition-colors"
        title="Language"
      >
        <FiGlobe size={16} className="text-base-content/70" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-base-100 border border-base-300 rounded-xl shadow-lg z-50 overflow-hidden">
          <p className="text-xs text-base-content/50 px-3 pt-3 pb-1 font-medium">
            {t("select_lang")}
          </p>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { i18n.changeLanguage(lang.code); setOpen(false); }}
              className="w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-base-200 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </span>
              {current.code === lang.code && (
                <FiCheck size={14} className="text-success" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;