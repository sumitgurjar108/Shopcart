import React, { useState } from 'react';

const CouponCode = ({ onApply }) => {
    const [code, setCode] = useState('');

    const handleApply = () => {
        onApply(code);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter coupon code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            <button onClick={handleApply}>Discount Coupon</button>
        </div>
    );
};

export default CouponCode;
