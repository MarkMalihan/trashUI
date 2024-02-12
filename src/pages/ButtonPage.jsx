import React, { useEffect } from "react";

function ButtonPage() {
  useEffect(() => {
    document.title = "Buttons";

    return () => {
      document.title = "trashUI";
    };
  }, []);
  return (
    <>
      <main className="mt-5 md:ml-56 p-5 space-y-10">
        <h1 className="text-xl text-black/80 font-bold">Buttons</h1>
      </main>
    </>
  );
}

export default ButtonPage;
