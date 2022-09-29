import React from 'react'
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
import PaymentForm from './PaymentForm';


const Public_Key = "pk_live_51J6yJkJjdVstAFqKdoj4GGC4nkT2yD2HXnTWe1cnikHMRTdNoKwa8yySd3LQsWYyQm0x28641asvorhiF1uYTqMN00RHzajZTl"
const stripetestPromise = loadStripe(Public_Key);
export default function StripeContainer() {
  return (
    <Elements stripe={stripetestPromise}>
        <PaymentForm />
    
    
    </Elements>
  )
}
