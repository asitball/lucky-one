import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
      <div className="container">
        <div className="product-container">
            {
                products.map(product => <Product handleAddToCart ={handleAddToCart} key={product.id} product ={product}></Product>)
            } 
        </div>
        <div className='cart-container'>
            <h3>Cart Summary</h3>
            {
                cart.map(cart => <Cart key={cart.id} cart ={cart}></Cart>)
            }
            <button className='add-btn'>Choose 1 for me</button>
            <button className='add-btn'>Choose Again</button>

        </div>
      </div>
    );
};

export default Products;