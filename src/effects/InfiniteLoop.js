import { useState, useRef, useEffect } from "react";

export default function InfiniteLoop() {
  const [count, setCount] = useState(0);

// Effects run as a result of rendering. 
// Setting state triggers rendering. 
// Setting state immediately in an Effect is like plugging a power outlet into itself. 
// The Effect runs, it sets the state, which causes a re-render, 
// which causes the Effect to run, it sets the state again, 
// this causes another re-render, and so on.
  useEffect(() => {
    console.log("running effect")
    setCount(count + 1);
  });
  return <>Hello Infinite</>;
}
