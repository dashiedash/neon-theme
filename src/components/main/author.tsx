import Image from "next/image";
import { Tooltip } from "@nextui-org/react";

export const AuthorCard = (props: {
  image: string;
  name: string;
  location: string;
  desc: string;
}) => {
  const image = props.image;
  const name = props.name;
  const location = props.location;
  const desc = props.desc;

  return (
    <div className="bg-neutral-50 p-10 drop-shadow-xl rounded-xl my-8 flex flex-col md:flex-row">
      {/* Author Picture */}
      <div className="aspect-square h-40 mx-auto md:mx-5 my-4 relative">
        <Image
          src={image}
          alt=""
          fill={true}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Author Meta */}
      <div className=" my-4">
        {/* Author Name */}
        <p className="font-bold text-center md:text-left md:text-xl">{name}</p>

        {/* Author Social Links */}
        <div className="my-2 flex justify-center md:justify-start flex-wrap space-x-3">
          {/* Location */}
          <Tooltip content={location} color="invert">
            <a target="_blank" className="p-2 bg-neutral-200 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 stroke-rose-600">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </a>
          </Tooltip>

          {/* Twitter */}
          <a
            href=""
            target="_blank"
            className="p-2 bg-neutral-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 h-4 fill-sky-500">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href=""
            target="_blank"
            className="p-2 bg-neutral-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-4 h-4 fill-blue-600">
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
          </a>

          {/* Website */}
          <a
            href=""
            target="_blank"
            className="p-2 bg-neutral-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-rose-600">
              <path
                fillRule="evenodd"
                d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Author Description */}
        <p className="text-center md:text-left">{desc}</p>
      </div>
    </div>
  );
};
