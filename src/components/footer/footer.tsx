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

/*
--------------
| Components |
--------------
*/
// Footer
const Footer = () => {
  return (
    <footer className="bg-white p-8 w-full">
      <div className="container grid lg:grid-cols-2 gap-x-8">
        <div className="container">
          <NewsletterFooter />
          <section className="my-8">
            <h2 className="font-bold">Follow Us</h2>
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
          <p className="text-sm">
            &copy;2023 Neon - All right Reserved. Proudly Published with Ghost
          </p>
        </div>
        <div className="container"></div>
        <div className="container"></div>
      </div>
    </footer>
  );
};

export default Footer;
