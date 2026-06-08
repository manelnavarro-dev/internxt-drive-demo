import type { FileIconType, FileItem } from '../types/file';

export function getFileIconType(file: FileItem): FileIconType {
  const fileType = file.type.toLowerCase();
  const fileName = file.name.toLowerCase();

  if (file.isFolder) return 'folder';
  if (fileType.startsWith('image/')) return 'image';
  if (fileType === 'application/pdf') return 'pdf';
  if (fileType.startsWith('video/')) return 'video';
  if (fileType.startsWith('audio/')) return 'audio';

  if (fileType.includes('word') || fileName.endsWith('.doc') || fileName.endsWith('.docx')) {
    return 'document';
  }

  if (fileType.includes('spreadsheet') || fileName.endsWith('.xls') || fileName.endsWith('.xlsx')) {
    return 'spreadsheet';
  }

  if (fileType.includes('presentation') || fileName.endsWith('.ppt') || fileName.endsWith('.pptx')) {
    return 'presentation';
  }

  if (fileType.includes('zip') || fileType.includes('rar') || fileName.endsWith('.zip') || fileName.endsWith('.rar')) {
    return 'archive';
  }

  return 'other';
}