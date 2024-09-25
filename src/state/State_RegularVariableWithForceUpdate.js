import { sculptureList } from "./data.js";
import { useState } from "react";
let index = 0;
export default function Gallery() {
  const [_, forceUpdate] = useState(0); // We are ignoring the actual state value.
  console.log("_", _);
  const triggerForceUpdate = () => {
    forceUpdate((n) => n + 1); // Increment the value to force re-render
  };

  function handleClick() {
    index = index + 1;
    triggerForceUpdate();
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}
