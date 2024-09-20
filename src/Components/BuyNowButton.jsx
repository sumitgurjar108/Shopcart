import React from 'react';

const BuyNowButton = ({ cartItems, onBuyNow }) => {
    const handleBuyNow = () => {
        const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        alert(`Thank you for your purchase -- Total amount: $${totalAmount.toFixed(2)}`);
        onBuyNow();
    };

    return (
        <button onClick={handleBuyNow} disabled={cartItems.length === 0}>
            Buy Now
        </button>
    );
};

export default BuyNowButton;
