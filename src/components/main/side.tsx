export const Tags = (props: { tags: string[] }) => {
  const { tags } = props;

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

  return (
    <section>
      <h2 className="font-bold">Tags</h2>
      <div className="my-8 space-y-3">
        {tags.map((tag) => (
          <a
            href={`#${tag}`}
            key={tag}
            className="mr-3 py-2 px-4 rounded-full inline-flex items-center bg-neutral-200 space-x-1">
            <div
              className={`w-3 h-3 mr-3 rounded-full ${getTagColor(
                tag
              )} `}></div>
            {tag}
          </a>
        ))}
      </div>
    </section>
  );
};
