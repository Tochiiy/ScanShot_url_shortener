import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
const Header = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <header className="w-full px-6 py-3 flex items-center justify-between border-b border-base-300">

      {/* logo */}
      <a href="/" className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-xl bg-success flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24">
            <path d="M50,2 L95,18 L95,58 Q95,82 50,98 Q5,82 5,58 L5,18 Z" fill="white" opacity="0.2"/>
            <path d="M50,12 L85,26 L85,57 Q85,76 50,90 Q15,76 15,57 L15,26 Z" fill="white" opacity="0.15"/>
            <text x="50" y="62" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="36" fontWeight="800" fill="white" letterSpacing="-1">SS</text>
            <circle cx="35" cy="74" r="6" fill="none" stroke="white" strokeWidth="2.5"/>
            <circle cx="65" cy="74" r="6" fill="none" stroke="white" strokeWidth="2.5"/>
            <line x1="41" y1="74" x2="59" y2="74" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight">
          Scan<span className="text-success">Short</span>
        </span>
      </a>

      {/* nav links — hidden on mobile */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-base-content/70">
        <a href="/how-to-use" className="hover:text-success transition-colors">
          {t("nav_how")}
        </a>
        <a href="/features" className="hover:text-success transition-colors">
          {t("nav_features")}
        </a>
        <a href="/about" className="hover:text-success transition-colors">
          {t("nav_about")}
        </a>
      </nav>

      {/* icon buttons */}
      <div className="flex items-center gap-2">
        <LanguageSelector />
        <ThemeToggle />
        <MobileMenu />
        <button className="hidden md:flex btn btn-success btn-sm">
          {t("cta")}
        </button>
      </div>
    </header>
  );
};

export default Header;