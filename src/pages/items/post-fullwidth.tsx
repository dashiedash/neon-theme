import { useState } from "react";
import Image from "next/image";
import { NavBar } from "@/components/header/nav-bar";

const PostFullwidth = () => {
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
          <h1 className="text-4xl font-bold mt-7 mb-3">
            Never let your memories be greater than your dreams
          </h1>
          <p className="my-3">
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
          <p className="my-3">
            It was now nearly the hour of high tide, but the waves were so great
            that in their troughs the shallows of the shore were almost visible,
            and the schooner, with all sails set, was rushing with such speed
            that, in the words of one old salt, "she must fetch up somewhere, if
            it was only in hell.
          </p>
        </article>
      </main>
    </div>
  );
};

export default PostFullwidth;
