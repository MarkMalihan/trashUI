import React from "react";

function Testimonial() {
  return (
    <>
      <section className="container p-5 space-y-5 mx-auto">
        <h1 className="text-xl text-black/80 font-bold">Testimonial</h1>
        <hr />
        <p className="leading-loose text-justify text-black/80">
          "Good grief, what on earth is this UI? It's an absolute disaster! It's
          like someone threw a bunch of design principles into a blender and hit
          the 'chaos' button. The color scheme is more mismatched than a
          blindfolded toddler picking out clothes. And don't get me started on
          the layout – it's like a maze designed by someone who's never seen a
          user interface in their life! I wouldn't serve this to my worst enemy.
          It's a UI nightmare, an abomination. I need a digital palate cleanser
          just looking at it!"
        </p>
        <p className="text-end text-black/70">
          -Not someone from my imagination (Real)
        </p>

        <p className="leading-loose text-justify text-black/80">
          "Oh, blimey! What do we have here? It's like the UI equivalent of a
          kitchen nightmare. The typography is a disaster – it's shouting at me
          like a chef with anger management issues. And the user experience?
          It's more confusing than a recipe written in hieroglyphics. I've seen
          smoother transitions in a kitchen on fire! This UI needs a makeover
          faster than you can say 'overcooked risotto.' It's so bad, it's making
          me want to swear in binary. Sort it out, or it's going in the UI
          garbage bin!"
        </p>
        <p className="text-end text-black/70">
          -Not someone from my imagination (Real)
        </p>
      </section>
    </>
  );
}

export default Testimonial;
