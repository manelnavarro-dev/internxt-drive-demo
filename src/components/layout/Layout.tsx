import { useState } from 'react'
import { initialFiles } from '../../data/initialFiles'
import type { FileItem } from '../../types/file'
import { FileGrid } from '../files/FileGrid'
import { FileList } from '../files/FileList'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

type ViewMode = 'grid' | 'list'

export function Layout() {
  const [files] = useState<FileItem[]>(initialFiles)
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [isDarkMode, setIsDarkMode] = useState(false)

  const isGridView = viewMode === 'grid'

  const normalizedSearchTerm = searchTerm.trim().toLowerCase()

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(normalizedSearchTerm),
  )

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
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
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

          {filteredFiles.length === 0 ? (
            <div className="empty-state">
              <p>No se encontraron archivos.</p>
            </div>
          ) : isGridView ? (
            <FileGrid files={filteredFiles} />
          ) : (
            <FileList files={filteredFiles} />
          )}
        </main>
      </div>
    </div>
  )
}