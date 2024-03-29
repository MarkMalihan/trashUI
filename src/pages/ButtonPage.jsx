import React, { useEffect } from "react";
import CodeSnippet from "../components/CodeSnippet";
import ButtonSnippets from "../components/ButtonSnippets";

function ButtonPage() {
  useEffect(() => {
    document.title = "Buttons";

    return () => {
      document.title = "trashUI";
    };
  }, []);

  return (
    <>
      <main className="mt-5 md:ml-56 p-5 space-y-5">
        <h1 className="text-xl text-black/80 font-bold">Buttons</h1>
        <hr />
        <CodeSnippet snippets={ButtonSnippets} />
      </main>
    </>
  );
}

export default ButtonPage;
