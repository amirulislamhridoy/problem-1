import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    console.log(cart)
    return (
        <div>
            <h1>Items Selected {cart.length}</h1>
            {
                cart?.map(item => <p key={item._id}>
                    {item.name}
                    <button onClick={() => handleRemoveFromCart(item)}> X </button>
                </p>)
            }
        </div>
    );
};

export default Cart;