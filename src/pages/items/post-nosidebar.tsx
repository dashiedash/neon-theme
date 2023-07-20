// Utilities
import { useState } from "react";
import Image from "next/image";

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
import { Tags } from "@/components/main/side";
import Footer from "@/components/footer/footer";

// Content
const PostNoSidebar = () => {
  const [post, setPost] = useState({
    title: "I do not stick to rules when cooking. I rely on my imagination",
    author: ["Biswajit Saha"],
    publishDate: "April 12, 2022",
    readTime: "4 min read",
    tags: ["Food"],
  });

  return (
    <>
      <div className="mx-4">
        <header className="max-w-screen-xl mx-auto">
          <NavBar />
        </header>

        <main className="mx-auto my-8 max-w-screen-xl">
          <div className="bg-white p-4 drop-shadow-xl rounded-xl">
            <Image
              src="/jpeg/photo-brush-red.jpg"
              alt=""
              width={1920}
              height={100}
              className="rounded-xl max-h-32 md:max-h-96 object-cover"
            />
          </div>

          <div className="">
            {/* Main Content */}
            <div className="max-w-screen-lg mx-auto">
              <article className="bg-white p-8 drop-shadow-xl rounded-xl my-8">
                <div className="lg:mx-20">
                  <Tags tags={post.tags} />
                  <ArticleHeader posts={post} />
                  <p className="mb-5">
                    I walked down to the station with them, and then wandered
                    through the streets of the little town, finally returning to
                    the hotel, where I lay upon the sofa and tried to interest
                    myself in a yellow-backed novel. The puny plot of the story
                    was so thin, however, when compared to the deep mystery
                    through which we were groping, and I found my attention
                    wander so continually from the action to the fact, that I at
                    last flung it across the room and gave myself up entirely to
                    a consideration of the events of the day.
                  </p>
                  <p className="mb-5">
                    Supposing that this unhappy young man&rsquo;s story were
                    absolutely true, then what hellish thing, what absolutely
                    unforeseen and extraordinary calamity could have occurred
                    between the time when he parted from his father, and the
                    moment when, drawn back by his screams, he rushed into the
                    glade? It was something terrible and deadly.
                  </p>
                </div>

                <ArticleImage
                  imageSource="/jpeg/photo-olsson1.jpg"
                  attribName="Ella Olsson"
                  attribNameLink="https://unsplash.com/@ellaolsson?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                  attribSource="Unsplash"
                  attribSourceLink="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                />

                <div className="sm:mx-20">
                  <p className="mb-5">
                    What could it be? Might not the nature of the injuries
                    reveal something to my medical instincts? I rang the bell
                    and called for the weekly county paper, which contained a
                    verbatim account of the inquest. In the surgeon&rsquo;s
                    deposition it was stated that the posterior third of the
                    left parietal bone and the left half of the occipital bone
                    had been shattered by a heavy blow from a blunt weapon. I
                    marked the spot upon my own head. Clearly such a blow must
                    have been struck from behind.
                  </p>
                </div>

                <section className="sm:mx-20">
                  <h2 className="text-2xl font-bold mt-7 mb-3">
                    Cooking is a philosophy; it&rsquo;s not a recipe
                  </h2>

                  <p className="mb-5">
                    That was to some extent in favour of the accused, as when
                    seen quarrelling he was face to face with his father. Still,
                    it did not go for very much, for the older man might have
                    turned his back before the blow fell. Still, it might be
                    worth while to call Holmes&rsquo; attention to it. Then
                    there was the peculiar dying reference to a rat. What could
                    that mean? It could not be delirium. A man dying from a
                    sudden blow does not commonly become delirious. No, it was
                    more likely to be an attempt to explain how he met his fate.
                    But what could it indicate?
                  </p>
                </section>

                <section className="md:mx-20">
                  <h2 className="text-2xl font-bold mt-7 mb-3">
                    You don&rsquo;t come into cooking to get rich
                  </h2>

                  <p className="mb-5">
                    I cudgelled my brains to find some possible explanation. And
                    then the incident of the grey cloth seen by young McCarthy.
                    If that were true the murderer must have dropped some part
                    of his dress, presumably his overcoat, in his flight, and
                    must have had the hardihood to return and to carry it away
                    at the instant when the son was kneeling with his back
                    turned not a dozen paces off. What a tissue of mysteries and
                    improbabilities the whole thing was! I did not wonder at
                    Lestrade&rsquo;s opinion, and yet I had so much faith in
                    Sherlock Holmes&rsquo; insight that I could not lose hope as
                    long as every fresh fact seemed to strengthen his conviction
                    of young McCarthy&rsquo;s innocence.
                  </p>

                  <ArticleQuoteBlock quote="Cooking is like anything else: some people have an inborn talent for it. Some become expert by practicing, and some learn from books. - Laurie Colwin" />

                  <p className="mb-5">
                    It was late before Sherlock Holmes returned. He came back
                    alone, for Lestrade was staying in lodgings in the town.
                  </p>

                  <p className="mb-5">
                    &ldquo;The glass still keeps very high,&rdquo; he remarked
                    as he sat down. &ldquo;It is of importance that it should
                    not rain before we are able to go over the ground. On the
                    other hand, a man should be at his very best and keenest for
                    such nice work as that, and I did not wish to do it when
                    fagged by a long journey. I have seen young McCarthy.&rdquo;
                  </p>

                  <p className="mb-5">
                    &ldquo;And what did you learn from him?&rdquo;
                  </p>

                  <p className="mb-5">&ldquo;Nothing.&rdquo;</p>

                  <p className="mb-5">&ldquo;Could he throw no light?&rdquo;</p>

                  <p className="mb-5">
                    &ldquo;None at all. I was inclined to think at one time that
                    he knew who had done it and was screening him or her, but I
                    am convinced now that he is as puzzled as everyone else. He
                    is not a very quick-witted youth, though comely to look at
                    and, I should think, sound at heart.&rdquo;
                  </p>

                  <p className="mb-5">
                    &ldquo;I cannot admire his taste,&rdquo; I remarked,
                    &ldquo;if it is indeed a fact that he was averse to a
                    marriage with so charming a young lady as this Miss
                    Turner.&rdquo;
                  </p>
                </section>

                <ArticleImage
                  imageSource="/jpeg/photo-heuvel1.jpg"
                  attribName="Maarten van den Heuvel"
                  attribNameLink="https://unsplash.com/@mvdheuvel?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                  attribSource="Unsplash"
                  attribSourceLink="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                />

                <section className="md:mx-20">
                  <p className="mb-5">
                    &ldquo;Ah, thereby hangs a rather painful tale. This fellow
                    is madly, insanely, in love with her, but some two years
                    ago, when he was only a lad, and before he really knew her,
                    for she had been away five years at a boarding-school, what
                    does the idiot do but get into the clutches of a barmaid in
                    Bristol and marry her at a registry office? No one knows a
                    word of the matter, but you can imagine how maddening it
                    must be to him to be upbraided for not doing what he would
                    give his very eyes to do, but what he knows to be absolutely
                    impossible.
                  </p>

                  <ExternalArticle
                    url="https://saima.gbjsolution.com/believe-in-your-cooking-skills-but-never-stop-improving/"
                    source="Saima Gal"
                    author="Apurba Talukdar"
                    image="/jpeg/photo-ext1.jpg"
                  />

                  <p className="mb-5">
                    It was sheer frenzy of this sort which made him throw his
                    hands up into the air when his father, at their last
                    interview, was goading him on to propose to Miss Turner. On
                    the other hand, he had no means of supporting himself, and
                    his father, who was by all accounts a very hard man, would
                    have thrown him over utterly had he known the truth. It was
                    with his barmaid wife that he had spent the last three days
                    in Bristol, and his father did not know where he was.
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
                image="/jpeg/biswajit-saha.jpeg"
                name="Biswajit Saha"
                location="Kolkata"
                desc="Biswajit Saha is a very simple person. He likes to ride a bicycle when free. Prefers tea over coffee. He is currently writing code at gbjsolution.com"
              />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default PostNoSidebar;
