import type { FileItem } from '../../types/file'
import { FileRow } from './FileRow'

type FileListProps = {
  files: FileItem[]
}

export function FileList({ files }: FileListProps) {
  return (
    <section className="file-list" aria-label="Archivos en vista de lista">
      <div className="file-list__header">
        <span>Nombre</span>
        <span>Tamaño</span>
        <span>Fecha</span>
        <span></span>
      </div>

      <div className="file-list__rows">
        {files.map((file) => (
          <FileRow key={file.id} file={file} />
        ))}
      </div>
    </section>
  )
}