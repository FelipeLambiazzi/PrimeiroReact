function ProductCard({ name, price, image, description, onEdit, onDelete }) {
  const formattedPrice = Number(price).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img className="product-card__image" src={image} alt={name} />
      </div>

      <div className="product-card__content">
        <h3>{name}</h3>

        <p>
          <span>Preço:</span> {formattedPrice}
        </p>

        <p className="product-card__description">{description}</p>
      </div>

      <div className="product-card__actions">
        <button type="button" className="edit-button" onClick={onEdit}>
          Editar
        </button>

        <button type="button" className="delete-button" onClick={onDelete}>
          Remover
        </button>
      </div>
    </article>
  );
}

export default ProductCard;