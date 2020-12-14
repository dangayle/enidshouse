import React, { useState } from "react";
import axios from "axios";
import { BasicCard } from "../BasicCard";
import { InputWithInlineLeading } from "./InputWithInlineLeading";
import { InputWithLabel } from "./InputWithLabel";
import { InputWithLeadingIcon } from "./InputWithLeadingIcon";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "../Button";
import { useToggle } from "react-use";
import { useForm } from "react-hook-form";
import { StripeCardElementChangeEvent } from "@stripe/stripe-js";
import { ThankYou } from "../ThankYou";
import currency from "currency.js";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  fullName: string;
  email: string;
  amount: string;
};

const decimalMatch = /^\$?((\d{1,3})(?:[0-9]{3}){0,1}|(\d{1})(?:[0-9]{3}){0,2}|(\d{1,7}))(\.\d{1,2})?$/g;

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Must use a valid email")
    .required("Email is required"),
  amount: yup.lazy((value) => {
    switch (typeof value) {
      case "number":
        return yup
          .number()
          .min(0.5, "Amount must be more than $0.50")
          .required("Amount is required");
      case "string":
      default:
        return yup
          .string()
          .matches(decimalMatch, "Amount must be a valid unit of currency")
          .required("Amount is required");
    }
  }),
});

export const Donate = () => {
  const { register, handleSubmit, watch, errors } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string>();
  const [success, toggleSuccess] = useToggle(false);
  const stripe = useStripe();
  const elements = useElements();
  const onSubmit = handleSubmit<FormData>(
    async ({ fullName, email, amount }) => {
      setProcessingTo(true);

      const billingDetails = {
        name: fullName,
        email: email,
      };
      const cardElement = elements.getElement("card");

      try {
        const { data: clientSecret } = await axios.post(
          "/api/payment-intents",
          {
            amount: currency(amount).intValue,
          }
        );

        const paymentMethodReq = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: billingDetails,
        });

        if (paymentMethodReq.error) {
          setCheckoutError(paymentMethodReq.error.message);
          setProcessingTo(false);
          return;
        }

        const { error } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethodReq.paymentMethod.id,
        });

        if (error) {
          setCheckoutError(error.message);
          setProcessingTo(false);
          return;
        }

        toggleSuccess();
      } catch (err) {
        setCheckoutError(err.message);
      }
    }
  );

  const handleCardDetailsChange = (event: StripeCardElementChangeEvent) => {
    event.error
      ? setCheckoutError(event.error.message)
      : setCheckoutError(undefined);
  };

  return (
    <BasicCard>
      {!success ? (
        <form className="p-2" onSubmit={onSubmit}>
          <h2 className="p-2 text-2xl text-center">
            Make a difference. Please donate.
          </h2>
          <InputWithLabel
            name={"fullName"}
            ref={register({ required: true })}
          />
          {errors.fullName && (
            <span className="text-red-900 p-2" role="alert">
              {errors.fullName.message}
            </span>
          )}
          <InputWithLeadingIcon
            name={"email"}
            ref={register({ required: true })}
          />
          {errors.email && (
            <span className="text-red-900 p-2" role="alert">
              {errors.email.message}
            </span>
          )}
          <InputWithInlineLeading
            name={"amount"}
            ref={register({ required: true })}
            type="number"
          />
          {errors.amount && (
            <span className="text-red-900 p-2" role="alert">
              {errors.amount.message}
            </span>
          )}
          <div className="p-2">
            <label className="block text-sm font-medium leading-5 text-gray-700">
              Payment info
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <CardElement
                className="p2 form-input block w-full text-gray-400 sm:text-sm sm:leading-5"
                options={{
                  style: {
                    base: {},
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
                onChange={handleCardDetailsChange}
              />
              {checkoutError && (
                <span className="text-red-900 p-2" role="alert">
                  {checkoutError}
                </span>
              )}
            </div>
          </div>

          <div className="mt-2 p-2 flex">
            <div className="ml-auto">
              <Button type="submit" disabled={!stripe}>
                Donate now
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <ThankYou />
      )}
    </BasicCard>
  );
};
