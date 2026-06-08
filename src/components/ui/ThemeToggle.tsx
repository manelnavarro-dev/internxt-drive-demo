type ThemeToggleProps = {
  isDark?: boolean
  onClick?: () => void
}

export function ThemeToggle({ isDark = false, onClick }: ThemeToggleProps) {
  return (
    <button
      className={`theme-toggle ${isDark ? 'theme-toggle--dark' : ''}`}
      type="button"
      onClick={onClick}
      aria-label="Cambiar modo claro u oscuro"
    >

      <span className="theme-toggle__circle">
        {isDark ? '☼' : '☾' }
      </span>
    </button>
  )
}