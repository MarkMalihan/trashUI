const ButtonSnippets = [
  {
    label: "Simple Buttons",
    code: `<div className="flex flex-wrap justify-center md:justify-start gap-5">
    <button className="px-4 py-2 border rounded-md bg-white  hover:bg-gray-800 hover:text-white">
      Button
    </button>
    <button className="px-4 py-2 border rounded-md text-white bg-gray-800  hover:bg-gray-900 ">
      Button
    </button>
    <button className="px-4 py-2 border rounded-full bg-white  hover:bg-gray-800 hover:text-white">
      Button
    </button>
    <button className="px-4 py-2 border rounded-full text-white bg-gray-800  hover:bg-gray-900 ">
      Button
    </button>
    <button className="px-4 py-2 border-2 rounded-md border-gray-800 bg-white  hover:bg-gray-800 hover:text-white">
      Button
    </button>
    <button className="px-4 py-2 border-2 rounded-full border-gray-800 hover:bg-gray-900 ">
      Button
    </button>
  </div>`,
    component: (
      <>
        <div className="flex flex-wrap justify-center md:justify-start gap-5">
          <button className="px-4 py-2 border rounded-md bg-white  hover:bg-gray-800 hover:text-white">
            Button
          </button>
          <button className="px-4 py-2 border rounded-md text-white bg-gray-800  hover:bg-gray-900 ">
            Button
          </button>
          <button className="px-4 py-2 border rounded-full bg-white  hover:bg-gray-800 hover:text-white">
            Button
          </button>
          <button className="px-4 py-2 border rounded-full text-white bg-gray-800  hover:bg-gray-900 ">
            Button
          </button>
          <button className="px-4 py-2 border-2 rounded-md border-gray-800 bg-white  hover:bg-gray-800 hover:text-white">
            Button
          </button>
          <button className="px-4 py-2 border-2 rounded-full border-gray-800 hover:bg-gray-900 ">
            Button
          </button>
        </div>
      </>
    ),
  },
  {
    label: "Button with icon",
    code: `<button className="px-4 py-2 border rounded-full shadow-md bg-green-400 hover:bg-green-500 hover:text-white">
  Button #2
</button>`,
    component: (
      <>
        <div className="flex justify-center md:justify-start">
          <button className="px-4 py-2 border rounded-md bg-white hover:bg-blue-500 hover:text-white">
            <div className="flex items-center gap-3">
              <img src="/trashUI-logo.png" alt="" width="30px" />
              <h1>trashUI</h1>
            </div>
          </button>
        </div>
      </>
    ),
  },
  {
    label: "Neobrutalism Button",
    code: `<button className="px-4 py-2 border-4 border-black border-r-8 border-b-8 border-r-black border-b-black rounded-md text-white  bg-red-600 hover:bg-red-700 hover:scale-105">
    Button #3
</button>`,
    component: (
      <>
        <div className="flex justify-center md:justify-start">
          <button className="px-4 py-2 border-4 border-black border-r-8 border-b-8 border-r-black border-b-black rounded-md text-white  bg-red-600 hover:bg-red-700 hover:scale-105">
            Button #3
          </button>
        </div>
      </>
    ),
  },
  // Add more button snippets as needed
];

export default ButtonSnippets;
