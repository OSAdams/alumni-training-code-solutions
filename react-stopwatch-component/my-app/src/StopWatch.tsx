import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  const handlePlayClick = () => {
    setIntervalId(
      setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000)
    );
  };

  const handlePauseClick = () => {
    clearInterval(intervalId);
    setIntervalId(undefined);
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-timer">
        <p>{count}</p>
      </div>
      <FaPlay onClick={handlePlayClick} />
      <FaPause onClick={handlePauseClick} />
    </div>
  );
};
