import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "../components/Button";
import { Page } from "../layouts/Page";

const About = () => {
  return (
    <Page>
      <Head>
        <title>About Enid's House</title>
        <meta property="og:title" content="What is Enid's House?" />
        <meta
          property="og:description"
          content="Enid's house is a non-profit organization dedicated to supporting
          people recovering from substance abuse and mental health issues."
        />
        <meta
          property="og:image"
          content="https://enidshouse.org/_next/image?url=%2Fenid.jpg&w=3840&q=75"
        />
        <meta
          property="og:video"
          content="https://d8jdrp2ozcilb.cloudfront.net/enidshouse.mp4"
        />
      </Head>
      <h1 className="font-bold text-3xl mb-4">About Enid's House</h1>

      <div className="mb-4">
        <video controls className="w-full">
          <source
            src={`https://d8jdrp2ozcilb.cloudfront.net/enidshouse.mp4`}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="mb-12">
        <h2 className="font-bold text-xl">What is Enid's House?</h2>
        <p>
          Enid's house is a non-profit organization dedicated to supporting
          people recovering from substance abuse and mental health issues.
        </p>
      </div>
      <div className="mb-12">
        <div className="flex mb-4">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
            <Image
              src="/enid.jpg"
              width={1069}
              height={818}
              alt="photo of Ryan Mallory and Nikki Benson"
            />
          </div>
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
            <h2 className="font-bold text-xl">Who is Enid?</h2>
            <p>
              Prior to her passing, Ryan Mallory always promised to purchase his
              grandmother Enid a house that matched her spirit of generosity.
            </p>
            <p>
              Although he was unable to get her that house, Ryan decided to
              honor Enid's memory by showing the same love she showed during her
              lifetime by supporting recovering addicts.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <div className="flex mb-4">
          <div className="w-full md:w-2/3 mb-4 md:mb-0 md:mr-4">
            <h2 className="font-bold text-xl">Why should you care?</h2>

            <p>
              Addiction and mental health disorders are hugely stigmatized and
              woefully undertreated in the United States. Millions suffer from
              the consequences of substance abuse and untreated mental health
              issues, and many struggle to rebuild their lives. Too many addicts
              end up relapsing if they feel they cannot reintegrate with
              society. Enid's house hopes to provide recovering addicts and
              alcoholics with the resources they need to improve their lives.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
            <Image
              src="/about-us2.jpg"
              width={2216}
              height={1366}
              alt="photo of Ryan Mallory and Nikki Benson"
            />
          </div>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="font-bold text-xl">What can I do to help?</h2>
        <p>
          Your donations to Enid's house will help to provide housing grants,
          housing support, and and much needed personal items. This kind of
          financial and material support will allow an addict to break free from
          the chains of addiction and to move forward with a supported,
          fulfilling life of recovery.
        </p>

        <p>
          <Button type="button">
            <Link href="/" passHref>
              Donate now
            </Link>
          </Button>
        </p>
      </div>
    </Page>
  );
};

export default About;
