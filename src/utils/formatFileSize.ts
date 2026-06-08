export function formatFileSize(size: number): string {
  if (size === 0) {
    return '—';
  }

  const units = ['B', 'KB', 'MB', 'GB'];
  let formattedSize = size;
  let unitIndex = 0;

  while (formattedSize >= 1024 && unitIndex < units.length - 1) {
    formattedSize = formattedSize / 1024;
    unitIndex++;
  }

  return `${formattedSize.toFixed(1)} ${units[unitIndex]}`;
}