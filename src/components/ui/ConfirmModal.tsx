type ConfirmModalProps = {
  fileName: string
  onCancel: () => void
  onConfirm: () => void
}

export function ConfirmModal({
  fileName,
  onCancel,
  onConfirm,
}: ConfirmModalProps) {
  return (
    <div className="confirm-modal-backdrop">
      <div className="confirm-modal" role="dialog" aria-modal="true">
        <h2 className="confirm-modal__title">Eliminar archivo</h2>

        <p className="confirm-modal__text">
          ¿Seguro que quieres eliminar este archivo?
        </p>

        <p className="confirm-modal__file-name">{fileName}</p>

        <div className="confirm-modal__actions">
          <button
            className="confirm-modal__cancel-button"
            type="button"
            onClick={onCancel}
          >
            Cancelar
          </button>

          <button
            className="confirm-modal__delete-button"
            type="button"
            onClick={onConfirm}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}