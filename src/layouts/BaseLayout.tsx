import Header from "../components/Header";
import Footer from "../components/Footer";

export const BaseLayout: React.FC<{ bodyBg?: any }> = ({
  children,
  bodyBg,
}) => {
  console.debug(bodyBg);
  return (
    <div className="root flex flex-col min-h-screen text-gray-800 bg-blue-200 font-serif relative bg-cover bg-center">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto flex p-1 md:p-2">{children}</div>
      </main>
      <Footer />
      <div className="absolute inset-0 h-auto" style={{ zIndex: -1 }}>
        <img
          src="https://images.unsplash.com/photo-1509315047084-af74f1192bee"
          alt=""
          className="h-full w-full object-fit-cover"
        />
      </div>
      {bodyBg && (
        <style jsx={true}>{`
            .root{
              background-image: url(${bodyBg});
            }
          }
        `}</style>
      )}
    </div>
  );
};
