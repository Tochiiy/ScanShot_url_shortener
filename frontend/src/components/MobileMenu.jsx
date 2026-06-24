import { useState } from "react";
import { Link } from "react-router-dom";
import { FiGrid, FiX, FiLink, FiInfo, FiHelpCircle, FiStar } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const links = [
    { icon: <FiHelpCircle size={18} />, label: t("nav_how"), to: "/how-to-use" },
    { icon: <FiStar size={18} />, label: t("nav_features"), to: "/features" },
    { icon: <FiInfo size={18} />, label: t("nav_about"), to: "/about" },
    { icon: <FiLink size={18} />, label: t("nav_short"), to: "/" }, 
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-9 h-9 rounded-lg border border-base-300 flex items-center justify-center hover:bg-base-200 transition-colors"
        title="Menu"
      >
        {open
          ? <FiX size={16} className="text-base-content/70" />
          : <FiGrid size={16} className="text-base-content/70" />
        }
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-base-100 border border-base-300 rounded-xl shadow-lg z-50 overflow-hidden">
          <p className="text-xs text-base-content/50 px-3 pt-3 pb-1 font-medium uppercase tracking-wide">
            {t("menu")}
          </p>

          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-base-200 transition-colors text-base-content/80 hover:text-success"
            >
              <span className="text-success">{link.icon}</span>
              {link.label}
            </Link>
          ))}

          <div className="border-t border-base-300 px-3 py-3 mt-1">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="btn btn-success btn-sm w-full"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;