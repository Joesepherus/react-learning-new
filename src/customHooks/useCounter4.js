import { useState } from "react";
import { useInterval } from "./useInterval4.js";

export function useCounter(delay) {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount((c) => c + 1);
  }, delay);
  return count;
}
