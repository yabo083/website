import React, { useState, useEffect, useRef } from "react";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);

  const [elapsedTime, setElapsedTime] = useState(0);

  const intervalIdRef = useRef(null);

  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning){
        intervalIdRef.current = setInterval(()=> {
            setElapsedTime(Date.now() - startTimeRef.current);
        }, 10)
    }

    return () => {
        clearInterval(intervalIdRef.current);
    }

  }, [isRunning]);

  const start = () => {
    if (isRunning) return;
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;

  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = () => {
    let hours = elapsedTime / 3600000;
    let minutes = (elapsedTime % 3600000) / 60000;
    let seconds = (elapsedTime % 60000) / 1000;
    let milliseconds = elapsedTime % 1000;
    return `${String(Math.floor(hours)).padStart(2, "0")}:${String(
        Math.floor(minutes)
        ).padStart(2, "0")}:${String(Math.floor(seconds)).padStart(2, "0")}.${String(
        milliseconds
        ).padStart(3, "0")}`;

  };

  return (
    <div className="flex flex-col items-center border-2 rounded-lg border-lime-400 p-8">
      <div className="text-6xl font-mono font-bold text-shadow-sm shadow-inner shadow-black mb-6 rounded-lg p-1">
        {formatTime()}
      </div>
      <div className="text-2xl font-bold px-2 py-5 m-1 min-w-32 border-none rounded-xl cursor-pointer ">
        <button onClick={start} className="bg-green-500 hover:bg-green-600">
          Start
        </button>
        <button onClick={stop} className="bg-red-500 hover:bg-red-600">
          Stop
        </button>
        <button onClick={reset} className="bg-blue-500 hover:bg-blue-600">
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
