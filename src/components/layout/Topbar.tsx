import { useEffect, useRef, useState } from 'react'
import { ThemeToggle } from '../ui/ThemeToggle'

type TopbarProps = {
  isDarkMode: boolean
  onToggleTheme: () => void
  searchTerm: string
  onSearchChange: (value: string) => void
  onUploadClick: () => void
  onMenuClick: () => void
}

export function Topbar({
  isDarkMode,
  onToggleTheme,
  searchTerm,
  onSearchChange,
  onUploadClick,
  onMenuClick,
}: TopbarProps) {
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false)

  const avatarMenuRef = useRef<HTMLDivElement | null>(null)

  function handleToggleAvatarMenu() {
    setIsAvatarMenuOpen((currentValue) => !currentValue)
  }

  function handleCloseAvatarMenu() {
    setIsAvatarMenuOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        avatarMenuRef.current &&
        !avatarMenuRef.current.contains(event.target as Node)
      ) {
        handleCloseAvatarMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="topbar">
      <button
        className="topbar__menu-button"
        type="button"
        aria-label="Abrir menú"
        onClick={onMenuClick}
      >
        <span className="topbar__menu-icon" aria-hidden="true"></span>
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
        <button
          className="topbar__upload-button"
          type="button"
          onClick={onUploadClick}
        >
          Subir archivo
        </button>

        <ThemeToggle isDark={isDarkMode} onClick={onToggleTheme} />

        <div className="topbar__avatar" ref={avatarMenuRef}>
          <button
            className="topbar__avatar-button"
            type="button"
            aria-label="Abrir menú de usuario"
            aria-expanded={isAvatarMenuOpen}
            onClick={handleToggleAvatarMenu}
          >
            <img src="/avatar.jpg" alt="Avatar de usuario" />
          </button>

          {isAvatarMenuOpen && (
            <div className="topbar__dropdown">
              <button type="button" onClick={handleCloseAvatarMenu}>
                Perfil
              </button>

              <button type="button" onClick={handleCloseAvatarMenu}>
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}