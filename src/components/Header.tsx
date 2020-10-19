import Button from "./Button";

const Header = () => {
  return (
    <header className="bg-white bg-opacity-25 font-sans">
      <div className="container mx-auto flex p-4 items-center">
        <div className="font-bold uppercase -mt-2">
          <img
            className="h-full w-full"
            src="/enids-house.svg"
            alt="Enid's House"
          />
        </div>
        <nav className="ml-auto text-sm md:text-base">
          <ul className="flex">
            <li className="pl-4">About</li>
            <li className="pl-4">Blog</li>
            <li className="pl-4">
              <Button>Donate</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
