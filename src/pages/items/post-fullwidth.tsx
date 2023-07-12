import { useState } from "react";
import Image from "next/image";
import { NavBar } from "@/components/header/nav-bar";
import { PostHeader, PostQuoteBlock, PostImage } from "@/components/main/post";

const PostFullwidth = () => {
  const [post, setPost] = useState({
    title: "Never let your memories be greater than your dreams",
    author: "Apurba Talukdar & Ishan Sharma",
    publishDate: "May 2, 2022",
    readTime: "4 min read",
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
            className="rounded-xl max-h-32 md:max-h-96 object-cover"
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

          <PostImage
            imageSource="/jpeg/photo-owens1.jpg"
            attribName="Jakob Owens"
            attribNameLink="https://unsplash.com/@jakobowens1?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
            attribSource="Unsplash"
            attribSourceLink="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
          />

          <p className="mb-5">
            Then came another rush of sea-fog, greater than any hitherto--a mass
            of dank mist, which seemed to close on all things like a grey pall,
            and left available to men only the organ of hearing, for the roar of
            the tempest, and the crash of the thunder, and the booming of the
            mighty billows came through the damp oblivion even louder than
            before.
          </p>

          <PostQuoteBlock quote="A mind that is stretched by a new experience can never go back to its old dimensions" />

          <p className="mb-5">
            The rays of the searchlight were kept fixed on the harbour mouth
            across the East Pier, where the shock was expected, and men waited
            breathless. The wind suddenly shifted to the north-east, and the
            remnant of the sea-fog melted in the blast; and then, mirabile
            dictu, between the piers, leaping from wave to wave as it rushed at
            headlong speed, swept the strange schooner before the blast, with
            all sail set, and gained the safety of the harbour.
          </p>

          <PostImage
            imageSource="/jpeg/photo-neill1.jpg"
            attribName="Austin Neill"
            attribNameLink="https://unsplash.com/@arstyy?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
            attribSource="Unsplash"
            attribSourceLink="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
          />

          <h2 className="text-2xl font-bold mt-7 mb-3">
            Life is short and the world is wide
          </h2>
          <ul className="list-disc ml-5 mb-5">
            <li className="mb-3">
              The searchlight followed her, and a shudder ran through all who
              saw her, for lashed to the helm was a corpse, with drooping head,
              which swung horribly to and fro at each motion of the ship.
            </li>

            <li className="mb-3">
              No other form could be seen on deck at all. A great awe came on
              all as they realised that the ship, as if by a miracle, had found
              the harbour, unsteered save by the hand of a dead man! However,
              all took place more quickly than it takes to write these words.
            </li>

            <li className="mb-3">
              The schooner paused not, but rushing across the harbour, pitched
              herself on that accumulation of sand and gravel washed by many
              tides and many storms into the south-east corner of the pier
              jutting under the East Cliff, known locally as Tate Hill Pier.
            </li>
          </ul>

          <PostQuoteBlock quote="Without new experiences, something inside of us sleeps. The sleeper must awaken. – Frank Herbert" />

          <p className="mb-3">
            There was of course a considerable concussion as the vessel drove up
            on the sand heap. Every spar, rope, and stay was strained, and some
            of the &#8220;top-hammer&#8221; came crashing down. But, strangest
            of all, the very instant the shore was touched, an immense dog
            sprang up on deck from below, as if shot up by the concussion, and
            running forward, jumped from the bow on the sand.
          </p>

          <PostImage
            imageSource="/jpeg/photo-tarampi1.jpg"
            attribName="Randy Tarampi"
            attribNameLink="https://unsplash.com/@randytarampi?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
            attribSource="Unsplash"
            attribSourceLink="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
          />

          <p className="mb-3">
            Making straight for the steep cliff, where the churchyard hangs over
            the laneway to the East Pier so steeply that some of the flat
            tombstones--&#8220;thruff-steans&#8221; or
            &#8220;through-stones,&#8221; as they call them in the Whitby
            vernacular--actually project over where the sustaining cliff has
            fallen away, it disappeared in the darkness, which seemed
            intensified just beyond the focus of the searchlight.
          </p>

          <p className="mb-3">
            It so happened that there was no one at the moment on Tate Hill
            Pier, as all those whose houses are in close proximity were either
            in bed or were out on the heights above. Thus the coastguard on duty
            on the eastern side of the harbour, who at once ran down to the
            little pier, was the first to climb on board. The men working the
            searchlight, after scouring the entrance of the harbour without
            seeing anything, then turned the light on the derelict and kept it
            there.
          </p>
        </article>
      </main>
    </div>
  );
};

export default PostFullwidth;
