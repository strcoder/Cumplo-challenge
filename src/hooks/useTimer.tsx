import { useEffect, useState } from 'react';

const useTimer = () => {
  const [hours, setHours] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [activeTimer, setActiveTimer] = useState(false);
  const [finishTimer, setFinishTimer] = useState(false);

  const setTimer = ({ time = 0 }: { time: number }) => {
    const hours = Math.floor(time / (60 * 60));

    const divisorForMinutes = time % (60 * 60);
    const minutes = Math.floor(divisorForMinutes / 60);

    const divisorForFeconds = divisorForMinutes % 60;
    const seconds = Math.ceil(divisorForFeconds);

    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    if (!activeTimer) return;
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            setFinishTimer(true);
            clearInterval(myInterval);
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(myInterval);
  });

  const getTimer = () => {
    if (hours === 0) {
      return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }
    return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return { setTimer, getTimer, hours, minutes, seconds, activeTimer, setActiveTimer, finishTimer };
};

export default useTimer;
