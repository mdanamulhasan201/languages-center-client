import React from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    return (
        <div>
  
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;