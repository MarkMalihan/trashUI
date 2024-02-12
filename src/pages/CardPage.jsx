import React, { useEffect } from "react";
import CodeSnippet from "../components/CodeSnippet";
import CardSnippets from "../components/CardSnippets";

function CardPage() {
  useEffect(() => {
    document.title = "Cards";

    return () => {
      document.title = "trashUI";
    };
  }, []);

  return (
    <>
      <main className="mt-5 md:ml-56 p-5 space-y-5">
        <h1 className="text-xl text-black/80 font-bold">Cards</h1>
        <hr />
        <CodeSnippet snippets={CardSnippets} />
      </main>
    </>
  );
}

export default CardPage;
