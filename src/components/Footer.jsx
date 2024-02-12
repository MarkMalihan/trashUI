import React from "react";

function Footer() {
  return (
    <>
      <footer className="p-5 bottom-0 border-t">
        <section className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-5 p-3">
          <p>trashUI</p>
          <p className="hidden md:block">|</p>
          <p>Argel Malihan</p>
          <p className="hidden md:block">|</p>
          <p>Built with React JS and Tailwind CSS</p>
          <p className="hidden md:block">|</p>
          <p>
            Icon by <a href="https://icons8.com">Icons8</a>
          </p>
        </section>
      </footer>
    </>
  );
}

export default Footer;
