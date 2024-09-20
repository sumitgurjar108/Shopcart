import React from 'react';

const CartList = ({ cartItems, removeFromCart, updateQuantity }) => (
    <div>
        <h2>Cart</h2>
        <ul>
            {cartItems.map(item => (
                <li key={item.id}>
                    <img src={item.image} alt={item.name} width="50" height="50" />
                    {item.name} - Quantity:
                    <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        min="1"
                    />
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
            ))}
        </ul>
        <h3>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
    </div>
);

export default CartList;
