import React from 'react';

const Cart = (props) => {
    const {cart}= props
    console.log(cart)
    let name = '';
    for(const product of cart){
        name = product.deviceName;
    }
    return (
        <div>
            <h4>Selected product: {cart.length}</h4>
            <h3>Device Name: 
                <li>{name}</li>
            </h3>
           
        </div>
    );
};
export default Cart;