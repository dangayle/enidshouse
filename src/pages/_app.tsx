import React from "react";
import App from "next/app";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "../styles/styles.css";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);
export default class Site extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Elements stripe={stripePromise}>
        <Component {...pageProps} />
      </Elements>
    );
  }
}
