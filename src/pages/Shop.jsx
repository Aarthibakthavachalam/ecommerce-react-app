import React, { useState } from 'react';
import { products } from '../data/product';
import './Shop.css';
import { useCart } from '../context/Cartcontext';
import { toast } from 'react-toastify';

import sofaSlide from "../Images/hero-img.png";



function Shop() {

  const { addToCart } = useCart();

  // State for search and category filter
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Unique category list
  const categories = ['all', ...new Set(products.map(p => p.category))];

  // Filter logic
  const filteredProducts = products.filter(item => {
    const matchesSearch = item.productName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="shop-container">
      <div className="shop-banner">
  <img src={sofaSlide} alt="Shop Banner" className="banner-img" />
</div>
      <h2>Shop Our Products</h2>
     {/* search bar */}
      <div className="shop-filters">
  <input
    type="text"
    placeholder="Search products..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="search-input"
  />

  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="category-select"
  >
    {categories.map((cat, idx) => (
      <option value={cat} key={idx}>{cat.toUpperCase()}</option>
    ))}
  </select>
</div>

      <div className="product-grid">
        {filteredProducts.length === 0 ? (
     <div className="no-product-container">
    <p className="no-product-msg"> THIS PRODUCT NOT FOUND</p>
  </div>
  ) :
        (filteredProducts.map((item)  => (
          <div className="product-card" key={item.id}>
            <img src={item.imgUrl} alt={item.productName} />
            <h3>{item.productName}</h3>
            <p>₹{item.price}</p>
            <p>{item.shortDesc}</p>
            <p>⭐⭐⭐⭐ {item.avgRating}</p>
           <button onClick={() => {
  addToCart(item);
  toast.success(`${item.productName} added to cart`);
}}>Add to Cart</button>
          </div>
        ))
        )}
      </div>
    </div>
  );
}       
export default Shop;
// // import React from 'react';