import { useState } from 'react'
import type { FileItem } from '../../types/file'
import { FileRow } from './FileRow'

type FileListProps = {
  files: FileItem[]
  onDeleteFile: (file: FileItem) => void
}

type SortField = 'name' | 'size' | 'uploadedAt'
type SortDirection = 'asc' | 'desc'

export function FileList({ files, onDeleteFile }: FileListProps) {
  const [sortField, setSortField] = useState<SortField>('uploadedAt')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')

  function handleSort(nextSortField: SortField) {
    if (sortField === nextSortField) {
      setSortDirection((currentDirection) =>
        currentDirection === 'asc' ? 'desc' : 'asc',
      )
      return
    }

    setSortField(nextSortField)

    if (nextSortField === 'name') {
      setSortDirection('asc')
      return
    }

    setSortDirection('desc')
  }

  function getSortIndicator(field: SortField) {
    if (sortField !== field) {
      return ''
    }

    return sortDirection === 'asc' ? '↑' : '↓'
  }

  const sortedFiles = [...files].sort((a, b) => {
    if (sortField === 'name') {
      const result = a.name.localeCompare(b.name)
      return sortDirection === 'asc' ? result : -result
    }

    if (sortField === 'uploadedAt') {
      const result =
        new Date(a.uploadedAt).getTime() - new Date(b.uploadedAt).getTime()

      return sortDirection === 'asc' ? result : -result
    }

    const result = a.size - b.size
    return sortDirection === 'asc' ? result : -result
  })

  return (
    <section className="file-list" aria-label="Lista de archivos">
      <div className="file-list__header">
        <button
          className="file-list__sort-button"
          type="button"
          onClick={() => handleSort('name')}
        >
          Nombre {getSortIndicator('name')}
        </button>

        <button
          className="file-list__sort-button"
          type="button"
          onClick={() => handleSort('size')}
        >
          Tamaño {getSortIndicator('size')}
        </button>

        <button
          className="file-list__sort-button"
          type="button"
          onClick={() => handleSort('uploadedAt')}
        >
          Fecha {getSortIndicator('uploadedAt')}
        </button>

        <span aria-hidden="true"></span>
      </div>

      <div className="file-list__body">
        {sortedFiles.map((file) => (
          <FileRow
            key={file.id}
            file={file}
            onDeleteFile={onDeleteFile}
          />
        ))}
      </div>
    </section>
  )
}