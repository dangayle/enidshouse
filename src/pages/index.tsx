import React from "react";
import { BaseLayout } from "../layouts/BaseLayout";

import { Donate } from "../components/forms/Donate";
import Head from "next/head";

const Home = () => {
  return (
    <BaseLayout bodyBg="/welsh-lakelands.jpg">
      <Head>
        <title>Enid's House</title>
        <meta property="og:title" content="Enid's House" />
        <meta
          property="og:description"
          content="A house made with, and abounding in, unconditional love."
        />
        <meta property="og:image" content="/enid.jpg" />
      </Head>
      <div className="flex">
        <div className="lg:ml-auto lg:w-2/3 w-full p-8">
          <h1 className="text-2xl lg:text-4xl xl:text-6xl mb-8 text-center">
            A house made with, and abounding in, unconditional love.
          </h1>
          <Donate />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
