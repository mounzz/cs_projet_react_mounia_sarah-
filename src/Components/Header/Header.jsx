import React, { useEffect, useState } from 'react'
import "./header.css"
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png"
import { FaHeart, FaShoppingBag } from "react-icons/fa"
import DropdownMenu from './Dropdown/DropdownMenu';
import DropModel from './Dropdown/DropModel';

export default function Header({ cart, likedCart }) {
    const [buttonDropdown, setButtonDropdown] = useState(false)

    let close = () => {
        setButtonDropdown((prevstate) => !prevstate)
    }
    const totalPrice = cart.reduce((acc, curr) => {
        return acc + curr.item.price * curr.quantity;
    }, 0);
    return (
        <div id='top'>
            <nav>
                <div className='logo'>
                    <a href="#">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <ul>
                    <li>
                        <NavLink activeClassName="active" className='navLink' to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className='navLink' to="/product">Product</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className='navLink' to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className='navLink' to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <div className="client">
                    <div className="coeur">
                        <NavLink activeClassName="active" className='navLink' to="/coeur">
                            <FaHeart className='navLink joliCoeur' />
                        </NavLink>
                        <div className='nbCoeur'>{likedCart.length}</div>
                    </div>
                    <div className="panier" onClick={() => close()}>
                        <FaShoppingBag className='navLink joliPanier' />
                        <div className='nbPanier'>{cart.length}</div>
                    </div>
                </div>
            </nav>
            <DropdownMenu trigger={buttonDropdown} cart={cart}>
                <div className="panierDrop">
                {cart.length == 0 && <div className='panierVideDd'> Le panier est vide.</div>}
                <div className="produitChoix">
                {cart.map((item) => {
                    return (
                        <DropModel data={item.item} quantity={item.quantity} />
                    )
                })}
                </div>
                <p className='prixTot'>Total: {totalPrice},00€</p>
                </div>
            </DropdownMenu>
        </div>
    )
}
