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

export const TagGroups = () => {
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
