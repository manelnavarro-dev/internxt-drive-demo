const navItems = [
  'Inicio',
  'Mi Drive',
  'Compartidos',
  'Papelera',
  'Configuración',
]

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <img
          className="sidebar__logo-image"
          src="/internxt-logo.svg"
          alt="Internxt logo"
        />
      </div>

      <nav className="sidebar__nav">
        {navItems.map((item) => (
          <button
            key={item}
            className={`sidebar__nav-item ${
              item === 'Mi Drive' ? 'sidebar__nav-item--active' : ''
            }`}
            type="button"
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  )
}