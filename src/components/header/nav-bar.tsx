import Image from "next/image";

export const NavBar = () => (
  <nav className="bg-slate-50 drop-shadow-xl max-w-screen-xl m-auto my-8 rounded-xl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <a href="#" className="">
              <Image src="/logo-dark.svg" alt="Logo" width={150} height={40} />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#"
                className="hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-4 py-4 rounded-md text-sm">
                Features
              </a>
              <a
                href="#"
                className="hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-4 py-4 rounded-md text-sm">
                Style Guides
              </a>
              <a
                href="#"
                className="hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-4 py-4 rounded-md text-sm">
                Tags
              </a>
              <a
                href="#"
                className="hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-4 py-4 rounded-md text-sm">
                Authors
              </a>
              <a
                href="#"
                className="hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-4 py-4 rounded-md text-sm">
                More
              </a>
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
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <a
              href="#"
              className="hover:underline underline-offset-4 decoration-2 decoration-rose-500 px-4 py-4 rounded-md text-sm">
              Sign In
            </a>
            <a
              href="#"
              className="bg-rose-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Become a Member
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
