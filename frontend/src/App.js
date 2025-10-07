// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import api from './api';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await api.get('/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Failed to fetch products', err);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleAdd = (newProduct) => {
    // put newest first
    setProducts(prev => [newProduct, ...prev]);
  };

  const handleDelete = (id) => {
    setProducts(prev => prev.filter(p => p._id !== id));
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Mini Vendor Catalog Manager</h1>
        <ProductForm onAdd={handleAdd} />
        <hr className="my-4" />
        <ProductList products={products} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;


