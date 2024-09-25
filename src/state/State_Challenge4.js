import { useState } from "react";

export default function FeedbackForm() {
  const [name, setName] = useState("");

  function handleClick() {
    let newName = prompt("What is your name?");
    setName(newName);
    alert(`Hello, ${newName}!`);
  }

  return <button onClick={handleClick}>Greet</button>;
}
