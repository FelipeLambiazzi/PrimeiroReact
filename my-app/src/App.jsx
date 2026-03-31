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

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
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
          description: "Ração balanceada para cães adultos de pequeno porte.",
          image:
            "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 2,
          name: "Brinquedo Mordedor",
          price: "24.90",
          description: "Brinquedo resistente para entretenimento e alívio do estresse do pet.",
          image:
            "https://images.unsplash.com/photo-1560743641-3914f2c45636?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 3,
          name: "Caminha Pet",
          price: "129.90",
          description: "Caminha confortável e macia para descanso diário.",
          image:
            "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
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
      description: "",
      image: "",
    });
    setEditingProduct(null);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = formData.name.trim();
    const description = formData.description.trim();
    const price = Number(formData.price);
    const image = formData.image.trim();

    if (!name || !formData.price || !description) {
      showTemporaryMessage("Preencha nome, preço e descrição.");
      return;
    }

    if (Number.isNaN(price) || price <= 0) {
      showTemporaryMessage("Informe um preço válido maior que zero.");
      return;
    }

    const productData = {
      name,
      price: price.toFixed(2),
      description,
      image:
        image ||
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
    };

    if (editingProduct) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === editingProduct.id
            ? { ...product, ...productData }
            : product
        )
      );

      resetForm();
      showTemporaryMessage("Produto atualizado com sucesso.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      ...productData,
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
      description: product.description,
      image: product.image,
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

    if (editingProduct && editingProduct.id === productToDelete.id) {
      resetForm();
    }

    setProductToDelete(null);
    showTemporaryMessage("Produto removido com sucesso.");
  }

  function cancelDelete() {
    setProductToDelete(null);
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

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