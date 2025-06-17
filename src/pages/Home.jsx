

import React, { useEffect, useState } from 'react';
import { SliderData } from "../data/product";
import './Home.css';
import { discoutProducts } from "../data/product";
import { FaStar, FaPlus } from "react-icons/fa";
import { FaShippingFast, FaShieldAlt, FaLock, FaUndo } from "react-icons/fa"; 
import { products } from "../data/product"; 

import { CartProvider } from '../context/Cartcontext';
import { useCart } from "../context/Cartcontext";

import { toast } from "react-toastify";



function Home() {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const { addToCart } = useCart();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % length);
    }, 3000);
    return () => clearInterval(interval);
  }, [length]);

  // condition for new arriavl
  const { title, desc, cover } = SliderData[current];
  const mobileProducts = products.filter((item) => item.category === "mobile").slice(0, 3);
const wirelessProducts = products.filter((item) => item.category === "wireless").slice(0, 2);

const newArrivalProducts = [...mobileProducts, ...wirelessProducts];
//  condition for best sales
const bestSales = products.filter(item => item.category === "sofa").slice(0, 6); // you can show only 6


  return (
    <>
    <div className="slider-section hero-slider">
      <div className="slider-hero">
        <div className="slider-text">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="slider-image">
          <img src={cover} alt={title} />
        </div>
      </div>
</div>

{/* card section */}
 <div className="feature-card-section">
  <div className="feature-card">
    <FaShippingFast className="feature-icon" />
    <h3>Free Shipping</h3>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
  <div className="feature-card card-blue">
    <FaShieldAlt className="feature-icon" />
    <h3>Safe Payment</h3>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
  <div className="feature-card card-green">
    <FaLock className="feature-icon" />
    <h3>Secure Payment</h3>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
  <div className="feature-card card-red">
    <FaUndo className="feature-icon" />
    <h3>Back Guarantee</h3>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
    </div>
    
    {/* big discount section starts here */}
    <h2 className="section-title">Big Discounts</h2>
<div className="discount-grid">
  {discoutProducts.slice(0, 6).map((item) => (
    <div className="discount-card" key={item.id}>
      <span className="discount-badge">-{item.discount}%</span>
      <img src={item.imgUrl} alt={item.productName} />
      <h4>{item.productName}</h4>
      <div className="rating">
        {[...Array(Math.round(item.avgRating))].map((_, index) => (
          <FaStar key={index} className="star-icon" />
        ))}
      </div>
      <div className="price-add">
        <span className="price">₹{item.price}</span>
        <button className="add-btn"  onClick={() => {
    addToCart(item);
    toast.success(`${item.productName} added to cart`);
  }}>
  <FaPlus />
</button>
      </div>
    </div>
  ))}
</div>
    {/* big discount section ends here */}

    {/* new arrival section starts here */}
    <h2 className="section-title">New Arrivals</h2>
<div className="discount-grid">
  {newArrivalProducts.map((item) => (
    <div className="discount-card" key={item.id}>
      <img src={item.imgUrl} alt={item.productName} />
      <h4>{item.productName}</h4>
      <div className="rating">
        {[...Array(Math.round(item.avgRating || 0))].map((_, index) => (
          <FaStar key={index} className="star-icon" />
        ))}
      </div>
      <div className="price-add">
        <span className="price">₹{item.price}</span>
        <button className="add-btn"  onClick={() => {
    addToCart(item);
    toast.success(`${item.productName} added to cart`);
  }}>
  <FaPlus />
</button>
        {/* <button className="add-btn"><FaPlus /></button> */}
      </div>
    </div>
  ))}
</div>
    {/* new arrival section ends here */}

    {/* best sales section starts here */}
   <section className="best-sales-section">
  <h2 className="section-title">Best Sales</h2>
  <div className="product-grid">
    {bestSales.map(product => (
      <div className="product-card" key={product.id}>
        <img src={product.imgUrl} alt={product.productName} className="product-img" />
        <h3>{product.productName}</h3>
        <p className="price">₹{product.price}</p>
        <p className="rating">⭐ {product.avgRating}</p>
        <button
          className="add-btn"
          onClick={() => {
            addToCart(product);
            toast.success(`${product.productName} added to cart`);
          }}
        >
          <FaPlus />
        </button>
      </div>
    ))}
  </div>
</section>

    {/* best sales section ends here */}

    </>
  );
}

export default Home;

