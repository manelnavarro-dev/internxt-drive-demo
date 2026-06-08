import { ThemeToggle } from '../ui/ThemeToggle'

type TopbarProps = {
  isDarkMode: boolean
  onToggleTheme: () => void
  searchTerm: string
  onSearchChange: (value: string) => void
}

export function Topbar({
  isDarkMode,
  onToggleTheme,
  searchTerm,
  onSearchChange,
}: TopbarProps) {
  return (
    <header className="topbar">
      <button className="topbar__menu-button" type="button" aria-label="Abrir menú">
        ☰
      </button>

      <div className="topbar__search">
        <input
          type="text"
          placeholder="Buscar archivos..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <div className="topbar__actions">
        <button className="topbar__upload-button" type="button">
          Subir archivo
        </button>

        <ThemeToggle isDark={isDarkMode} onClick={onToggleTheme} />

        <div className="topbar__avatar">
          <button className="topbar__avatar-button" type="button">
            <img src="/avatar.jpg" alt="Avatar de usuario" />
          </button>

          <div className="topbar__dropdown">
            <button type="button">Perfil</button>
            <button type="button">Cerrar sesión</button>
          </div>
        </div>
      </div>
    </header>
  )
}