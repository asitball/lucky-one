import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])

    return (
      <div className="container">
        <div className="product-container">
            {
                products.map(product => <Product key={product.id} product ={product}></Product>)
            } 
        </div>
        <div className='cart-container'>
            <h3>i am cart container</h3>
        </div>
      </div>
    );
};

export default Products;