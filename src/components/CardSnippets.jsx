const CardSnippets = [
  {
    label: "Card #1",
    code: `<section className="p-2 space-y-5 bg-white border-2 border-black rounded-md">
    <div className="container p-2 border">
      <img
        src="/trashUI-logo.png"
        alt="Image"
        width="100px"
        className="mx-auto"
      />
    </div>
    <div>
      <h1 className="text-xl text-black/80 font-bold">Title</h1>
      <p className="text-black/60">Subtitle</p>
    </div>
  </section>`,
    component: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <section className="p-2 space-y-5 bg-white border-2 border-black rounded-md">
            <div className="container p-2 border">
              <img
                src="/trashUI-logo.png"
                alt="Image"
                width="100px"
                className="mx-auto"
              />
            </div>
            <div>
              <h1 className="text-xl text-black/80 font-bold">Title</h1>
              <p className="text-black/60">Subtitle</p>
            </div>
          </section>
        </div>
      </>
    ),
  },
  {
    label: "Card #2",
    code: `<section className="container p-5 bg-white border rounded-md shadow-md space-y-5 mx-auto">
    <h1 className="text-4xl text-black/80 font-bold">Headline</h1>
    <hr />
    <p className="text-lg text-black/70 font-semibold">Subheadline</p>
  </section>`,
    component: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <section className="container p-5 bg-white border rounded-md shadow-md space-y-5 mx-auto">
            <h1 className="text-4xl text-black/80 font-bold">Headline</h1>
            <hr />
            <p className="text-lg text-black/70 font-semibold">Subheadline</p>
          </section>
        </div>
      </>
    ),
  },
  {
    label: "Card #3",
    code: `<section className="flex items-center gap-10 p-5 bg-gray-100 hover:bg-teal-50 hover:scale-105 duration-300 rounded-md shadow-md">
    <img width="48" height="48" src="/trashUI-logo.png" alt="trash" />
    <div className="w-full space-y-3">
      <h1 className="text-xl text-black/80 font-bold">trashUI</h1>
      <p className="text-gray-500">"Collection of Components"</p>
      <hr />
      <p className="text-gray-800">2024</p>
    </div>
  </section>`,
    component: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <section className="flex items-center gap-10 p-5 bg-gray-100 hover:bg-teal-50 hover:scale-105 duration-300 rounded-md shadow-md">
            <img width="48" height="48" src="/trashUI-logo.png" alt="trash" />
            <div className="w-full space-y-3">
              <h1 className="text-xl text-black/80 font-bold">trashUI</h1>
              <p className="text-gray-500">"Collection of Components"</p>
              <hr />
              <p className="text-gray-800">2024</p>
            </div>
          </section>
        </div>
      </>
    ),
  },
  {
    label: "Card #4 (Transparent)",
    code: `<section className="p-3 border rounded-md space-y-3 hover:scale-105 duration-300">
    <h1 className="text-2xl text-black/80 font-bold">April 2023</h1>
    <hr />
    <p className="text-gray-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Perspiciatis, magni. Laborum dolorem quo eum reprehenderit
      delectus molestias blanditiis suscipit iste iusto. Odio explicabo
      fuga enim eveniet, aperiam sint reiciendis reprehenderit.
    </p>
  </section>`,
    component: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <section className="p-3 border rounded-md space-y-3 hover:scale-105 duration-300">
            <h1 className="text-2xl text-black/80 font-bold">April 2023</h1>
            <hr />
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, magni. Laborum dolorem quo eum reprehenderit
              delectus molestias blanditiis suscipit iste iusto. Odio explicabo
              fuga enim eveniet, aperiam sint reiciendis reprehenderit.
            </p>
          </section>
        </div>
      </>
    ),
  },
  // Add more card snippets as needed
];

export default CardSnippets;
