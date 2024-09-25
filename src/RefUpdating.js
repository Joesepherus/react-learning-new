import { useRef, useEffect, useState } from "react";
import Layout from "./Layout";

export default function RefUpdating() {
  let countRef = useRef(0);
  const [render, setRender] = useState(0);

  function handleClick() {
    // This doesn't re-render the component!
    countRef.current = countRef.current + 1;
    // but this does
    setRender((render) => render + 1);
  }

  return (
    <Layout>
      <button onClick={handleClick}>
        You clicked {countRef.current} times
      </button>
    </Layout>
  );
}
