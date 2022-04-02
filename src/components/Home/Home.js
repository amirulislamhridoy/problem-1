import React, { useState } from 'react';
import './HomeContainer.css'
import useTshirt from '../../hook/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const [tshirts, setThirts] = useTshirt()
    const [cart, setCart] = useState([])

    const handleAddToCart = (selectedItem) => {
        // console.log(selectedItem)
        // const exist = cart.find(pd => pd._id === selectedItem._id)
        // if(!exist ){
            setCart([...cart, selectedItem])
        // }
    }
    const handleRemoveFromCart = (removeItem) => {
        // console.log(removeItem)
        // console.log(cart)
        const rest = cart.filter(tshirt => tshirt._id !== removeItem._id)
        setCart(rest)
        // console.log(cart)
    }
    return (
        <div>
            <div className="home-container">
                <div className="tstart-container">
                    {
                        tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                        ></Tshirt>)
                    }
                </div>
                <div className="cart">
                    <Cart 
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;