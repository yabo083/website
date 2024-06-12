import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="backdrop-blur-sm w-screen py-2 ">
      <div className="text-white text-8xl font-bold font-mono drop-shadow-xl text-center ">
        <span>{time}</span>
      </div>
    </div>
  );
};

export default DigitalClock;
