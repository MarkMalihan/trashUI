import React, { useEffect } from "react";

function Layouts() {
  useEffect(() => {
    document.title = "Layouts";

    return () => {
      document.title = "trashUI";
    };
  }, []);

  return (
    <>
      <main className="mt-5 md:ml-56 p-5 space-y-10">
        <h1 className="text-xl text-black/80 font-bold">Layouts</h1>
      </main>
    </>
  );
}

export default Layouts;
