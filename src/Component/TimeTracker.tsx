import React, { useEffect, useState } from 'react';
import './TimeTracker.css';

const TimeTracker: React.FC = () => {
  const [totalTime, setTotalTime] = useState<number>(0);

  useEffect(() => {
    const startTime = Date.now();
    let timer: NodeJS.Timeout;

    const updateTime = () => {
      const elapsedTime = Date.now() - startTime;
      setTotalTime(elapsedTime);
    };

    // Update time every second
    timer = setInterval(updateTime, 1000);

    // Pause the timer when the page is not visible
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        timer = setInterval(updateTime, 1000);
      } else {
        clearInterval(timer);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'min ' : ''}${seconds}s`;
  };

  return (
    <div>
      <h2>Time Spent on Training :</h2>
      <p>{formatTime(totalTime)}</p>
    </div>
  );
};

export default TimeTracker;
