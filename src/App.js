import React, { createContext, useEffect, useState } from 'react'
import "./app.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Components/Header/Header'
import Home from './Components/Content/Home/Home'
import About from './Components/Content/About/About'
import Contact from './Components/Content/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Panier from './Components/Content/Panier/Panier'
import Coeur from './Components/Content/Coeur/Coeur'
import Products from './Components/Content/Product/Products'

export default function App() {

  //state parnier
  const [cart, setCart] = useState([])
  //state panier de like
  const [likedItemCart, setLikedItemCart] = useState([]);


  return (
    <BrowserRouter>
      <Header likedCart={likedItemCart} cart={cart} />
      <Routes>
        <Route index element={<Home cart={cart} likedItemCart={likedItemCart} updateLike={setLikedItemCart} updateCart={setCart} />} />
        <Route path='product' element={<Products cart={cart} likedItemCart={likedItemCart} updateLike={setLikedItemCart} updateCart={setCart} />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='panier' element={<Panier cart={cart} setCart={setCart} />} />
        <Route path='coeur' element={<Coeur likes={likedItemCart} cart={cart} addToCart={setCart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

