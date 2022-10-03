import React from 'react'
import "./panier.css"
import Item from './Item'

export default function Panier({cart, setCart}) {

    const updateQuantity = ({ id, quantity: updatedQuantity }) => {
        const updatedCart = cart.map(({ item, quantity }) => {
            if (item.id === id) {
                quantity = updatedQuantity;
                return { item, quantity };
            }
            return { item, quantity };
        }).filter(({ quantity }) => quantity > 0);
        setCart(updatedCart);
    };

    const totalPrice = cart.reduce((acc, curr) => {
        return acc + curr.item.price * curr.quantity;
    }, 0);

    return (
        <div className='GeneralContainerPaniers'>
        <div className='banner'>Panier</div>

        <div className='ContainerItems'>
            <div className='captionsContainer'>
                <p className='captions'>product</p>
                <p className='captions'>price</p>
                <p className='captions'>quantity</p>
                <p className='captions'>total</p>
            </div>
            {cart.map((item) => <Item key={item.item.id} data={item.item} quantity={item.quantity}
                                      updateQuantity={updateQuantity}/>)}
            <div className='totalPrice'>
            <span className='txtPrixTotal'>Prix total à payer: </span> <span className='PrixTotal'>{totalPrice} €</span>
            </div>
        </div>
        </div>
    )
}