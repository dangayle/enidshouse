import Head from "next/head";
import { useCMS, usePlugin } from "tinacms";
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { GetStaticProps } from "next";
import { BaseLayout } from "../layouts/BaseLayout";
import Contact from "../components/Contact";

const Home = ({ file }) => {
  const formOptions = {
    label: "Home Page",
    fields: [{ name: "title", component: "text" }],
  };
  const [data, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);
  useGithubToolbarPlugins();
  return (
    <BaseLayout bodyBg="/welsh-lakelands.jpg">
      <div className="flex">
        <div className="lg:ml-auto lg:w-2/3 w-full p-8">
          <h1 className="text-2xl lg:text-4xl xl:text-6xl mb-8 text-center">
            {data.title}
          </h1>
          <Contact />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;

/*
 ** Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  const defaultReturn = {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/home.json",
        data: (await import("../../content/home.json")).default,
      },
    },
  };

  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/home.json",
      parse: parseJson,
    });
  }
  return defaultReturn;
};
