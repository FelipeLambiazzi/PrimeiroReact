function ProductForm({
  formData,
  onChange,
  onSubmit,
  editingProduct,
  onCancelEdit,
}) {
  return (
    <form className="product-form" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nome do produto</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Ex: Mouse Gamer"
          value={formData.name}
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Preço</label>
        <input
          id="price"
          type="number"
          name="price"
          placeholder="Ex: 199.90"
          value={formData.price}
          onChange={onChange}
          min="0"
          step="0.01"
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Categoria</label>
        <input
          id="category"
          type="text"
          name="category"
          placeholder="Ex: Periféricos"
          value={formData.category}
          onChange={onChange}
        />
      </div>

      <button type="submit">
        {editingProduct ? "Salvar alteração" : "Adicionar produto"}
      </button>

      {editingProduct && (
        <button
          type="button"
          className="secondary-button"
          onClick={onCancelEdit}
        >
          Cancelar edição
        </button>
      )}
    </form>
  );
}

export default ProductForm;