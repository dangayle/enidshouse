import React from "react";
import { BaseLayout } from "./BaseLayout";

export const Page = ({ children }) => {
  return (
    <BaseLayout>
      <div className="max-w-4xl mx-auto py-4">
        <div className="w-full font-sans bg-white bg-opacity-75 overflow-hidden shadow rounded-lg">
          <div className="content px-4 py-5 sm:p-6">{children}</div>
        </div>
      </div>
      <style jsx global>{`
          .content h1, .content h2 {font-weight: bold}
          .content p, .content ul {margin-bottom:1rem;}
          .content ul{
            padding-left: 2rem;
          }
          .content li {list-style-type: disc; margin-bottom: .5rem;}
          }
        `}</style>
    </BaseLayout>
  );
};
