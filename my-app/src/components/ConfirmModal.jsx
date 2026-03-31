function ConfirmModal({ productName, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Confirmar remoção</h3>
        <p>
          Deseja remover o produto <strong>{productName}</strong>?
        </p>

        <div className="modal-actions">
          <button className="secondary-button" onClick={onCancel}>
            Cancelar
          </button>

          <button className="delete-button" onClick={onConfirm}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;