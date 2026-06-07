import { ThemeToggle } from '../ui/ThemeToggle'

export function Topbar() {
  return (
    <header className="topbar">
      <button className="topbar__menu-button" type="button" aria-label="Abrir menú">
        ☰
      </button>

      <div className="topbar__search">
        <input type="text" placeholder="Buscar archivos..." />
      </div>

      <div className="topbar__actions">
        <button className="topbar__upload-button" type="button">
          Subir archivo
        </button>

        <ThemeToggle />

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