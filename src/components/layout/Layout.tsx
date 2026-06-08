import { useRef, useState, type ChangeEvent } from 'react'
import { initialFiles } from '../../data/initialFiles'
import type { FileItem } from '../../types/file'
import { FileGrid } from '../files/FileGrid'
import { FileList } from '../files/FileList'
import { ConfirmModal } from '../ui/ConfirmModal'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

type ViewMode = 'grid' | 'list'

export function Layout() {
  const [files, setFiles] = useState<FileItem[]>(initialFiles)
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [fileToDelete, setFileToDelete] = useState<FileItem | null>(null)

  const fileInputRef = useRef<HTMLInputElement | null>(null)

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

  function handleOpenSidebar() {
    setIsSidebarOpen(true)
  }

  function handleCloseSidebar() {
    setIsSidebarOpen(false)
  }

  function handleUploadClick() {
    fileInputRef.current?.click()
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedFiles = event.target.files

    if (!selectedFiles) {
      return
    }

    const newFiles: FileItem[] = Array.from(selectedFiles).map((file, index) => ({
      id: `${Date.now()}-${index}-${file.name}`,
      name: file.name,
      size: file.size,
      type: file.type || 'unknown',
      uploadedAt: new Date().toISOString(),
      isFolder: false,
    }))

    setFiles((currentFiles) => [...newFiles, ...currentFiles])

    event.target.value = ''
  }

  function handleAskDelete(file: FileItem) {
    setFileToDelete(file)
  }

  function handleCancelDelete() {
    setFileToDelete(null)
  }

  function handleConfirmDelete() {
    if (!fileToDelete) {
      return
    }

    setFiles((currentFiles) =>
      currentFiles.filter((file) => file.id !== fileToDelete.id),
    )

    setFileToDelete(null)
  }

  return (
    <div className={`app-layout ${isDarkMode ? 'app-layout--dark' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      {isSidebarOpen && (
        <button
          className="sidebar-backdrop"
          type="button"
          aria-label="Cerrar menú"
          onClick={handleCloseSidebar}
        />
      )}

      <div className="app-layout__content">
        <Topbar
          isDarkMode={isDarkMode}
          onToggleTheme={handleToggleTheme}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onUploadClick={handleUploadClick}
          onMenuClick={handleOpenSidebar}
        />

        <input
          ref={fileInputRef}
          className="file-input"
          type="file"
          multiple
          onChange={handleFileChange}
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
            <FileGrid files={filteredFiles} onDeleteFile={handleAskDelete} />
          ) : (
            <FileList files={filteredFiles} onDeleteFile={handleAskDelete} />
          )}
        </main>
      </div>

      {fileToDelete && (
        <ConfirmModal
          fileName={fileToDelete.name}
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  )
}