import React from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../hook/useCart';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h3 className='text-center text-xl  font-bold'>Payment </h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm 
                price={price}
                cart={cart} 
                />
            </Elements>
        </div>
    );
};

export default Payment;