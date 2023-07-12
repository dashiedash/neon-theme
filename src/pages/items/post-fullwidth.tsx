import { useState } from "react";
import Image from "next/image";
import { NavBar } from "@/components/header/nav-bar";
import { PostHeader, PostQuoteBlock } from "@/components/main/post";

const PostFullwidth = () => {
  const [post, setPost] = useState({
    title: "Never let your memories be greater than your dreams",
  });

  return (
    <div className="max-w-screen-xl mx-auto">
      <NavBar />
      <main className="m-8">
        <div className="bg-neutral-50 p-4 drop-shadow-xl rounded-xl my-8">
          <Image
            src="/jpeg/photo-ship.jpg"
            alt=""
            width={1920}
            height={100}
            className="rounded-xl"
          />
        </div>

        <article className="bg-neutral-50 p-10 drop-shadow-xl rounded-xl my-8">
          <PostHeader posts={post} />
          <p className="mb-5">
            Before long the searchlight discovered some distance away a schooner
            with all sails set, apparently the same vessel which had been
            noticed earlier in the evening. The wind had by this time backed to
            the east, and there was a shudder amongst the watchers on the cliff
            as they realized the terrible danger in which she now was. Between
            her and the port lay the great flat reef on which so many good ships
            have from time to time suffered, and, with the wind blowing from its
            present quarter, it would be quite impossible that she should fetch
            the entrance of the harbour.
          </p>

          <h2 className="text-2xl font-bold mt-7 mb-3">
            Wherever you go, go with all your heart
          </h2>
          <p className="mb-5">
            It was now nearly the hour of high tide, but the waves were so great
            that in their troughs the shallows of the shore were almost visible,
            and the schooner, with all sails set, was rushing with such speed
            that, in the words of one old salt, &#8220;she must fetch up
            somewhere, if it was only in hell.
          </p>
          <p className="mb-5">
            Then came another rush of sea-fog, greater than any hitherto--a mass
            of dank mist, which seemed to close on all things like a grey pall,
            and left available to men only the organ of hearing, for the roar of
            the tempest, and the crash of the thunder, and the booming of the
            mighty billows came through the damp oblivion even louder than
            before.
          </p>

          <PostQuoteBlock quote="A mind that is stretched by a new experience can never go back to its old dimensions" />
        </article>
      </main>
    </div>
  );
};

export default PostFullwidth;
