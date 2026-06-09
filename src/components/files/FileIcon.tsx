import type { FileIconType } from '../../types/file'

import folderIcon from '../../assets/icons/folder-icon.png'
import imageIcon from '../../assets/icons/image-icon.png'
import pdfIcon from '../../assets/icons/pdf-icon.png'
import documentIcon from '../../assets/icons/document-icon.png'
import spreadsheetIcon from '../../assets/icons/spreadsheet-icon.png'
import presentationIcon from '../../assets/icons/presentation-icon.png'
import videoIcon from '../../assets/icons/video-icon.png'
import audioIcon from '../../assets/icons/audio-icon.png'
import archiveIcon from '../../assets/icons/archive-icon.png'
import fileIcon from '../../assets/icons/file-icon.png'

type FileIconProps = {
  type: FileIconType
}

const icons: Record<FileIconType, string> = {
  folder: folderIcon,
  image: imageIcon,
  pdf: pdfIcon,
  document: documentIcon,
  spreadsheet: spreadsheetIcon,
  presentation: presentationIcon,
  video: videoIcon,
  audio: audioIcon,
  archive: archiveIcon,
  other: fileIcon,
}

export function FileIcon({ type }: FileIconProps) {
  return (
    <span className="file-icon" aria-hidden="true">
      <img
        className="file-icon__image"
        src={icons[type]}
        alt=""
      />
    </span>
  )
}