import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";

// Article Header
export const ArticleHeader = ({ posts }: { posts: any }) => {
  const { title, author, publishDate, readTime } = posts;

  const formatAuthor = (authors: string[]) => {
    if (authors.length > 1) {
      const lastAuthor = authors[authors.length - 1];
      const remainingAuthors = authors.slice(0, -1).join(", ");
      return `${remainingAuthors} & ${lastAuthor}`;
    }
    return authors[0];
  };

  return (
    <div>
      {/* Article Title */}
      <h1 className="text-4xl font-bold mt-7 mb-5">{title}</h1>

      <div className="flex my-5 space-x-6">
        {/* Article Meta: Author */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 stroke-neutral-500 mr-1">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <p className="text-xs text-neutral-500">{formatAuthor(author)}</p>
        </div>

        {/* Article Meta: Publish Date */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 stroke-neutral-500 mr-1">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
          <p className="text-xs text-neutral-500">{publishDate}</p>
        </div>

        {/* Article Meta: Read Duration */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 stroke-neutral-500 mr-1">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-xs text-neutral-500">{readTime}</p>
        </div>
      </div>
    </div>
  );
};

// Article Quote Block
export const ArticleQuoteBlock = ({ quote }: { quote: any }) => {
  return (
    <div className="px-5 border-l-4 border-rose-500 my-16">
      <blockquote className="text-xl">{quote}</blockquote>
    </div>
  );
};

// Article Image
export const ArticleImage = ({
  attribName,
  attribNameLink,
  attribSource,
  attribSourceLink,
  imageSource,
}: {
  attribName: string;
  attribNameLink: string;
  attribSource: string;
  attribSourceLink: string;
  imageSource: string;
}) => {
  return (
    <figure>
      <Image
        src={imageSource}
        alt=""
        width={1920}
        height={400}
        className="rounded-xl"
      />
      <figcaption className="text-center text-sm my-2">
        Photo by{" "}
        <a
          href={attribNameLink}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2">
          {attribName}
        </a>{" "}
        /{" "}
        <a
          href={attribSourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2">
          {attribSource}
        </a>
      </figcaption>
    </figure>
  );
};

// External Article Card
export const ExternalArticle = ({
  url,
  source,
  author,
  image,
}: {
  url: string;
  source: string;
  author: string;
  image: string;
}) => {
  const [title, setTitle] = useState("Loading...");
  const [firstParagraph, setFirstParagraph] = useState("");

  useEffect(() => {
    const fetchTitleAndParagraph = async () => {
      try {
        const response = await fetch(url);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // Fetch Title
        const title = doc.querySelector("h1")?.textContent;
        setTitle(title || "Insert Title Here");

        // Fetch First Paragraph
        const firstParagraph = doc.querySelector("p")?.textContent;
        setFirstParagraph(firstParagraph || "");
      } catch (error) {
        console.error("Error fetching external page:", error);
        setTitle("Insert Title Here");
        setFirstParagraph("Insert Paragraph Here");
      }
    };

    fetchTitleAndParagraph();
  }, [url]);

  return (
    <>
      <a href={url} target="_blank">
        <div className="drop-shadow-xl border bg-white my-16 rounded-xl p-4 flex flex-col-reverse md:flex-row">
          <div className="m-4">
            <h3 className="font-semibold mb-4">{title}</h3>
            {/* Paragraph with Line Clamp */}
            <p className="mb-4 text-sm max-h-16 overflow-hidden line-clamp-2">
              {firstParagraph}
            </p>
            <p className="text-sm font-medium">
              {source} ・ {author}
            </p>
          </div>
          <div className="">
            <Image
              src={image}
              alt=""
              width={1920}
              height={400}
              className="rounded-xl w-128 object-cover aspect-video"
            />
          </div>
        </div>
      </a>
    </>
  );
};

// Table of Contents
interface TableOfContentsProps {
  headings: { title: string; id: string }[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  return (
    <aside className="bg-white p-8 drop-shadow-xl rounded-xl my-8">
      <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
