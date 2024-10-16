import { useEffect } from "react";

export default function useInterval(onTick, delay) {
  useEffect(() => {
    const id = setInterval(() => {
      onTick();
    }, delay);
    return () => clearInterval(id);
  }, [delay, onTick]);
}
