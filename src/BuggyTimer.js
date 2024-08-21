import React, { useState, useEffect, useRef } from 'react';

function BuggyTimer() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let intervalRef = useRef();

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount(count + 1);
      }, 1000);
    }
  });

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
    </div>
  );
}

export default BuggyTimer;
