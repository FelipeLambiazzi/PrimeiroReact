function ConfirmModal({ productName, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Confirmar remoção</h3>
        <p>
          Deseja remover o produto <strong>{productName}</strong>?
        </p>

        <div className="modal-actions">
          <button
            type="button"
            className="modal-button secondary-button"
            onClick={onCancel}
          >
            Cancelar
          </button>

          <button
            type="button"
            className="modal-button modal-delete-button"
            onClick={onConfirm}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;