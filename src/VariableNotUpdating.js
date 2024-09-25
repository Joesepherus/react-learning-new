import { useState, useRef } from "react";
import Layout from "./Layout";

export default function VariableNotUpdating() {
  const [render, setRender] = useState(0);

  // It always sets test to 0 after re-render
  let test = 0;
  console.log("test", test);

  function updateVarible() {
    console.log("Updating variable");
    // It changes here but when it re-renders
    // it becomes 0 again because it re-declares
    // the variable
    test = 1;
    console.log("test", test);
    setRender((render) => render + 1);
  }

  return (
    <Layout>
      <button onClick={() => updateVarible()}>Update</button>
      <div>{test}</div>
    </Layout>
  );
}
