import { useState } from "react";

export default function EditProfile() {
  const [mode, setMode] = useState("viewing");
  const [firstName, setFirstName] = useState("Jessica");
  const [lastName, setLastName] = useState("Smith");
  console.log("mode: ", mode);

  if (mode === "viewing") {
    return (
      <form>
        <label>First name: {firstName}</label>
        <label>Last name: {lastName}</label>
        <button type="button" onClick={() => setMode("editing")}>
          Edit Profile
        </button>
        <p>
          <i>Hello, {firstName + " " + lastName}!</i>
        </p>
      </form>
    );
  }

  return (
    <form>
      <label>
        First name: <input onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Last name: <input onChange={(e) => setLastName(e.target.value)} />
      </label>
      <button type="button" onClick={() => setMode("viewing")}>
        Save Profile
      </button>
      <p>
        <i>Hello, {firstName + " " + lastName}!</i>
      </p>
    </form>
  );
}
