import React, { useState } from 'react'
import "./produit.css"
import comingSoon1 from "../../../../images/comingsoon1.jpeg"
import comingSoon2 from "../../../../images/comingsoon2.jpeg"
import comingSoon3 from "../../../../images/comingsoon3.jpeg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FiltreProduit from './FiltreProduit/FiltreProduit'
import data from "../../../../Data.json"


export default function Produit({ cart, likedItemCart, updateCart, updateLike }) {
    const [products, setProducts] = useState(data);
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
    return (
        <div id='produit'>
            <div className="commingSoon">
                <div className="img1">
                    <img src={comingSoon1} alt="" />
                    <button>COMING SOON</button>
                </div>
                <div className="img2">
                    <img src={comingSoon2} alt="" />
                    <button>COMING SOON</button>
                </div>
                <div className="img3">
                    <img src={comingSoon3} alt="" />
                    <button>COMING SOON</button>
                </div>
            </div>
            <div className="shop">
                <h2>OUR PRODUCTS</h2>
                <div className="show">
                    <Tabs>
                        <TabList>
                            <Tab>Bestseller</Tab>
                            <Tab>New</Tab>
                            <Tab>Sale</Tab>
                            <Tab>Old</Tab>
                        </TabList>

                        <TabPanel>
                            {products.map((_) => {
                                return (
                                    _.tag == "Bestseller" && <FiltreProduit key={_.id}
                                    data={_}
                                    isLiked={likedItemCart.find(p => p.id === _.id)}
                                    setLikedItem={updateLikeItems}
                                    setCartItem={updateCartItems} />
                                )
                            })}
                        </TabPanel>
                        <TabPanel>
                        {products.map((_) => {
                                return (
                                    _.tag == "New" && <FiltreProduit key={_.id}
                                    data={_}
                                    isLiked={likedItemCart.find(p => p.id === _.id)}
                                    setLikedItem={updateLikeItems}
                                    setCartItem={updateCartItems} />
                                )
                            })}
                        </TabPanel>
                        <TabPanel>
                        {products.map((_) => {
                                return (
                                    _.tag == "Sale" && <FiltreProduit key={_.id}
                                    data={_}
                                    isLiked={likedItemCart.find(p => p.id === _.id)}
                                    setLikedItem={updateLikeItems}
                                    setCartItem={updateCartItems} />
                                )
                            })}
                        </TabPanel>
                        <TabPanel>
                        {products.map((_) => {
                                return (
                                    _.tag == "Old" && <FiltreProduit key={_.id}
                                    data={_}
                                    isLiked={likedItemCart.find(p => p.id === _.id)}
                                    setLikedItem={updateLikeItems}
                                    setCartItem={updateCartItems} />
                                )
                            })}
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
