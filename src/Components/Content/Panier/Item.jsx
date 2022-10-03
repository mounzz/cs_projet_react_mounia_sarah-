import React, { useState } from 'react'
import "./Item.css"

export default function Item({data, quantity, updateQuantity }) {

  const handleCounterUpdate = (e) => {
    updateQuantity({ id: data.id, quantity: +e.target.value });
};

const totalPrice = quantity * data.price;

  return (
    <div className='containerItem'>

    <div className='containerItemImg'>
    <img src={data.img} className='itemImg'/>
    </div>
    <div className='itemName'>
        {data.name}
    </div>
    <div className='itemPrice'>
        {data.price}€
    </div>
    <div className='quantityContainer'>
      <input onChange={handleCounterUpdate} className='quantity' type="number" defaultValue={quantity} min={0} />
    </div>
    <div className='totalPriceItem'>
      {totalPrice}€
    </div>
    
    </div>
  )
}
