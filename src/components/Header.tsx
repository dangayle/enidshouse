import React from "react";
import { Button } from "./Button";
import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-white bg-opacity-25 font-sans">
      <div className="container mx-auto flex p-4 items-center">
        <div className="font-bold uppercase -mt-2">
          <Link href="/">
            <a className="hover:opacity-50">
              <img
                className="h-full w-full"
                src="/enids-house.svg"
                alt="Enid's House"
              />
            </a>
          </Link>
        </div>
        <nav className="ml-auto text-sm md:text-base">
          <ul className="flex items-center">
            <li className="pl-4">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            {/* <li className="pl-4">Blog</li> */}
            <li className="pl-4">
              <Button type="button">
                <Link href="/" passHref>
                  Donate
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
