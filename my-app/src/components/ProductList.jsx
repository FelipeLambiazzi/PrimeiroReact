import ProductCard from "./ProductCard";

function ProductList({ products, onEdit, onDelete }) {
  return (
    <section className="products-section">
      <h2 className="section-title">Lista de produtos</h2>

      <div className="product-list">
        {products.length === 0 ? (
          <p className="empty-message">Nenhum produto encontrado.</p>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              onEdit={() => onEdit(product)}
              onDelete={() => onDelete(product)}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default ProductList;