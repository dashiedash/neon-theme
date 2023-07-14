/*
-------------
| Utilities |
-------------
*/
// Libraries
import React from "react";

/*
--------------
| Components |
--------------
*/
export const NewsletterFooter = () => {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <section className="my-8">
      <header>
        <h2 className="font-bold mb-2">Newsletter</h2>
        <p className="mb-6">
          Get the latest posts delivered straight to your inbox.
        </p>
      </header>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            type="email"
            placeholder="Your email address"
            id="email"
            required
            aria-required="true"
            className="pl-6 pr-32 py-2 border border-gray-300 rounded-full w-full"
          />
          <button
            type="submit"
            className="text-white absolute top-0 right-0 h-full bg-rose-500 py-2 px-4 rounded-r-full hover:bg-rose-400">
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

