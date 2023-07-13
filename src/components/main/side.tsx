// Utilities
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
          className="mr-3 text-sm py-2 px-4 rounded-full inline-flex items-center bg-neutral-200 space-x-1">
          <div
            className={`w-2 h-2 mr-2 rounded-full ${getTagColor(tag)} `}></div>
          {tag}
        </a>
      ))}
    </div>
  );
};

// Tag Group Component
export const TagGroup = () => {
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
      <div className="my-8 space-y-3">
        {post.map((post) => (
          <a
            href={`#${post}`}
            key={post}
            className="mr-3 text-sm py-2 px-4 rounded-full inline-flex items-center bg-neutral-200 space-x-1">
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
import React from "react";

const Newsletter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
      <p className="text-gray-600 mb-6">
        Get the latest posts delivered straight to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your name"
          className="px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your email address"
          className="px-4 py-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
