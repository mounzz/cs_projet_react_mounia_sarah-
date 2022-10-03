import React, { useState } from 'react'
import "./home.css"
import "swiper/css/bundle";
import "./home.css";
import Carrousel from './Carrousel/Carrousel';
import Produit from './Produit/Produit';
import Blog from './Blog/Blog';
import data from "../../../Data.json"


export default function Home({cart, likedItemCart, updateCart, updateLike}) {
    return (
        <div id='home'>
            <Carrousel />
            <Produit cart={cart} likedItemCart={likedItemCart} updateLike={updateLike} updateCart={updateCart}/>
            <Blog />
        </div>
    )
}
