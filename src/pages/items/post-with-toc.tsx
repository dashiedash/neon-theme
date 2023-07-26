// Utilities
import { useState } from "react";

// Components
import { NavBar } from "@/components/header/nav-bar";
import {
  ArticleHeader,
  ArticleQuoteBlock,
  ArticleImage,
  TableOfContents,
} from "@/components/main/article";
import { SocialLinks } from "@/components/main/social-links";
import { AuthorCard } from "@/components/main/author";
import { Tags, TagGroupMain, NewsletterMain } from "@/components/main/side";
import Footer from "@/components/footer/footer";

// Content
const PostWithToc = () => {
  const [post, setPost] = useState({
    title: "Self-observation is the first step of inner unfolding",
    author: ["Biswajit Saha"],
    publishDate: "May 2, 2022",
    readTime: "4 min read",
    tags: ["Lifestyle"],
  });

  const headings = [
    {
      title: "I’ll never forget my father’s advice",
      id: "ill-never-forget-my-fathers-advice",
    },
    {
      title: "Quitters never win. Winners never quit!",
      id: "quitters-never-win-winners-never-quit",
    },
    {
      title: "Suspendisse iaculis rutrum felis, et cursus",
      id: "suspendisse-iaculis-rutrum-felis-et-cursus",
    },
    {
      title: "Quisque quis est vitae mi elementum finibus",
      id: "quisque-quis-est-vitae-mi-elementum-finibus",
    },
    {
      title: "Donec efficitur massa nisi",
      id: "donec-efficitur-massa-nisi",
    },
    {
      title: "Aenean luctus lorem nec orci rutrum vulputate",
      id: "aenean-luctus-lorem-nec-orci-rutrum-vulputate",
    },
    {
      title: "Maecenas sollicitudin euismod risus",
      id: "maecenas-sollicitudin-euismod-risus",
    },
  ];

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
                    imageSource="/jpeg/photo-balland1.jpg"
                    attribName="Mael BALLAND"
                    attribNameLink="https://unsplash.com/@mael_balland?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                    attribSource="Unsplash"
                    attribSourceLink="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                  />
                </div>

                <Tags tags={post.tags} />

                <ArticleHeader posts={post} />

                <TableOfContents headings={headings} />

                <p className="mb-5">
                  Almost instantly the whole truth of the transaction seemed to
                  rush upon her mind, and her wrath was inconceivably violent.
                  She asked me a thousand questions in a breath; but,
                  fortunately, was too vehement to attend to my embarrassment,
                  which must otherwise have betrayed my knowledge of the deceit.
                  Revenge was her first wish; and she vowed she would go the
                  next morning to Justice Fielding, and inquire what punishment
                  she might lawfully inflict upon the Captain for his assault.
                </p>

                <div className="my-8">
                  <ArticleImage
                    imageSource="/jpeg/photo-dissel1.jpg"
                    attribName="Austin Dissel"
                    attribNameLink="https://unsplash.com/@austindistel?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                    attribSource="Unsplash"
                    attribSourceLink="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                  />
                </div>

                <p className="mb-5">
                  I believe we were an hour at Bishopsgate Street before poor
                  Madame Duval could allow any thing to be mentioned but her own
                  story; at any length, however, Mr. Branghton told her, that M.
                  Du Bois, and all his own family, were waiting for her at his
                  house. A hackney-coach was then called, and we proceeded to
                  Snow Hill.
                </p>

                <section>
                  <h2
                    className="text-3xl font-bold mt-7 mb-3"
                    id="ill-never-forget-my-fathers-advice">
                    I&rsquo;ll never forget my father&rsquo;s advice
                  </h2>
                  <p className="mb-5">
                    Mr. Branghton&rsquo;s house is small and inconvenient;
                    though his shop, which takes in all the ground floor, is
                    large and commodious. I believe I told you before, that he
                    is a silver-smith.
                  </p>

                  <ArticleQuoteBlock quote="Inspiration is a message from your unconscious wisdom telling you to go out there and be the fullest, most positive expression of you who you REALLY are" />

                  <ul className="list-disc ml-5 mb-5 space-y-2">
                    <li>
                      We were conducted up two pairs of stairs: for the
                      dining-room, Mr. Branghton told us, was let. His two
                      daughters, their brother, M. Du Bois, and a young man,
                      were at tea.
                    </li>

                    <li>
                      They had waited some time for Madame Duval, but I found
                      they had not any expectation that I should accompany her;
                      and the young ladies.
                    </li>

                    <li>
                      I believe, were rather more surprised than pleased when I
                      made my appearance; for they seemed hurt that I should see
                      their apartment.
                    </li>

                    <li>
                      Indeed, I would willingly have saved them that pain, had
                      it been in my power.
                    </li>
                  </ul>

                  <div className="my-8">
                    <ArticleImage
                      imageSource="/jpeg/photo-mars1.jpg"
                      attribName="bruce mars"
                      attribNameLink="https://unsplash.com/@brucemars?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                      attribSource="Unsplash"
                      attribSourceLink="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                    />
                  </div>

                  <p className="mb-5">
                    The first person who saw me was M. Du Bois, &ldquo;Ah, mon
                    Dieu!&rdquo; exclaimed he, &ldquo;voila Mademoiselle!&rdquo;
                  </p>

                  <p className="mb-5">
                    &ldquo;Goodness,&rdquo; cried young Branghton, &ldquo;if
                    there isn&lsquo;t Miss!&rdquo;
                  </p>

                  <p className="mb-5">
                    &ldquo;Lord, so there is!&rdquo; said Miss Polly;
                    &ldquo;well, I&rsquo;m sure I should never have dreamed of
                    Miss&rsquo;s coming.&rdquo;
                  </p>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold mt-7 mb-3"
                    id="quitters-never-win-winners-never-quit">
                    Quitters never win. Winners never quit!
                  </h2>

                  <p className="mb-5">
                    &ldquo;Nor I neither, I&rsquo;m sure,&ldquo; cried Miss
                    Branghton, &ldquo;or else I would not have been in this room
                    to see her: I&rsquo;m quite ashamed about it;-only not
                    thinking of seeing any body but my aunt-however, Tom,
                    it&rsquo;s all your fault; for, you know very well I wanted
                    to borrow Mr. Smith&rsquo;s room, only you were so grumpy
                    you would not let me.&rdquo;
                  </p>

                  <div className="my-8">
                    <ArticleImage
                      imageSource="/jpeg/photo-freestocks1.jpg"
                      attribName="freestocks.org"
                      attribNameLink="https://unsplash.com/@freestocks?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                      attribSource="Unsplash"
                      attribSourceLink="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"
                    />
                  </div>

                  <p className="mb-5">
                    &ldquo;Lord, what signifies?&rdquo; said her brother;
                    &ldquo;I dare be sworn Miss has been up two pair of stairs
                    before now;-ha&rsquo;n&rsquo;t you, Miss?&rdquo;
                  </p>

                  <p className="mb-5">
                    I begged that I might not give them the least disturbance;
                    and assured them that I had not any choice in regard to what
                    room we sat in.
                  </p>

                  <p className="mb-5">
                    &ldquo;Well,&rdquo; said Miss Polly, &ldquo;when you come
                    next, Miss, we&rsquo;ll have Mr. Smith&rsquo;s room: and
                    it&rsquo;s a very pretty one, and only up one pair of
                    stairs, and nicely furnished, and every thing.&rdquo;
                  </p>

                  <section>
                    <h3
                      className="text-2xl font-bold mt-7 mb-3"
                      id="suspendisse-iaculis-rutrum-felis-et-cursus">
                      Suspendisse iaculis rutrum felis, et cursus
                    </h3>

                    <p className="mb-5">
                      Tellus vestibulum eget. Sed arcu sapien, porttitor at
                      commodo eget, feugiat id turpis. Nam vitae ante vel augue
                      sagittis consequat non vel tellus. Duis volutpat interdum
                      lorem a sodales. Vestibulum condimentum lobortis quam non
                      tincidunt. Fusce sed turpis id nisl porttitor imperdiet in
                      ut magna.
                    </p>
                  </section>

                  <section>
                    <h3
                      className="text-2xl font-bold mt-7 mb-3"
                      id="quisque-quis-est-vitae-mi-elementum-finibus">
                      Quisque quis est vitae mi elementum finibus
                    </h3>

                    <p className="mb-5">
                      Nullam finibus laoreet tortor vel fringilla. Nam vel erat
                      vel justo ornare aliquam vel et metus. Suspendisse
                      convallis quis felis quis bibendum. Phasellus euismod
                      lorem et iaculis molestie. Quisque sit amet augue quis
                      ipsum molestie lobortis ut non felis. In hendrerit erat
                      sed nulla luctus, et tincidunt lacus malesuada.
                    </p>
                  </section>

                  <section>
                    <h3
                      className="text-2xl font-bold mt-7 mb-3"
                      id="donec-efficitur-massa-nisi">
                      Donec efficitur massa nisi
                    </h3>

                    <p className="mb-5">
                      At auctor risus tristique ac. Vestibulum tincidunt, eros a
                      ultricies laoreet, velit tortor semper enim, et molestie
                      mauris purus vel lectus. Orci varius natoque penatibus et
                      magnis dis parturient montes, nascetur ridiculus mus. Nam
                      egestas sem maximus vehicula commodo.
                    </p>

                    <p className="mb-5">
                      Praesent pulvinar, metus vel malesuada tristique, felis
                      tortor lacinia nisi, in ultrices velit sem nec enim. In
                      massa nisl, pulvinar viverra elit non, aliquam pretium
                      nulla. Sed non suscipit quam, non fermentum ligula
                    </p>

                    <p className="mb-5">
                      Suspendisse volutpat metus eu sagittis iaculis. Mauris sit
                      amet sapien sollicitudin, gravida lacus id, posuere
                      sapien. Nam dictum orci nec ex semper, vel lacinia risus
                      porttitor. Sed augue lorem, ornare ac imperdiet auctor,
                      commodo ut urna. Mauris feugiat, dui in ultrices cursus,
                      orci augue scelerisque turpis, id pulvinar lectus dui et
                      neque.
                    </p>
                  </section>

                  <section>
                    <h3
                      className="text-2xl font-bold mt-7 mb-3"
                      id="aenean-luctus-lorem-nec-orci-rutrum-vulputate">
                      Aenean luctus lorem nec orci rutrum vulputate
                    </h3>

                    <p className="mb-5">
                      Mauris elit magna, congue id ante non, efficitur sodales
                      lorem. Praesent at eros sed est gravida euismod non vitae
                      massa.
                    </p>

                    <p className="mb-5">
                      Morbi consectetur maximus nulla sed rhoncus. Vivamus
                      hendrerit lectus tellus, lacinia sollicitudin nibh congue
                      porta. Ut at ex neque. Phasellus aliquet venenatis
                      consequat. Nam id nibh purus. Pellentesque aliquam ante eu
                      ante ultrices, sed vestibulum nibh lacinia. Nunc vitae
                      congue est, quis aliquam ipsum. Praesent elementum
                      condimentum elit vitae sagittis. Nunc luctus rhoncus urna,
                      sed rutrum lacus commodo vitae.
                    </p>
                  </section>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold mt-7 mb-3"
                    id="maecenas-sollicitudin-euismod-risus">
                    Maecenas sollicitudin euismod risus
                  </h2>

                  <p className="mb-5">
                    Sit amet accumsan mi hendrerit vitae. Maecenas ornare eros
                    id faucibus viverra. Nullam eu mauris at sapien sodales
                    blandit sit amet in nulla.
                  </p>

                  <p className="mb-5">
                    Aenean efficitur placerat massa, et congue dui facilisis
                    eget. In pellentesque nunc quam, vulputate vestibulum purus
                    mattis id. Suspendisse ut tempus felis. Vestibulum tempor
                    lacinia varius. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                  </p>

                  <p className="mb-5">
                    In sodales ut diam nec molestie. Donec sit amet nisl odio.
                    Ut fringilla est libero, eu mattis eros scelerisque
                    faucibus. Sed ornare nisi laoreet eros tempus, auctor
                    lacinia tellus varius. Sed pulvinar sem euismod, facilisis
                    orci quis, imperdiet massa. Nam metus magna, suscipit quis
                    lectus non, consequat rhoncus ipsum.
                  </p>

                  <p className="mb-5">
                    Nunc sit amet laoreet ex. In hac habitasse platea dictumst.
                    Cras vulputate, diam sed hendrerit pharetra, nisl felis
                    viverra augue, sed suscipit nunc ante non sem. Nulla id
                    ligula id ipsum hendrerit ornare vitae et metus. Donec in
                    turpis vitae felis maximus faucibus.
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

export default PostWithToc;
