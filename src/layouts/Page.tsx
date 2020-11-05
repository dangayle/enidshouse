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
      <style jsx={true} global={true}>{`
          .content p {margin-bottom:1rem;}
          }
        `}</style>
    </BaseLayout>
  );
};
