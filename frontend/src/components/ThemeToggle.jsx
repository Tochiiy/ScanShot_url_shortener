import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 rounded-lg border border-base-300 flex items-center justify-center hover:bg-base-200 transition-colors"
      title="Toggle theme"
    >
      {theme === "light" ? (
        <FiMoon size={16} className="text-base-content/70" />
      ) : (
        <FiSun size={16} className="text-warning" />
      )}
    </button>
  );
};

export default ThemeToggle;