import { forwardRef, useRef } from 'react';

// A component needs to opt in to expose its DOM nodes
// By default React does not let a component access the DOM nodes of other components. 
// Because Refs are an escape hatch that should be used sparingly. 
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
