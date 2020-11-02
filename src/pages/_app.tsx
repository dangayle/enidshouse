import React from "react";
import App from "next/app";
import { TinaCMS, TinaProvider } from "tinacms";
import {
  GithubClient,
  GithubMediaStore,
  TinacmsGithubProvider,
} from "react-tinacms-github";
import { onLogin } from "../utilities/onLogin";
import { onLogout } from "../utilities/onLogout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "../styles/styles.css";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);

console.debug(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);
console.debug(process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID);
export default class Site extends App {
  cms: TinaCMS;

  constructor(props) {
    super(props);

    const github = new GithubClient({
      proxy: "/api/proxy-github",
      authCallbackRoute: "/api/create-github-access-token",
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      baseRepoFullName: process.env.NEXT_PUBLIC_REPO_FULL_NAME,
      baseBranch: process.env.NEXT_PUBLIC_BASE_BRANCH,
    });

    this.cms = new TinaCMS({
      enabled: !!props.pageProps.preview,
      apis: {
        github,
      },
      media: new GithubMediaStore(github),
      sidebar: props.pageProps.preview,
      toolbar: props.pageProps.preview,
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Elements stripe={stripePromise}>
        <TinaProvider cms={this.cms}>
          <TinacmsGithubProvider
            onLogin={onLogin}
            onLogout={onLogout}
            error={pageProps.error}>
            <Component {...pageProps} />
          </TinacmsGithubProvider>
        </TinaProvider>
      </Elements>
    );
  }
}
