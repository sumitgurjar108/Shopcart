import React from 'react';

const ProductList = ({ products, addToCart }) => (
    <div>
        <h2>Products</h2>
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.name} width="50" height="50" />
                    {product.name} - ${product.price.toFixed(2)}
                    <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                </li>
            ))}
        </ul>
    </div>
);

export default ProductList;
