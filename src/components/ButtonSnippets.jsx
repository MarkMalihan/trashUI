const ButtonSnippets = [
  {
    label: "Button #1",
    code: `<button className="px-4 py-2 border rounded-md bg-blue-400 hover:bg-blue-600 hover:text-white">
  Button #1
</button>`,
    component: (
      <>
        <div className="flex justify-center md:justify-start">
          <button className="px-4 py-2 border rounded-md bg-blue-400 hover:bg-blue-600 hover:text-white">
            Button #1
          </button>
        </div>
      </>
    ),
  },
  {
    label: "Button #2",
    code: `<button className="px-4 py-2 border rounded-full shadow-md bg-green-400 hover:bg-green-600 hover:text-white">
  Button #2
</button>`,
    component: (
      <>
        <div className="flex justify-center md:justify-start">
          <button className="px-4 py-2 border rounded-full shadow-md bg-green-400 hover:bg-green-600 hover:text-white">
            Button #2
          </button>
        </div>
      </>
    ),
  },
  {
    label: "Button #3",
    code: `<button className="px-4 py-2 border-r-4 border-b-4 border-r-black border-b-black rounded-md bg-red-400 hover:bg-red-600 hover:text-white hover:border-r-8 hover:border-b-8 hover:scale-105">
  Button #3
</button>`,
    component: (
      <>
        <div className="flex justify-center md:justify-start">
          <button className="px-4 py-2 border-r-4 border-b-4 border-r-black border-b-black rounded-md bg-red-400 hover:bg-red-600 hover:text-white hover:border-r-8 hover:border-b-8 hover:scale-105">
            Button #3
          </button>
        </div>
      </>
    ),
  },
  // Add more button snippets as needed
];

export default ButtonSnippets;
