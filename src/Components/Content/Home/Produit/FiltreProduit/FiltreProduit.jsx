import React, { useState } from 'react'
import Tags from '../../../Product/Tags'
import Liked from '../../../Product/Liked'
import AddCartButton from '../../../Product/AddCartButton'
import "./filtreProduit.css"

function FiltreProduit({ data, isLiked, setLikedItem, setCartItem }) {
    const [show, setShow] = useState(false);
    const HoverAddLiked = () => {
        setShow(true);
    }
    const HideAddLiked = () => {
        setShow(false);
    }
    const createTag = (tag) => {
        switch (tag) {
            case 'New': return <Tags text='New' color='#66a8a6' />
            case 'Sale': return <Tags text='Sale' color='#e65540' />
            case 'Bestseller': return <Tags text='Bestseller' textColor='white' color='black' />
            default: return null;
        }
    }
    const soldPrice = (tag) => {
        switch (tag) {
            case 'Sale':
                return <p className='price'>
                    <span className='initialPrice'> {data.initialprice}€</span> <span className="salePrice">{data.price}€</span>
                </p>;
            default:
                return <p className='price'>
                    <span>{data.price}€</span>
                </p>;
        }
    };

    return (
        <div className='containerProduct'>
            <div onMouseLeave={() => HideAddLiked()} onMouseEnter={() => HoverAddLiked()} className='imgProductContainer'>
                {createTag(data.tag)}
                <Liked isLiked={isLiked} toggleLike={() => setLikedItem(data)} />
                {show && <AddCartButton data={data} addCart={setCartItem} />}
                <img src={data.img} className="imgProduct" />
            </div>

            <div className='containerTextProduct'>
                <p className='titre'>
                    {data.name}
                </p>
                {soldPrice(data.tag)}

            </div>
        </div>
    )
}

export default FiltreProduit