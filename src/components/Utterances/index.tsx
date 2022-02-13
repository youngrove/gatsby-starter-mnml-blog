import React, { useRef, useEffect } from "react";

const Utterances = ({ repo }: { repo: string }) => {
  const commentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!commentRef.current) return;
    const utterances = document.createElement("script");
    const utterancesConfig = {
      src: "https://utteranc.es/client.js",
      repo: repo,
      "issue-term": "pathname",
      theme: "github-light",
      crossorigin: "anonymous",
      async: "true",
    };
    Object.entries(utterancesConfig).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });
    commentRef.current.appendChild(utterances);
  }, []);

  return <div ref={commentRef} />;
};

export default Utterances;
