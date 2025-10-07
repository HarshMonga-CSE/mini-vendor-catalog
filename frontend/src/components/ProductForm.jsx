// frontend/src/components/ProductForm.jsx
import React, { useState } from 'react';
import api from '../api';

export default function ProductForm({ onAdd }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!name || price === '') return alert('Please enter name and price');
    const parsed = Number(price);
    if (isNaN(parsed)) return alert('Price must be a number');
    try {
      const res = await api.post('/api/products', { name, description, price: parsed });
      onAdd(res.data);
      setName(''); setDescription(''); setPrice('');
    } catch (err) {
      console.error(err);
      alert('Failed to add product');
    }
  };

  return (
    <form onSubmit={submit} className="space-y-3">
      <div>
        <label className="block font-medium">Product Name</label>
        <input value={name} onChange={e => setName(e.target.value)} className="w-full border rounded p-2" />
      </div>
      <div>
        <label className="block font-medium">Description</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full border rounded p-2" />
      </div>
      <div>
        <label className="block font-medium">Price</label>
        <input value={price} onChange={e => setPrice(e.target.value)} className="w-full border rounded p-2" />
      </div>
      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Add Product</button>
      </div>
    </form>
  );
}
