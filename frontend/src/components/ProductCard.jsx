// frontend/src/components/ProductCard.jsx
import React, { useState } from 'react';
import api from '../api';

export default function ProductCard({ product, onDelete }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm('Delete this product?')) return;
    setLoading(true);
    try {
      await api.delete(`/api/products/${product._id}`);
      onDelete(product._id);
    } catch (err) {
      console.error(err);
      alert('Failed to delete product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded p-4 flex justify-between items-start">
      <div>
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="mt-2 font-medium">₹ {product.price}</p>
      </div>
      <div>
        <button onClick={handleDelete} disabled={loading} className="bg-red-500 text-white px-3 py-1 rounded">
          {loading ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
}
