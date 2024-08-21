import React, {useRef} from 'react'
import SearchButton from "./SearchButton.js";
import SearchInput from "./SearchInput.js";

export default function Page() {
  const inputRef = useRef();

  function handleClick() {
    console.log('inputRef: ', inputRef);
    inputRef.current.focus()
  }

  return (
    <>
      <nav>
        <SearchButton onClick={handleClick}/>
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}
