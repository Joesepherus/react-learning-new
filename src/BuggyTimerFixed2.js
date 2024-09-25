import React, { useState, useEffect, useRef } from "react";
import Layout from "./Layout";

function BuggyTimerFixed2() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null); // Use a ref to store the interval ID

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Clean up the interval on component unmount
  }, []);

  return (
    <Layout>
      <div>
        <h1>{count}</h1>
        <button onClick={toggleTimer}>{isRunning ? "Pause" : "Start"}</button>
      </div>
    </Layout>
  );
}

export default BuggyTimerFixed2;
