import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { grayscale } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";

function CodeSnippet({ snippets }) {
  const [copied, setCopied] = useState(Array(snippets.length).fill(false));

  const handleCopy = (index) => {
    setCopied((prev) => {
      const newCopied = [...prev];
      newCopied[index] = true;
      return newCopied;
    });

    setTimeout(() => {
      setCopied((prev) => {
        const newCopied = [...prev];
        newCopied[index] = false;
        return newCopied;
      });
    }, 1500);
  };

  return (
    <>
      {snippets.map((snippet, index) => (
        <React.Fragment key={index}>
          <div>{snippet.component}</div>

          <section className="p-3 space-y-3 border bg-gray-800 rounded-md">
            <div className="flex items-center justify-between">
              <h1 className="text-white">{`${snippet.label}`}</h1>
              {/* Copy Button */}
              <CopyToClipboard
                text={snippet.code}
                onCopy={() => handleCopy(index)}
              >
                <button className="text-white">
                  {copied[index] ? "Copied!" : "Copy"}
                </button>
              </CopyToClipboard>
            </div>

            <SyntaxHighlighter
              language="javascript"
              style={grayscale}
              wrapLongLines={true}
            >
              {snippet.code}
            </SyntaxHighlighter>
          </section>
        </React.Fragment>
      ))}
    </>
  );
}

export default CodeSnippet;
