
function ThemeButton({ darkMode, setDarkMode }) {

  return (
    <button
      className="theme-button"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "☀️ Modo claro" : "🌙 Modo oscuro"}
    </button>
  );
}

export default ThemeButton;
