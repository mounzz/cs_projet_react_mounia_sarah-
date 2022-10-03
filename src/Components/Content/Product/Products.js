import React, { useEffect, useState } from 'react'
import data from "../../../Data.json"
import Product from './Product'
import "./Products.css"

function Products({cart, likedItemCart, updateCart, updateLike}) {

    const [searchText, setSearchText] = useState('');
    const [products, setProducts] = useState(data);
    const [category, setCategory] = useState('');

    const filterProducts = () => {
        if (!category) return setProducts(data);
        setProducts(data.filter((produit) => produit.categorie === category));
    };

    const filterProductsBySearch = (text) => {
        if (!text) {
            filterProducts();
            return;
        }
        setProducts(products.filter((product) => product.name.toLowerCase().includes(text.toLowerCase())));
    };

    const updateLikeItems = (item) => {
        const alreadyLiked = likedItemCart.find(({ id }) => item.id === id);
        if (alreadyLiked) {
            updateLike(likedItemCart.filter(({ id }) => item.id !== id));
        } else {
            updateLike([...likedItemCart, item]);
        }
    };

    const updateCartItems = (item, quantity) => {
        const itemInCart = cart.find((i) => i.item.id === item.id);
        if (itemInCart) {
            itemInCart.quantity += quantity ? quantity : 1;
            updateCart([...cart]);
        } else {
            const itemToAdd = { item, quantity: quantity ? quantity : 1 };
            updateCart([...cart, itemToAdd]);
        }
    };

    useEffect(() => {
        filterProducts();
    }, [category]);

    useEffect(() => {
        filterProductsBySearch(searchText);
    }, [searchText]);

    return (
        <div className="generalContainer">
            <div className='banner'>Product</div>
            <div className='saleCount'>
            Le nombre de produit en solde est de: {products.filter((product) => product.tag === 'Sale').length}
            </div>

        <div className='ContainerLists'>
            <div className='FilterList'>
                <div className='cat'>
                    <div className='catTitre'>
                    <h5>Categories</h5>
                    </div>
                    <div className='pCat'>
                    <p onClick={() => setCategory('')}>All</p>
                    <p onClick={() => setCategory('Women')}>Women</p>
                    <p onClick={() => setCategory('Kid')}>Kids</p>
                    <p onClick={() => setCategory('Men')}>Men</p>
                    <p onClick={() => setCategory('Accessory')}>Accessories</p> 
                    </div>
                </div>
                <div className='fil'>
                <h5>Filter</h5>
                    <input onChange={(e) => {
                    setSearchText(e.target.value)
                    }} 
                    placeholder='Search Products...'/>
                </div>
            </div>
            <div className="nbProduit">nombre de produit recherchés: {products.length}</div>
            <div className='containerProducts'>
            {products.map((product)=> {
            return(
                <Product
                                key={product.id}
                                data={product}
                                isLiked={likedItemCart.find(p => p.id === product.id)}
                                setLikedItem={updateLikeItems}
                                setCartItem={updateCartItems}
                />
                )
            })}
            </div>
        </div>

            

        
        </div>
        
    )
}

export default Products