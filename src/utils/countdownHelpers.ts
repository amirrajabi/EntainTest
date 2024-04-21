import {useState, useEffect} from 'react';

type FormattedTime = string;

type OnFinishCallback = () => void;

const formatTime = (seconds: number): FormattedTime => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

function formatTimeForNegativeCountdown(seconds: number): string {
  if (seconds >= 0) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  } else {
    const displaySeconds = Math.abs(seconds);
    return `-${displaySeconds.toString().padStart(2, '0')}`;
  }
}

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
      const secondsUntilFinish = Math.max(
        -60,
        Math.floor((+targetDate - +currentTime) / 1000) + 60,
      );
      if (secondsUntilFinish <= -60) {
        clearInterval(intervalId);
        onFinish();
      } else {
        setRemainingTime(formatTime(secondsUntilFinish));
      }
      setRemainingTime(formatTimeForNegativeCountdown(secondsUntilFinish));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate, onFinish]);

  return remainingTime;
};

export default useCountdown;
