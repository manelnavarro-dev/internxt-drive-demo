import type { FileIconType } from '../../types/file'

type FileIconProps = {
  type: FileIconType
}

const icons: Record<FileIconType, string> = {
  folder: '📁',
  image: '🖼️',
  pdf: '📕',
  document: '📄',
  spreadsheet: '📊',
  presentation: '🌅',
  video: '🎬',
  audio: '🎧',
  archive: '🗜️',
  other: '📦',
}

export function FileIcon({ type }: FileIconProps) {
  return (
    <span className={`file-icon file-icon--${type}`} aria-hidden="true">
      {icons[type]}
    </span>
  )
}