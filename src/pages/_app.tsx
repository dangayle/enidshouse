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

import "../styles/styles.css";
export default class Site extends App {
  cms: TinaCMS;

  constructor(props) {
    super(props);

    const github = new GithubClient({
      proxy: "/api/proxy-github",
      authCallbackRoute: "/api/create-github-access-token",
      clientId: process.env.GITHUB_CLIENT_ID,
      baseRepoFullName: process.env.REPO_FULL_NAME,
      baseBranch: process.env.BASE_BRANCH,
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
      <TinaProvider cms={this.cms}>
        <TinacmsGithubProvider
          onLogin={onLogin}
          onLogout={onLogout}
          error={pageProps.error}>
          <Component {...pageProps} />
        </TinacmsGithubProvider>
      </TinaProvider>
    );
  }
}
