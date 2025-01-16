import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const CheckoutForm = ({applicationFees, setIsHidden}) => {
  const axiosSecure = UseAxiosSecure(); 
  const { user } = UseAuth();
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const element = useElements();
  const [error, setError] = useState('');
  const [transactionId, setTransactionId] = useState('');

  useEffect(()=>{
    axiosSecure.post("/create-payment-intent", { applicationFees: applicationFees })
    .then(res =>{
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
    })
  }, [axiosSecure, applicationFees]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!stripe || !element) {
        return;
    }

    const card = element.getElement(CardElement);
    if(card === null) {
        return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })

    if(error) {
        setError(error.message)
    }
    else {
        console.log(paymentMethod);
        setError('');
    }

    const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous'
            }
        }
    })

    if(confirmError) {
        toast.error(confirmError.message);

    }else {
        console.log("payment intent", paymentIntent);
        if(paymentIntent.status === 'succeeded'){
            Swal.fire({
                title: "Payment Successful",
                text: "Your payment is successful",
                icon: "success"
              });
            setTransactionId(paymentIntent.id);
            setIsHidden(false);
        }
    }

  };

  return (
    <div>
        <form className="bg-white p-4 rounded-md" onSubmit={handleSubmit}>
        <CardElement
            className="flex flex-col"
            options={{
            style: {
                base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                    color: "#aab7c4",
                },
                },
                invalid: {
                color: "#9e2146",
                },
            },
            }}
        />
        <button className="px-3 py-2 my-6 md:px-6 md:py-2 rounded-lg bg-[#93c5fd] hover:text-white transition-all duration-200 hover:bg-[#3970ae]" type="submit" disabled={!stripe || !clientSecret}>
            Pay
        </button>
        <p className="text-red-500">{error}</p>

        </form>
        {
            transactionId && <p className="text-green-600 text-xl my-8 text-center">Payment successful {transactionId}</p>
        }
        
    </div>
    
  );
};

export default CheckoutForm;
