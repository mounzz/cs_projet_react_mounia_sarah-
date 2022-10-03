import React, { useEffect, useState } from 'react'
import "./coeur.css"
import LikedItem from './LikedItem'

export default function Coeur({likes, cart, addToCart}) {
    
    const updateCart = (item, quantity) => {
        const itemInCart = cart.find((i) => i.item.id === item.id);
        if (itemInCart) {
            itemInCart.quantity += quantity ? quantity : 1;
            addToCart([...cart]);
        } else {
            const itemToAdd = { item, quantity: quantity ? quantity : 1 };
            addToCart([...cart, itemToAdd]);
        }
    };

    
    
    return (
        <div className='GeneralContainerCoeur'>
        <div className='banner'>Like</div>
        
        <div className='ContainerLikedItems'>
        <div className='captionsLikedContainer'>
        <p className='captions'>product</p>
        <p className='captions'>price</p>
        <p className='captions'>quantity</p>
        <p className='captions'>total</p>
        <p className='captions'>add</p>
        </div>
        {likes.length == 0 && <div className='panierVide'> Vous n'aimez rien.</div>}
        {likes.map((item) => <LikedItem key={item.id} data={item} addToCart={updateCart}/>)}
        </div>
        
        
        </div>
        )
    }
    