import React, { useState, useEffect, useRef } from 'react';

function BuggyTimerFixed() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState()
  const [isRunning, setIsRunning] = useState(false);

  let interval;

  const toggleTimer = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      interval = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
      setIntervalId(interval)
    } else {
      console.log('intervalId: ', intervalId);
      clearInterval(intervalId);
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
    </div>
  );
}

export default BuggyTimerFixed;
