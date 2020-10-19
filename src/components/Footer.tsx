import { useCMS } from "tinacms";
import { EditLink } from "../components/EditLink";

const Footer = () => {
  const cms = useCMS();
  return (
    <footer className="mt-auto bg-white bg-opacity-50 text-xs font-sans text-gray-700">
      <div className="container mx-auto flex p-4">
        <div>
          <span>
            Photo by{" "}
            <a href="https://unsplash.com/@georg3annister?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              George Bannister
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Unsplash
            </a>
          </span>
        </div>
        <div className="ml-auto">
          <EditLink cms={cms} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
