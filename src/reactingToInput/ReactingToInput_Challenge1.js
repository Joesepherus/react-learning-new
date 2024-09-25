import { useState } from "react";
import './styles.css'

export default function Picture() {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      onClick={() => setClicked(false)}
      className={clicked ? "background" : "background background--active"}
    >
      <img
        onClick={(e) => {
          e.stopPropagation();
          setClicked(true);
        }}
        className={clicked ? "picture picture--active" : "picture"}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
