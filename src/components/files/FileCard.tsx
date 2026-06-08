import type { FileItem } from '../../types/file'
import { formatFileSize } from '../../utils/formatFileSize'
import { getFileIconType } from '../../utils/getFileIconType'
import { FileIcon } from './FileIcon'

type FileCardProps = {
    file: FileItem
}

export function FileCard({ file }: FileCardProps) {
    const iconType = getFileIconType(file)

    const uploadedDate = file.uploadedAt

    return (
        <article className="file-card">
            <div className="file-card__top">
                <FileIcon type={iconType} />

                <button className="file-card__action" type="button" aria-label="Eliminar archivo">
                    ⋯
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