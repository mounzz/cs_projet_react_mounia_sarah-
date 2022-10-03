import React, { useEffect, useState } from 'react'
import "./LikedItem.css"

export default function LikedItem({data, addToCart}) {
    
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleCounterUpdate = (e) => {
      setQuantity(e.target.value);
  };

  useEffect(() => {
      setTotalPrice(quantity * data.price);
  }, [quantity]);


    return (
    <div className='containerLikedItem'>

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
      <input onChange={handleCounterUpdate} className='quantity' type="number" defaultValue={1} min={0} />
    </div>
    <div className='totalPriceItem'>
      {totalPrice}€
    </div>
    <div className='AjoutPanier'>
      <button className="AjoutPanierBouton" onClick={() => addToCart(data, +quantity)}>Add</button>
    </div>
    </div>
  )
}
