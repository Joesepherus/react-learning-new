import { useRef } from "react";
import Layout from "../Layout";

export default function Focus() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <Layout>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </Layout>
  );
}
