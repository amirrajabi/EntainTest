import {useState, useEffect} from 'react';

type FormattedTime = string;
type OnFinishCallback = () => void;

export const formatTime = (seconds: number): FormattedTime => {
  if (seconds >= 60) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  } else {
    return `${seconds}s`;
  }
};

const useCountdown = (targetDate: Date, onFinish: OnFinishCallback) => {
  const [remainingTime, setRemainingTime] = useState<FormattedTime>(() => {
    const secondsUntilFinish = Math.max(
      0,
      Math.floor((targetDate.getTime() - new Date().getTime()) / 1000) + 60,
    );
    return formatTime(secondsUntilFinish);
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const secondsUntilFinish =
        Math.floor((+targetDate - +currentTime) / 1000) + 60;

      if (secondsUntilFinish <= -60) {
        clearInterval(intervalId);
        onFinish();
      } else {
        setRemainingTime(formatTime(secondsUntilFinish));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate, onFinish]);

  return remainingTime;
};

export default useCountdown;
