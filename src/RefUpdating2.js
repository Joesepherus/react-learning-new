import { useRef, useEffect, useState } from "react";

export default function RefUpdating2() {
  let countRef = useRef(0);
  const [render, setRender] = useState(0);
  console.log('countRef: ', countRef.current);

  function handleClick() {
    // This doesn't re-render the component!
    countRef.current = countRef.current + 1;
    console.log('handleClick countRef: ', countRef.current);
  }

  function getRefValue() {
    // but this does
    setRender((render) => render + 1);
  }

  return (
    <>
      <button onClick={handleClick}>
        Increment Ref Value
      </button>
      <button onClick={getRefValue}>Get Ref Value</button>
      <div>You clicked {countRef.current} times</div>
    </>
  );
}
