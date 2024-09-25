import { useState, useRef } from "react";
import Layout from "../Layout";

export default function ModifyDOMBreak() {
  const [show, setShow] = useState(true);
  const ref = useRef(null);

  return (
    <Layout>
      <div>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          Toggle with setState
        </button>
        <button
          onClick={() => {
            ref.current.remove();
          }}
        >
          Remove from the DOM
        </button>
        {show && <p ref={ref}>Hello world</p>}
      </div>
    </Layout>
  );
}
