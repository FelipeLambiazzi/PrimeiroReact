import { useEffect, useMemo, useState } from "react";
import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import AlertMessage from "./components/AlertMessage";
import Loading from "./components/Loading";
import ConfirmModal from "./components/ConfirmModal";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      const initialProducts = [
        {
          id: 1,
          name: "Ração Premium",
          price: "89.90",
          category: "Alimentação",
        },
        {
          id: 2,
          name: "Brinquedo Mordedor",
          price: "24.90",
          category: "Brinquedos",
        },
        {
          id: 3,
          name: "Caminha Pet",
          price: "129.90",
          category: "Acessórios",
        },
      ];

      setProducts(initialProducts);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  function showTemporaryMessage(text) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function resetForm() {
    setFormData({
      name: "",
      price: "",
      category: "",
    });
    setEditingProduct(null);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = formData.name.trim();
    const category = formData.category.trim();
    const price = Number(formData.price);

    if (!name || !category || !formData.price) {
      showTemporaryMessage("Preencha todos os campos.");
      return;
    }

    if (Number.isNaN(price) || price <= 0) {
      showTemporaryMessage("Informe um preço válido maior que zero.");
      return;
    }

    if (editingProduct) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === editingProduct.id
            ? {
                ...product,
                name,
                price: price.toFixed(2),
                category,
              }
            : product
        )
      );

      resetForm();
      showTemporaryMessage("Produto atualizado com sucesso.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      price: price.toFixed(2),
      category,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    resetForm();
    showTemporaryMessage("Produto adicionado com sucesso.");
  }

  function handleEdit(product) {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
    });
  }

  function askDelete(product) {
    setProductToDelete(product);
  }

  function confirmDelete() {
    if (!productToDelete) return;

    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productToDelete.id)
    );

    setProductToDelete(null);

    if (
      editingProduct &&
      productToDelete &&
      editingProduct.id === productToDelete.id
    ) {
      resetForm();
    }

    showTemporaryMessage("Produto removido com sucesso.");
  }

  function cancelDelete() {
    setProductToDelete(null);
  }

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map((p) => p.category))];
    return uniqueCategories.sort((a, b) => a.localeCompare(b));
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter((product) =>
        categoryFilter ? product.category === categoryFilter : true
      );
  }, [products, search, categoryFilter]);

  return (
    <div className="app">
      <div className="container">
        <h1>Cadastro de Produtos</h1>
        <p className="subtitle">
          Projeto em React com useState, useEffect, props e componentização.
        </p>

        {message && <AlertMessage message={message} />}

        <ProductForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          editingProduct={editingProduct}
          onCancelEdit={resetForm}
        />

        <div className="filters">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar produto pelo nome"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <select
            className="category-select"
            value={categoryFilter}
            onChange={(event) => setCategoryFilter(event.target.value)}
          >
            <option value="">Todas as categorias</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <ProductList
            products={filteredProducts}
            onEdit={handleEdit}
            onDelete={askDelete}
          />
        )}

        {productToDelete && (
          <ConfirmModal
            productName={productToDelete.name}
            onConfirm={confirmDelete}
            onCancel={cancelDelete}
          />
        )}
      </div>
    </div>
  );
}

export default App;