import type { FileItem } from '../../types/file'
import { formatFileSize } from '../../utils/formatFileSize'
import { getFileIconType } from '../../utils/getFileIconType'
import { FileIcon } from './FileIcon'

type FileCardProps = {
    file: FileItem
    onDeleteFile: (file: FileItem) => void
}

export function FileCard({ file, onDeleteFile }: FileCardProps) {
    const iconType = getFileIconType(file)

    const uploadedDate = file.uploadedAt

    return (
        <article className="file-card">
            <div className="file-card__top">
                <FileIcon type={iconType} />

                <button
                    className="file-card__action"
                    type="button"
                    aria-label={`Eliminar ${file.name}`}
                    onClick={() => onDeleteFile(file)}
                >
                    <span className="file-card__delete-icon" />
                </button>
            </div>

            <div className="file-card__content">
                <h3 className="file-card__name">{file.name}</h3>

                <div className="file-card__meta">
                    <span>{file.isFolder ? 'Carpeta' : formatFileSize(file.size)}</span>
                    <span>{uploadedDate}</span>
                </div>
            </div>
        </article>
    )
}