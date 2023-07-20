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

                  <p className="mb-5">
                    From that time forward, Mr. Utterson began to haunt the door
                    in the by-street of shops. In the morning before office
                    hours, at noon when business was plenty, and time scarce, at
                    night under the face of the fogged city moon, by all lights
                    and at all hours of solitude or concourse, the lawyer was to
                    be found on his chosen post.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mt-7 mb-3">
                    Climb the mountain so you can see the world
                  </h2>

                  <p className="mb-5">
                    And at last his patience was rewarded. It was a fine dry
                    night; frost in the air; the streets as clean as a ballroom
                    floor; the lamps, unshaken by any wind, drawing a regular
                    pattern of light and shadow. By ten o&rsquo;clock, when the
                    shops were closed the by-street was very solitary and, in
                    spite of the low growl of London from all round, very
                    silent. Small sounds carried far; domestic sounds out of the
                    houses were clearly audible on either side of the roadway;
                    and the rumour of the approach of any passenger preceded him
                    by a long time.
                  </p>

                  <div className="my-8">
                    <ArticleImage
                      imageSource="/jpeg/photo-ahmed1.jpg"
                      attribName="Erol Ahmed"
                      attribNameLink="https://unsplash.com/@erol?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                      attribSource="Unsplash"
                      attribSourceLink="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                    />
                  </div>

                  <ul className="list-disc ml-5 mb-5 space-y-2">
                    <li>
                      Mr. Utterson had been some minutes at his post, when he
                      was aware of an odd light footstep drawing near.
                    </li>

                    <li>
                      In the course of his nightly patrols, he had long grown
                      accustomed to the quaint effect with which the footfalls
                      of a single person, while he is still a great way off,
                      suddenly spring out distinct from the vast hum and clatter
                      of the city.
                    </li>

                    <li>
                      Yet his attention had never before been so sharply and
                      decisively arrested; and it was with a strong,
                      superstitious prevision of success that he withdrew into
                      the entry of the court.
                    </li>

                    <li>
                      The steps drew swiftly nearer, and swelled out suddenly
                      louder as they turned the end of the street.
                    </li>

                    <li>
                      The lawyer, looking forth from the entry, could soon see
                      what manner of man he had to deal with.
                    </li>

                    <li>
                      He was small and very plainly dressed and the look of him,
                      even at that distance, went somehow strongly against the
                      watcher&rsquo;s inclination.
                    </li>
                  </ul>

                  <p className="mb-5">
                    Mr. Utterson stepped out and touched him on the shoulder as
                    he passed. &ldquo;Mr. Hyde, I think?&ldquo;
                  </p>

                  <p className="mb-5">
                    Mr. Hyde shrank back with a hissing intake of the breath.
                    But his fear was only momentary; and though he did not look
                    the lawyer in the face, he answered coolly enough: “That is
                    my name. What do you want?”
                  </p>

                  <div className="my-8">
                    <ArticleImage
                      imageSource="/jpeg/photo-crew1.jpg"
                      attribName="Crew"
                      attribNameLink="https://unsplash.com/@crew?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                      attribSource="Unsplash"
                      attribSourceLink="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                    />
                  </div>

                  <p className="mb-5">
                    &ldquo;I see you are going in,&rdquo; returned the lawyer.
                    &ldquo;I am an old friend of Dr. Jekyll&rsquo;s--Mr.
                    Utterson of Gaunt Street--you must have heard of my name;
                    and meeting you so conveniently, I thought you might admit
                    me.&rdquo;
                  </p>

                  <p className="mb-5">
                    &ldquo;You will not find Dr. Jekyll; he is from home,&rdquo;
                    replied Mr. Hyde, blowing in the key. And then suddenly, but
                    still without looking up, &ldquo;How did you know me?&rdquo;
                    he asked.
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
