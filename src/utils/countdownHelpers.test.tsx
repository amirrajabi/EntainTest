import {renderHook, act} from '@testing-library/react-hooks';
import useCountdown, {formatTime} from '../utils/countdownHelpers';

jest.useFakeTimers();

describe('useCountdown hook', () => {
  it('calculates initial remaining time correctly', () => {
    const targetDate = new Date();
    targetDate.setSeconds(targetDate.getSeconds() + 120); // 2 minutes in the future

    const {result} = renderHook(() => useCountdown(targetDate, jest.fn()));

    expect(result.current).toBe('3m 0s');
  });

  it('updates remaining time every second', () => {
    const targetDate = new Date();
    targetDate.setSeconds(targetDate.getSeconds() + 62);

    const {result} = renderHook(() => useCountdown(targetDate, jest.fn()));

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current).toBe('2m 1s');

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current).toBe('2m 0s');
  });
});

describe('formatTime function', () => {
  it('formats time correctly for values greater than or equal to 60 seconds', () => {
    expect(formatTime(130)).toBe('2m 10s');
    expect(formatTime(60)).toBe('1m 0s');
  });

  it('formats time correctly for values less than  60 seconds', () => {
    expect(formatTime(59)).toBe('59s');
    expect(formatTime(10)).toBe('10s');
  });
});
