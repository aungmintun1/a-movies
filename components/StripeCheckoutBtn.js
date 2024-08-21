import React from 'react'
import { loadStripe } from '@stripe/stripe-js';


export default function StripeCheckoutBtn({cartItems}) {

    //stripe code
const stripePromise = loadStripe('pk_test_51OkouIJ4pPgw30DxgN8tgYwaYgMotVCdDNnyFdSKagZtuSyeZQ3hE6bOm6vRWqtJt5WLBv3cPV0nhZRK8NQ1MO7600nAH4nQyD');

const handleCheckout = async (Items) => {
  const stripe = await stripePromise;
  console.log(Items)
  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({cartItems: Items}),
  });

  const session = await response.json();

  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    console.error('this is the error' + result.error.message);
  }
  
};
//end of stripe code
  return (
   <>
       <button onClick={()=>handleCheckout(cartItems)} className="btn btn-md btn--danger btn--wide slider--btn">Checkout</button>
   </>
  )
}
