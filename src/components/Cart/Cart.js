import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart}= props
    return (
        <div className="cart-mini-component">
            <p>{cart.deviceName}</p>
            <img src={cart.image} alt="" />
        </div>
    );
};
export default Cart;