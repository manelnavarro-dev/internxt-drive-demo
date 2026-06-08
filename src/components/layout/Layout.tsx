import { useState } from 'react'
import { initialFiles } from '../../data/initialFiles'
import { FileGrid } from '../files/FileGrid'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

type ViewMode = 'grid' | 'list'

export function Layout() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [isDarkMode, setIsDarkMode] = useState(false)

  const isGridView = viewMode === 'grid'

  function handleToggleView() {
    setViewMode(isGridView ? 'list' : 'grid')
  }

  function handleToggleTheme() {
    setIsDarkMode((currentMode) => !currentMode)
  }

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="app-layout__content">
        <Topbar
          isDarkMode={isDarkMode}
          onToggleTheme={handleToggleTheme}
        />

        <main className="main-content">
          <div className="main-content__header">
            <div>
              <p className="main-content__eyebrow">Mi Drive</p>
              <h1>Archivos</h1>
            </div>

            <button
              className="main-content__view-button"
              type="button"
              onClick={handleToggleView}
              aria-label={isGridView ? 'Cambiar a vista lista' : 'Cambiar a vista grid'}
              title={isGridView ? 'Cambiar a vista lista' : 'Cambiar a vista grid'}
            >
              <img
                src={isGridView ? '/view_list.svg' : '/view_grid.svg'}
                alt=""
              />
            </button>
          </div>

          {isGridView ? (
            <FileGrid files={initialFiles} />
          ) : (
            <section className="files-placeholder">
              <p>Aquí aparecerá la vista lista en la siguiente fase.</p>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}