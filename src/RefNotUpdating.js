import { useRef } from "react";
import Layout from "./Layout";

export default function RefNotUpdating() {
  let countRef = useRef(0);

  function handleClick() {
    // This doesn't re-render the component!
    countRef.current = countRef.current + 1;
  }

  return (
    <Layout>
      <button onClick={handleClick}>
        You clicked {countRef.current} times
      </button>
    </Layout>
  );
}
