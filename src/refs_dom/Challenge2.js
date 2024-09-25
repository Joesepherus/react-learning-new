import React, { useRef } from "react";
import Layout from "../Layout";

export default function Page() {
  const inputRef = useRef();

  function focusOnInput() {
    inputRef.current.focus();
  }

  return (
    <Layout>
      <nav>
        <button onClick={focusOnInput}>Search</button>
      </nav>
      <input placeholder="Looking for something?" ref={inputRef} />
    </Layout>
  );
}
