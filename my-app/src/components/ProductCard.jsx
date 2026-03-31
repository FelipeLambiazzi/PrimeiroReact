function ProductCard({ product, onEdit, onDelete }) {
  const formattedPrice = Number(product.price).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="product-card">
      <div className="product-card__content">
        <h3>{product.name}</h3>

        <p>
          <span>Preço:</span> {formattedPrice}
        </p>

        <p>
          <span>Categoria:</span> {product.category}
        </p>
      </div>

      <div className="product-card__actions">
        <button className="edit-button" onClick={() => onEdit(product)}>
          Editar
        </button>

        <button className="delete-button" onClick={() => onDelete(product)}>
          Remover
        </button>
      </div>
    </article>
  );
}

export default ProductCard;