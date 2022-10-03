import React from 'react'

export default function AddCartButton({addCart, data}) {
  return (
    <div className='buttonContainer'>
                    <button onClick={() => addCart(data)} className='buttonProduct'>
                        add to cart
                    </button>
    </div>
  )
}