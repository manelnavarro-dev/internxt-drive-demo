import type { FileItem } from '../../types/file'
import { FileCard } from './FileCard'

type FileGridProps = {
  files: FileItem[]
}

export function FileGrid({ files }: FileGridProps) {
  return (
    <section className="file-grid" aria-label="Archivos en vista de cuadrícula">
      {files.map((file) => (
        <FileCard key={file.id} file={file} />
      ))}
    </section>
  )
}