import Link from "next/link";
import React from "react";
import { Button } from "../components/Button";
import { Page } from "../layouts/Page";

const About = () => {
  return (
    <Page>
      <h1 className="font-bold text-3xl mb-4">About Enid's House</h1>

      <h2 className="font-bold text-xl">What is Enid's House?</h2>
      <p>
        Enid's house is a non-profit organization dedicated to supporting people
        recovering from substance abuse and mental health issues.
      </p>

      <h2 className="font-bold text-xl">Who is Enid?</h2>
      <p>
        Prior to her passing, Ryan Mallory always promised to purchase his
        grandmother Enid a house that matched her spirit of generosity. Although
        he was unable to get her that house, Ryan decided to honor Enid's memory
        by showing the same love she showed during her lifetime by supporting
        recovering addicts.
      </p>

      <h2 className="font-bold text-xl">Why should you care?</h2>
      <p>
        Addiction and mental health disorders are hugely stigmatized and
        woefully undertreated in the United States. Millions suffer from the
        consequences of substance abuse and untreated mental health issues, and
        many struggle to rebuild their lives. Too many addicts end up relapsing
        if they feel they cannot reintegrate with society. Enid's house hopes to
        provide recovering addicts and alcoholics with the resources they need
        to improve their lives.
      </p>

      <h2 className="font-bold text-xl">What can I do to help?</h2>
      <p>
        Your donations to Enid's house will help to provide housing grants,
        housing support, and and much needed personal items. This kind of
        financial and material support will allow an addict to break free from
        the chains of addiction and to move forward with a supported, fulfilling
        life of recovery.
      </p>

      <p>
        <Button type="button">
          <Link href="/" passHref>
            Donate now
          </Link>
        </Button>
      </p>
    </Page>
  );
};

export default About;