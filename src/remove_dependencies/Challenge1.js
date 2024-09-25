import { useState, useEffect } from "react";
import Layout from "../Layout";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("✅ Creating an interval");
    const id = setInterval(() => {
      console.log("⏰ Interval tick");
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      console.log("❌ Clearing an interval");
      clearInterval(id);
    };
  }, []);

  return (
    <Layout>
      <h1>Counter: {count}</h1>
    </Layout>
  );
}
