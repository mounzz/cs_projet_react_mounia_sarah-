import React, { useState } from 'react';
import './popup.css';
import { FaTimes } from 'react-icons/fa';

function Popup({ data, setCartItem, trigger, setTrigger }) {

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {

        if(quantity > 0){
            setQuantity(quantity - 1);
        }else{
            setQuantity(quantity);
        }
    };

    const addToCart = () => {
        setCartItem(data, quantity);
        setTrigger(false);
    };

    return (trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-button" type="submit" onClick={() => setTrigger(false)}><FaTimes/>
                </button>
                <div className="imgPopup">
                    <img src={data.img} alt=""/>
                </div>
                <div className="textPopup">
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                    <p>Prix de l'article: {data.price}€</p>
                    <div className="size">
                        <label htmlFor="">Choisissez votre taille </label>
                        <select name="size" id="size">
                            <option value={data.size.size1}>{data.size.size1}</option>
                            <option value={data.size.size2}>{data.size.size2}</option>
                            <option value={data.size.size3}>{data.size.size3}</option>
                            <option value={data.size.size4}>{data.size.size4}</option>
                            <option value={data.size.size5}>{data.size.size5}</option>
                        </select>
                    </div>
                    <div className="color">
                        <label htmlFor="">Choisissez votre couleur </label>
                        <select name="color" id="">
                            <option value={data.color.color1}>{data.color.color1}</option>
                            <option value={data.color.color2}>{data.color.color2}</option>
                            <option value={data.color.color3}>{data.color.color3}</option>
                            <option value={data.color.color4}>{data.color.color4}</option>
                            <option value={data.color.color5}>{data.color.color5}</option>
                        </select>
                    </div>
                    <div className="quantite">
                        <label htmlFor="">Quantité</label>
                        <button className='plus' onClick={() => increment()}>+</button>
                        <label className='labelQuantity' htmlFor="">{quantity}</label>
                        <button className='moins' onClick={() => decrement()}>-</button>
                    </div>
                    <button onClick={addToCart} className="ajout">Ajouter dans le panier
                    </button>
                </div>
            </div>
        </div>
    ) : null;
}

export default Popup;