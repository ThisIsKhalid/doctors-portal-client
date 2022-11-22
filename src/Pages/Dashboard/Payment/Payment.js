import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const booking = useLoaderData();
  const { price, treatment, appointmentDate, slot } = booking;

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

  return (
    <div>
      <h3 className="text-3xl mb-4">
        Payment for{" "}
        <span className="text-secondary font-semibold">{treatment}</span>
      </h3>
      <p className="text-xl">
        Please pay{" "}
        <span className="bg-gray-100 px-1 py-1 font-semibold">${price}</span>{" "}
        for your appointment on{" "}
        <span className="bg-gray-100 px-1 py-1 font-semibold">
          {appointmentDate}
        </span>{" "}
        at <span className="bg-gray-100 px-1 py-1 font-semibold">{slot}</span>
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
