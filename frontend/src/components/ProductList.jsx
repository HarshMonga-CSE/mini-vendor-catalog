// frontend/src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, onDelete }) {
  if (!products || products.length === 0) {
    return <p className="text-gray-600">No products yet. Add one above.</p>;
  }
  return (
    <div className="space-y-3">
      {products.map(p => <ProductCard key={p._id} product={p} onDelete={onDelete} />)}
    </div>
  );
}
