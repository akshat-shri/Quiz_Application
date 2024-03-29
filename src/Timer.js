import React, { useEffect, useState } from 'react';

const Timer = ({ timer, onTick, onFinish }) => {
  const [time, setTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      onTick();
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time <= 0) {
      clearInterval(interval);
      onFinish();
    }

    return () => clearInterval(interval);
  }, [time, onTick, onFinish]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return <div>Time Remaining: {formatTime(time)}</div>;
};

export default Timer;
