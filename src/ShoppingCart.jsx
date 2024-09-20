import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import CartList from './Components/CartList';
import BuyNowButton from './Components/BuyNowButton';
import PaymentOptions from './Components/PaymentOptions';
import CouponCode from './Components/CouponCode';

const ShoppingCart = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Apple', price: 100, quantity: 0, image: 'images/apple.jpg ' },
        { id: 2, name: 'Banana', price: 40, quantity: 0, image: 'images/Banana.webp' },
        { id: 3, name: 'Cherry', price: 65, quantity: 0, image: 'images/cherry.jpg' },
    ]);

    const [paymentMethod, setPaymentMethod] = useState('');
    const [discount, setDiscount] = useState(0);
    const [coupon, setCoupon] = useState('');

    const addToCart = (productId) => {
        setProducts(products.map(product =>
            product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        ));
    };

    const removeFromCart = (productId) => {
        setProducts(products.map(product =>
            product.id === productId && product.quantity > 0 ? { ...product, quantity: product.quantity - 1 } : product
        ));
    };

    const cartItems = products.filter(product => product.quantity > 0);

    const handleBuyNow = () => {
        setProducts(products.map(product => ({ ...product, quantity: 0 })));
    };
    const applyCoupon = (code) => {
        if (code === 'DISCOUNT10') {
            setDiscount(10);
        } else {
            setDiscount(0);
        }
        setCoupon(code);
    };

    return (
        <div>
            <h1>Task Shopping Cart</h1>
            <ProductList products={products} addToCart={addToCart} />
            <CartList cartItems={cartItems} removeFromCart={removeFromCart} />
            <PaymentOptions onPaymentMethodSelect={setPaymentMethod} />
            <CouponCode onApply={applyCoupon} />
            <BuyNowButton cartItems={cartItems} paymentMethod={paymentMethod} onBuyNow={handleBuyNow} />
        </div>
    );
};

export default ShoppingCart;
