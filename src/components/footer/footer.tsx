/*
-------------
| Utilities |
-------------
*/
// Libraries
import React from "react";

// Outside Components
import { NewsletterFooter } from "./footercomp";
import { SocialLinks } from "../main/social-links";
import { TagGroupMain } from "../main/side";
import BackToTop from "@/components/navigation/back-to-top";

/*
--------------
| Components |
--------------
*/
// Footer
const Footer = () => {
  return (
    <footer className="bg-white px-4 py-16 w-full">
      <div className="mx-auto max-w-screen-xl container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8">
        <div className="container">
          <NewsletterFooter />
          <section className="my-8">
            <h2 className="sm:text-lg font-bold">Follow Us</h2>
            <div className="flex">
              <SocialLinks
                size={20}
                twitter="https://twitter.com/gbjsolution"
              />
              <SocialLinks
                size={20}
                facebook="https://www.facebook.com/gbjsolution"
              />
              <SocialLinks
                size={20}
                linkedin="https://neon.gbjsolution.com/never-let-your-memories-be-greater-than-your-dreams/#"
              />
              <SocialLinks
                size={20}
                instagram="https://neon.gbjsolution.com/never-let-your-memories-be-greater-than-your-dreams/#"
              />
              <SocialLinks
                size={20}
                github="https://neon.gbjsolution.com/never-let-your-memories-be-greater-than-your-dreams/#"
              />
            </div>
          </section>
        </div>
        <div className="container"></div>
        <div className="container">
          <TagGroupMain />
          <div className="flex justify-between flex-wrap">
            <a
              href=""
              className="mr-2 mb-2 hover:underline underline-offset-4 decoration-2 decoration-rose-500">
              Privacy Policy
            </a>
            <a
              href=""
              className="mr-2 mb-2 hover:underline underline-offset-4 decoration-2 decoration-rose-500">
              Terms and Conditions
            </a>
            <a
              href=""
              className="mr-2 mb-2 hover:underline underline-offset-4 decoration-2 decoration-rose-500">
              Contact
            </a>
          </div>
        </div>
        <div className="container flex items-center flex-wrap justify-between sm:col-span-2 md:col-span-3">
          <p className="text-sm">
            &copy;2023 Neon - All right Reserved. Proudly Published with Ghost
          </p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
