import { useState } from "react";
import Layout from "../Layout";

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <Layout>
      <button
        onClick={() => {
          setIsOn(!isOn);
        }}
      >
        {isOn ? "On" : "Off"}
      </button>
    </Layout>
  );
}
