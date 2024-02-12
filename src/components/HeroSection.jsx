import React from "react";

function HeroSection() {
  return (
    <>
      <section className="container p-5 border rounded-md space-y-5 mx-auto">
        <div className="flex items-center gap-4">
          <img src="/trashUI-logo.png" alt="" width="40px" />
          <h1 className="text-4xl text-black/80 font-bold">
            Welcome to trashUI
          </h1>
        </div>

        <hr />
        <p className="text-lg text-black/70 font-semibold">
          Collection of <span className="line-through">trash</span>
          <span className="line-through"> simple</span>
          <span className="font-bold">TRASH</span> UI components (using Tailwind
          CSS).
        </p>
      </section>
    </>
  );
}

export default HeroSection;
