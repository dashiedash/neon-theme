import { useState } from "react";
import Image from "next/image";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-neutral-50 drop-shadow-xl lg:max-w-screen-xl m-8 rounded-xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="">
              <Image src="/logo-dark.svg" alt="Logo" width={110} height={40} />
            </a>
          </div>
          {/* Nav Bar on PC Screens */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#"
                className="hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-2 py-4 text-sm">
                Features
              </a>
              <a
                href="#"
                className="hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-2 py-4 text-sm">
                Style Guides
              </a>
              <a
                href="#"
                className="hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-2 py-4 text-sm">
                Tags
              </a>
              <a
                href="#"
                className="hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-2 py-4 text-sm">
                Authors
              </a>
              <a
                href="#"
                className="hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-2 py-4 text-sm">
                More
              </a>
              {/* Search */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              {/* Toggle Modes */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
              <a
                href="#"
                className="hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-4 py-4 text-sm">
                Sign In
              </a>
              <a
                href="#"
                className="bg-rose-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-rose-400 ease-in-out duration-300">
                Become a Member
              </a>
            </div>
          </div>
          {/* Nav Bar on tablet screens and smaller */}
          <div className="lg:hidden rounded-xl">
            <button
              className={`transform ${isMenuOpen ? "rotate-45" : ""}`}
              onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 transition-opacity absolute ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 transition-opacity ${
                  isMenuOpen ? "opacity-100" : "opacity-0"
                }`}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {isMenuOpen && (
              <div className="absolute right-4 z-20 bg-white py-4 px-4 rounded-md shadow-lg">
                <a
                  href="#"
                  className="block hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-2 py-2 text-sm ease-in-out duration-300">
                  Features
                </a>
                <a
                  href="#"
                  className="block hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-2 py-2 text-sm ease-in-out duration-300">
                  Style Guides
                </a>
                <a
                  href="#"
                  className="block hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-2 py-2 text-sm ease-in-out duration-300">
                  Tags
                </a>
                <a
                  href="#"
                  className="block hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-2 py-2 text-sm ease-in-out duration-300">
                  Authors
                </a>
                <a
                  href="#"
                  className="block hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-2 py-2 text-sm ease-in-out duration-300">
                  More
                </a>
                <a
                  href="#"
                  className="block hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-2 py-2 text-sm ease-in-out duration-300">
                  Sign In
                </a>
                <a
                  href="#"
                  className="block my-4 py-2 px-4 text-sm text-white bg-rose-500 rounded-full hover:bg-rose-400 ease-in-out duration-300">
                  Become a Member
                </a>
                <div className="flex justify-evenly">
                  {/* Search */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                  {/* Toggle Modes */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
