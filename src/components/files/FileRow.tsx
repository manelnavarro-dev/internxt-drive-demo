import type { FileItem } from '../../types/file'
import { formatFileSize } from '../../utils/formatFileSize'
import { getFileIconType } from '../../utils/getFileIconType'
import { FileIcon } from './FileIcon'

type FileRowProps = {
  file: FileItem
  onDeleteFile: (file: FileItem) => void
}

export function FileRow({ file, onDeleteFile }: FileRowProps) {
  const iconType = getFileIconType(file)

  return (
    <article className="file-row">
      <div className="file-row__main">
        <FileIcon type={iconType} />

        <h3 className="file-row__name">{file.name}</h3>
      </div>

      <span className="file-row__size">
        {file.isFolder ? 'Carpeta' : formatFileSize(file.size)}
      </span>

      <span className="file-row__date">{file.uploadedAt}</span>

      <button
        className="file-row__action"
        type="button"
        aria-label={`Eliminar ${file.name}`}
        onClick={() => onDeleteFile(file)}
      >
        <span className="file-row__delete-icon" />
      </button>
    </article>
  )
}