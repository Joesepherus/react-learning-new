import { useEffect } from "react";
// import { experimental_useEffectEvent as useEffectEvent } from "react";

export function useInterval(callback, delay) {
//   const onTick = useEffectEvent(callback);
  useEffect(() => {
    console.log("✅ Setting up an interval with delay ", delay);
    const id = setInterval(callback, delay);
    return () => {
      console.log("❌ Clearing an interval with delay ", delay);
      clearInterval(id);
    };
  }, [delay]);
}
