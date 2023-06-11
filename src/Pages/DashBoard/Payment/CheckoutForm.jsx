import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import './Style.css'

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')



    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
        } else {
            setCardError('')
            console.log('[PaymentMethod]', paymentMethod);
        }
    }



    return (

        <div className='w-[1000px] text-center shadow-xl p-10'>
            <h3 className='text-center'>Payment </h3>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}

                />
                <button type="submit" className='btn  btn-sm text-white btn-success ' disabled={!stripe}>
                    Pay
                </button>
               
            </form>
            {
                    cardError && <p className='text-red-600'>{cardError}</p>
                }

        </div>

    );
};

export default CheckoutForm;