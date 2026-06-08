import type { FileItem } from '../../types/file'
import { FileCard } from './FileCard'

type FileGridProps = {
  files: FileItem[]
  onDeleteFile: (file: FileItem) => void
}

export function FileGrid({ files, onDeleteFile }: FileGridProps) {
  return (
    <section className="file-grid" aria-label="Archivos en vista de cuadrícula">
      {files.map((file) => (
        <FileCard
          key={file.id}
          file={file}
          onDeleteFile={onDeleteFile}
        />
      ))}
    </section>
  )
}