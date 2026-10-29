"use client"

export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement
    const theme = root.dataset.theme === "light" ? "dark" : "light"
    root.dataset.theme = theme
    try {
      localStorage.setItem("portfolio-theme", theme)
    } catch {
      // The selected theme still works when browser storage is unavailable.
    }
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
    >
      <span className="light-mode-label">Light mode</span>
      <span className="dark-mode-label">Dark mode</span>
    </button>
  )
}
