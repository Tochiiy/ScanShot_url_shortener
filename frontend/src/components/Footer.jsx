import { useEffect, useState } from "react";
import { FiGithub, FiClock } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString());
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full px-6 py-6 border-t border-base-300 flex flex-col items-center gap-3 mt-auto">
      <p className="text-sm font-semibold">
        Scan<span className="text-success">Short</span>
      </p>

      <div className="flex flex-wrap justify-center gap-4 text-xs text-base-content/60">
        <div className="flex items-center gap-1">
          <FiClock className="text-success" size={13} />
          <span>{time}</span>
        </div>

        <a
          href="https://github.com/tochiiy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-success transition-colors"
        >
          <FiGithub size={13} />
          <span>{t("footer_github")}</span>
        </a>
      </div>

      <p className="text-xs text-base-content/50">
        © {new Date().getFullYear()} ScanShort. {t("footer_rights")}
      </p>
    </footer>
  );
};

export default Footer;