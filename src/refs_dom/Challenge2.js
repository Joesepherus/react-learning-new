import React, { useRef } from "react";

export default function Page() {
  const inputRef = useRef();

  function focusOnInput() {
    inputRef.current.focus()
  }

  return (
    <>
      <nav>
        <button onClick={focusOnInput}>Search</button>
      </nav>
      <input placeholder="Looking for something?" ref={inputRef}/>
    </>
  );
}
