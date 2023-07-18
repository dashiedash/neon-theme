// Utilities
import { useState } from "react";
import Image from "next/image";

// Components
import { NavBar } from "@/components/header/nav-bar";
import {
  ArticleHeader,
  ArticleQuoteBlock,
  ArticleImage,
} from "@/components/main/article";
import { SocialLinks } from "@/components/main/social-links";
import { AuthorCard } from "@/components/main/author";
import { Tags, TagGroupMain, NewsletterMain } from "@/components/main/side";
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
              src="/jpeg/photo-ship.jpg"
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
                <div className="mx-20">
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

                <ArticleImage
                  imageSource="/jpeg/photo-owens1.jpg"
                  attribName="Jakob Owens"
                  attribNameLink="https://unsplash.com/@jakobowens1?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                  attribSource="Unsplash"
                  attribSourceLink="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                />
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
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default PostNoSidebar;
