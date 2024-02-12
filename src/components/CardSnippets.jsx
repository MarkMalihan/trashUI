const CardSnippets = [
  {
    label: "Card #1",
    code: `<section className="p-2 space-y-5 border rounded-md">
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
          <section className="p-2 space-y-5 border rounded-md">
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
    code: `<section className="container p-5 border rounded-md space-y-5 mx-auto">
    <h1 className="text-4xl text-black/80 font-bold">Headline</h1>
    <hr />
    <p className="text-lg text-black/70 font-semibold">Subheadline</p>
  </section>`,
    component: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <section className="container p-5 border rounded-md space-y-5 mx-auto">
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
    code: `<div className="card">Card #3</div>`,
    component: <div className="card">Card #3</div>,
  },
  // Add more card snippets as needed
];

export default CardSnippets;
