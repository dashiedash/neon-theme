// Utilities
// Imports
import React from "react";

// Get color of the button based on the tag
const getTagColor = (tag: string) => {
  switch (tag) {
    case "Food":
      return "bg-violet-500";

    case "Health":
      return "bg-emerald-500";

    case "Inspiration":
      return "bg-cyan-500";

    case "Lifestyle":
      return "bg-blue-600";

    case "Nature":
      return "bg-pink-300";

    case "Technology":
      return "bg-orange-500";

    case "Travel":
      return "bg-pink-600";

    default:
      return "bg-neutral-200";
  }
};

// Components
// Tag Component
export const Tags = (props: { tags: string[] }) => {
  const { tags } = props;

  return (
    <div className="space-y-3">
      {tags.map((tag) => (
        <a
          href={`#${tag}`}
          key={tag}
          className="mr-3 text-sm py-2 px-4 rounded-full inline-flex items-center bg-neutral-100 space-x-1">
          <div
            className={`w-2 h-2 mr-2 rounded-full ${getTagColor(tag)} `}></div>
          {tag}
        </a>
      ))}
    </div>
  );
};

// Tag Group Component
export const TagGroupMain = () => {
  const post = [
    "Food",
    "Health",
    "Inspiration",
    "Lifestyle",
    "Nature",
    "Technology",
    "Travel",
  ];

  return (
    <section>
      <h2 className="font-bold">Tags</h2>
      <div className="my-4 space-y-3">
        {post.map((post) => (
          <a
            href={`#${post}`}
            key={post}
            className="mr-3 text-sm py-2 px-4 rounded-full inline-flex items-center bg-neutral-100 space-x-1">
            <div
              className={`w-2 h-2 mr-2 rounded-full ${getTagColor(
                post
              )} `}></div>
            {post}
          </a>
        ))}
      </div>
    </section>
  );
};

// Newsletter Component
export const NewsletterMain = () => {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <section className="bg-rose-500 text-center p-8 rounded-xl my-8">
      <header>
        <h2 className="text-2xl font-bold text-neutral-50 mb-2">Newsletter</h2>
        <p className="text-white mb-6">
          Get the latest posts delivered straight to your inbox.
        </p>
      </header>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your name"
          id="name"
          required
          aria-required="true"
          className="px-6 py-2 border border-gray-300 rounded-full"
        />
        <input
          type="email"
          placeholder="Your email address"
          id="email"
          required
          aria-required="true"
          className="px-6 py-2 border border-gray-300 rounded-full"
        />
        <button
          type="submit"
          className="bg-white py-2 px-4 rounded-full hover:bg-rose-100">
          Subscribe
        </button>
      </form>
    </section>
  );
};
