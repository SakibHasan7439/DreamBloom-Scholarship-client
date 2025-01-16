import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";
import ApplicationForm from "../ApplicationForm/ApplicationForm";
import { useState } from "react";

const Payment = () => {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(true);
  const dataReceived = location.state;

  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
  return (
    <div
      className={`max-w-3xl w-full mx-auto px-4 ${
        isHidden ? "h-[400px]" : "h-auto pb-4"
      }  bg-[#93c5fd]`}
    >
      <h1 className="text-center text-3xl my-8">Make payment</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          applicationFees={dataReceived.applicationFees}
          setIsHidden={setIsHidden}
        ></CheckoutForm>
      </Elements>
      <ApplicationForm
        isHidden={isHidden}
        scholarshipInfo={dataReceived}
      ></ApplicationForm>
    </div>
  );
};

export default Payment;
