// import './App.css';

import React from 'react';
import { BrowserRouter as Router,Routes,Route }  from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import User from './pages/User';
import Footer from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // for carousel JS
import { CartProvider } from './context/Cartcontext';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <>
     <CartProvider>
   
    <Router>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
      </Router>
<ToastContainer position="top-right" autoClose={2000} />
       </CartProvider>
      <Footer/>
</>
  )
 }

export default App;
// // import React from 'react';