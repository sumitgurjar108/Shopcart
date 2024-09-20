import React, { useState, useEffect } from 'react';

const PaymentOptions = ({ onPaymentMethodSelect }) => {
    const [selectedMethod, setSelectedMethod] = useState('');
    const [selectedCardType, setSelectedCardType] = useState('');

    const handleMethodChange = (event) => {
        setSelectedMethod(event.target.value);
        onPaymentMethodSelect(event.target.value);
        if (event.target.value !== 'Credit Card') {
            setSelectedCardType('');
        }
    };

    const handleCardTypeChange = (event) => {
        setSelectedCardType(event.target.value);
    };

    useEffect(() => {
        if (selectedMethod) {
            console.log(`Selected payment method: ${selectedMethod}`);
        }
        if (selectedCardType) {
            console.log(`Selected card type: ${selectedCardType}`);
        }
    }, [selectedMethod, selectedCardType]);

    const styles = {
        container: {
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '5px',
            maxWidth: '300px',
            margin: '20px auto',
            backgroundColor: '#f9f9f9',
        },
        header: {
            marginBottom: '20px',
            fontSize: '1.5em',
            textAlign: 'center',
        },
        option: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
        },
        input: {
            marginRight: '10px',
        },
        cardOptions: {
            marginLeft: '20px',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Payment Options</h2>
            <div style={styles.option}>
                <input 
                    type="radio" 
                    value="Credit Card" 
                    checked={selectedMethod === 'Credit Card'} 
                    onChange={handleMethodChange}
                    style={styles.input}
                />
                <label>Credit Card</label>
            </div>
            {selectedMethod === 'Credit Card' && (
                <div style={styles.cardOptions}>
                    <div style={styles.option}>
                        <input 
                            type="radio" 
                            value="Visa" 
                            checked={selectedCardType === 'Visa'} 
                            onChange={handleCardTypeChange}
                            style={styles.input}
                        />
                        <label>Visa</label>
                    </div>
                    <div style={styles.option}>
                        <input 
                            type="radio" 
                            value="MasterCard" 
                            checked={selectedCardType === 'MasterCard'} 
                            onChange={handleCardTypeChange}
                            style={styles.input}
                        />
                        <label>MasterCard</label>
                    </div>
                    <div style={styles.option}>
                        <input 
                            type="radio"
                            value="Discover" 
                            checked={selectedCardType === 'Discover'} 
                            onChange={handleCardTypeChange}
                            style={styles.input}
                        />
                        <label>Discover</label>
                    </div>
                </div>
            )}
            <div style={styles.option}>
                <input 
                    type="radio" 
                    value="PayPal" 
                    checked={selectedMethod === 'PayPal'} 
                    onChange={handleMethodChange}
                    style={styles.input}
                />
                <label>PayPal</label>
            </div>
            <div style={styles.option}>
                <input 
                    type="radio" 
                    value="Google Pay" 
                    checked={selectedMethod === 'Google Pay'} 
                    onChange={handleMethodChange}
                    style={styles.input}
                />
                <label>Google Pay</label>
            </div>
            <div style={styles.option}>
                <input 
                    type="radio" 
                    value="Apple Pay" 
                    checked={selectedMethod === 'Apple Pay'} 
                    onChange={handleMethodChange}
                    style={styles.input}
                />
                <label>Apple Pay</label>
            </div>
            <div style={styles.option}>
                <input 
                    type="radio" 
                    value="Bank Transfer" 
                    checked={selectedMethod === 'Bank Transfer'} 
                    onChange={handleMethodChange}
                    style={styles.input}
                />
                <label>Bank Transfer</label>
            </div>
        </div>
    );
};

export default PaymentOptions;
