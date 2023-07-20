// Utilities
import { useState } from "react";

// Components
import { NavBar } from "@/components/header/nav-bar";
import {
  ArticleHeader,
  ArticleQuoteBlock,
  ArticleImage,
  ExternalArticle,
} from "@/components/main/article";
import { SocialLinks } from "@/components/main/social-links";
import { AuthorCard } from "@/components/main/author";
import { Tags, TagGroupMain, NewsletterMain } from "@/components/main/side";
import Footer from "@/components/footer/footer";

// Content
const PostFullwidth = () => {
  const [post, setPost] = useState({
    title: "Stop worrying about the potholes in the road and enjoy the journey",
    author: ["Apurba Talukdar"],
    publishDate: "Oct 20, 2021",
    readTime: "4 min read",
    tags: ["Travel"],
  });

  return (
    <>
      <div className="mx-4">
        <header className="max-w-screen-xl mx-auto">
          <NavBar />
        </header>

        <main className="mx-auto my-8 max-w-screen-xl">
          <div className="grid lg:grid-cols-3 gap-x-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="bg-white p-8 drop-shadow-xl rounded-xl my-8">
                <div className="mb-8">
                  <ArticleImage
                    imageSource="/jpeg/photo-surface1.jpg"
                    attribName="Surface"
                    attribNameLink="https://unsplash.com/@surface?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                    attribSource="Unsplash"
                    attribSourceLink="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                  />
                </div>

                <Tags tags={post.tags} />
                <ArticleHeader posts={post} />
                <p className="mb-5">
                  Six o&rsquo;clock struck on the bells of the church that was
                  so conveniently near to Mr. Utterson&rsquo;s dwelling, and
                  still he was digging at the problem. Hitherto it had touched
                  him on the intellectual side alone; but now his imagination
                  also was engaged, or rather enslaved; and as he lay and tossed
                  in the gross darkness of the night and the curtained room, Mr.
                  Enfield&rsquo;s tale went by before his mind in a scroll of
                  lighted pictures.
                </p>

                <div className="my-8">
                  <ArticleImage
                    imageSource="/jpeg/photo-nevozhai1.jpg"
                    attribName="Denis Nevozhai"
                    attribNameLink="https://unsplash.com/@dnevozhai?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                    attribSource="Unsplash"
                    attribSourceLink="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                  />
                </div>

                <p className="mb-5">
                  He would be aware of the great field of lamps of a nocturnal
                  city; then of the figure of a man walking swiftly; then of a
                  child running from the doctor&rsquo;s; and then these met, and
                  that human Juggernaut trod the child down and passed on
                  regardless of her screams.
                </p>

                <section>
                  <h2 className="text-2xl font-bold mt-7 mb-3">
                    Travel with no regrets
                  </h2>
                  <p className="mb-5">
                    Or else he would see a room in a rich house, where his
                    friend lay asleep, dreaming and smiling at his dreams; and
                    then the door of that room would be opened, the curtains of
                    the bed plucked apart, the sleeper recalled, and lo! there
                    would stand by his side a figure to whom power was given,
                    and even at that dead hour, he must rise and do its bidding.
                  </p>

                  <ArticleQuoteBlock quote="Life begins at the end of your comfort zone" />

                  <p className="mb-5">
                    The figure in these two phases haunted the lawyer all night;
                    and if at any time he dozed over, it was but to see it glide
                    more stealthily through sleeping houses, or move the more
                    swiftly and still the more swiftly, even to dizziness,
                    through wider labyrinths of lamplighted city, and at every
                    street corner crush a child and leave her screaming. And
                    still the figure had no face by which he might know it; even
                    in his dreams, it had no face, or one that baffled him and
                    melted before his eyes; and thus it was that there sprang up
                    and grew apace in the lawyer&rsquo;s mind a singularly
                    strong, almost an inordinate, curiosity to behold the
                    features of the real Mr. Hyde. If he could but once set eyes
                    on him, he thought the mystery would lighten and perhaps
                    roll altogether away, as was the habit of mysterious things
                    when well examined.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mt-7 mb-3">
                    Leave yourself behind
                  </h2>

                  <p className="mb-5">
                    He might see a reason for his friend&rsquo;s strange
                    preference or bondage (call it which you please) and even
                    for the startling clause of the will. At least it would be a
                    face worth seeing: the face of a man who was without bowels
                    of mercy: a face which had but to show itself to raise up,
                    in the mind of the unimpressionable Enfield, a spirit of
                    enduring hatred.
                  </p>

                  <ExternalArticle
                    url="https://viox.gbjsolution.com/with-age-comes-wisdom-with-travel-comes-understanding/"
                    image="/jpeg/photo-1468434453985-b1ca3b555f00.jpg"
                    source="Viox"
                    author="Apurba Talukdar"
                  />
                </section>

                <section>
                  <h2 className="text-2xl font-bold mt-7 mb-3">
                    Life is short and the world is wide
                  </h2>
                  <ul className="list-disc ml-5 mb-5">
                    <li className="mb-3">
                      The searchlight followed her, and a shudder ran through
                      all who saw her, for lashed to the helm was a corpse, with
                      drooping head, which swung horribly to and fro at each
                      motion of the ship.
                    </li>

                    <li className="mb-3">
                      No other form could be seen on deck at all. A great awe
                      came on all as they realised that the ship, as if by a
                      miracle, had found the harbour, unsteered save by the hand
                      of a dead man! However, all took place more quickly than
                      it takes to write these words.
                    </li>

                    <li className="mb-3">
                      The schooner paused not, but rushing across the harbour,
                      pitched herself on that accumulation of sand and gravel
                      washed by many tides and many storms into the south-east
                      corner of the pier jutting under the East Cliff, known
                      locally as Tate Hill Pier.
                    </li>
                  </ul>

                  <ArticleQuoteBlock quote="Without new experiences, something inside of us sleeps. The sleeper must awaken. – Frank Herbert" />

                  <p className="mb-3">
                    There was of course a considerable concussion as the vessel
                    drove up on the sand heap. Every spar, rope, and stay was
                    strained, and some of the &#8220;top-hammer&#8221; came
                    crashing down. But, strangest of all, the very instant the
                    shore was touched, an immense dog sprang up on deck from
                    below, as if shot up by the concussion, and running forward,
                    jumped from the bow on the sand.
                  </p>

                  <ArticleImage
                    imageSource="/jpeg/photo-tarampi1.jpg"
                    attribName="Randy Tarampi"
                    attribNameLink="https://unsplash.com/@randytarampi?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                    attribSource="Unsplash"
                    attribSourceLink="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                  />

                  <p className="mb-3">
                    Making straight for the steep cliff, where the churchyard
                    hangs over the laneway to the East Pier so steeply that some
                    of the flat tombstones--&#8220;thruff-steans&#8221; or
                    &#8220;through-stones,&#8221; as they call them in the
                    Whitby vernacular--actually project over where the
                    sustaining cliff has fallen away, it disappeared in the
                    darkness, which seemed intensified just beyond the focus of
                    the searchlight.
                  </p>

                  <p className="mb-3">
                    It so happened that there was no one at the moment on Tate
                    Hill Pier, as all those whose houses are in close proximity
                    were either in bed or were out on the heights above. Thus
                    the coastguard on duty on the eastern side of the harbour,
                    who at once ran down to the little pier, was the first to
                    climb on board. The men working the searchlight, after
                    scouring the entrance of the harbour without seeing
                    anything, then turned the light on the derelict and kept it
                    there.
                  </p>
                </section>
              </article>

              <section className="bg-white text-center p-10 drop-shadow-xl rounded-xl my-8">
                <p className="text-lg font-bold">Share this article:</p>
                <SocialLinks
                  size={25}
                  facebook="https://www.facebook.com/sharer/sharer.php?u=https://neon.gbjsolution.com/never-let-your-memories-be-greater-than-your-dreams/"
                  twitter="https://twitter.com/share?text=Never%20let%20your%20memories%20be%20greater%20than%20your%20dreams&url=https://neon.gbjsolution.com/never-let-your-memories-be-greater-than-your-dreams/"
                  pinterest="http://pinterest.com/pin/create/button/?url=https://neon.gbjsolution.com/never-let-your-memories-be-greater-than-your-dreams/&media=https://images.unsplash.com/photo-1513436539083-9d2127e742f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDI5fHxkcmVhbXxlbnwwfHx8fDE2NzE0MzA3MTU&ixlib=rb-4.0.3&q=80&w=2000&description=Never%20let%20your%20memories%20be%20greater%20than%20your%20dreams"
                  whatsapp="whatsapp://send?text=https://neon.gbjsolution.com/never-let-your-memories-be-greater-than-your-dreams/"
                  linkedin="http://www.linkedin.com/shareArticle?mini=true&url=https://neon.gbjsolution.com/never-let-your-memories-be-greater-than-your-dreams/&title=Never%20let%20your%20memories%20be%20greater%20than%20your%20dreams"
                  mail="test"
                  website="https://neon.gbjsolution.com/never-let-your-memories-be-greater-than-your-dreams/#"
                />
              </section>

              <AuthorCard
                image="/jpeg/apurba-talukdar.jpg"
                name="Apurba Talukdar"
                location="Bangalore"
                desc="Apurba is UI & UX designer by profession, photographer by passion. Solo traveller, blogger, badminton player and movie lover."
              />

              <AuthorCard
                image="/jpeg/ishan-sharma.jpg"
                name="Ishan Sharma"
                location="Delhi"
                desc="Ishan is back end developer by profession and writer by passion. He writes science fiction novels and short story mostly for children. He is the always smiling person."
              />
            </div>

            {/* Sidebar */}
            <div className="">
              <div className="bg-white p-8 drop-shadow-xl rounded-xl my-8">
                <TagGroupMain />
                <NewsletterMain />
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default PostFullwidth;
