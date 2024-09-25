import React, { useRef } from "react";
import SearchButton from "./SearchButton.js";
import SearchInput from "./SearchInput.js";
import Layout from "../Layout.js";

export default function Page() {
  const inputRef = useRef();

  function handleClick() {
    console.log("inputRef: ", inputRef);
    inputRef.current.focus();
  }

  return (
    <Layout>
      <nav>
        <SearchButton onClick={handleClick} />
      </nav>
      <SearchInput ref={inputRef} />
    </Layout>
  );
}
