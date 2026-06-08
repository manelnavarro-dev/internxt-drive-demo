const navItems = [
  'Inicio',
  'Mi Drive',
  'Compartidos',
  'Papelera',
  'Configuración',
]

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}
      aria-label="Navegación principal"
    >
      <div className="sidebar__top">
        <div className="sidebar__logo">
          <img
            className="sidebar__logo-image"
            src="/internxt-logo.svg"
            alt="Internxt logo"
          />
        </div>

        <button
          className="sidebar__close-button"
          type="button"
          aria-label="Cerrar menú"
          onClick={onClose}
        >
          ×
        </button>
      </div>

      <nav className="sidebar__nav">
        {navItems.map((item) => (
          <button
            key={item}
            className={`sidebar__nav-item ${item === 'Mi Drive' ? 'sidebar__nav-item--active' : ''
              }`}
            type="button"
            onClick={item === 'Mi Drive' ? onClose : undefined}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  )
}