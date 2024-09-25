import { useState, useRef, useEffect } from "react";
import Layout from "../Layout";

export default function InfiniteLoop() {
  const [count, setCount] = useState(0);

  // Simple empty dependency causes the effect to run only on mount once
  useEffect(() => {
    console.log("running effect");
    setCount(count + 1);
  }, []);

  return <Layout> Hello Infinite Fix</Layout>;
}
