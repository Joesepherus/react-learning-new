import {
    forwardRef, 
    useRef, 
    useImperativeHandle
  } from 'react';
  
  // Just using forwardRef without useImperativeHandle makes it possible to do other things like changing css styles on the node
  // In uncommon cases, you may want to restrict the exposed functionality. You can do that with useImperativeHandle:
  const MyInput = forwardRef((props, ref) => {
    const realInputRef = useRef(null);
    useImperativeHandle(ref, () => ({
      // Only expose focus and nothing else
      focus() {
        realInputRef.current.focus();
      },
    }));
    return <input {...props} ref={realInputRef} />;
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
  