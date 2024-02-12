import React from "react";

function UIElements() {
  return (
    <>
      <section className="container p-5 space-y-5 mx-auto">
        <h1 className="text-xl text-black/80 font-bold">
          UI Elements/Components
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          <button className="p-2 border rounded-md text-lg font-semibold hover:bg-gray-700 hover:text-white">
            Navs
          </button>
          <button className="p-2 border rounded-md text-lg font-semibold hover:bg-gray-700 hover:text-white">
            Buttons
          </button>
          <button className="p-2 border rounded-md text-lg font-semibold hover:bg-gray-700 hover:text-white">
            Cards
          </button>
          <button className="p-2 border rounded-md text-lg font-semibold hover:bg-gray-700 hover:text-white">
            Tables
          </button>
          <button className="p-2 border rounded-md text-lg font-semibold hover:bg-gray-700 hover:text-white">
            Footers
          </button>
        </div>
      </section>
    </>
  );
}

export default UIElements;
