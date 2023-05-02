import { renderHook, act } from "@testing-library/react";
import useTimePicker from "./useTimePicker";

describe("useTimePicker hook 테스트", () => {
  it("handleIncreaseHour을 통해서 hour를 증가시킬 수 있고 handleDecreaseHour를 통해서 hour를 감소시킬 수 있다", () => {
    const { result } = renderHook(() => useTimePicker());

    expect(result.current.HM.hour).toBe(0);

    act(() => {
      result.current.handleIncreaseHour();
    });

    expect(result.current.HM.hour).toBe(1);

    act(() => {
      result.current.handleDecreaseHour();
    });

    expect(result.current.HM.hour).toBe(0);
  });

  it("handleIncreaseMinute을 통해서 minute을 증가시킬 수 있고 handleDecreaseMinute를 통해서 minute을 감소시킬 수 있다", () => {
    const { result } = renderHook(() => useTimePicker());
    const CHANGING_MINUTE_UNIT = 5;

    expect(result.current.HM.minute).toBe(0);

    act(() => {
      result.current.handleIncreaseMinute();
    });

    expect(result.current.HM.minute).toBe(CHANGING_MINUTE_UNIT);

    act(() => {
      result.current.handleDecreaseMinute();
    });

    expect(result.current.HM.minute).toBe(0);
  });

  it("변하는 시간에 따라 AM/PM을 반환한다", () => {
    const { result } = renderHook(() => useTimePicker());
    expect(result.current.HMWithPeriod.period).toBe("AM");

    act(() => {
      Array.from({ length: 12 }).forEach(result.current.handleIncreaseHour);
    });

    expect(result.current.HMWithPeriod.period).toBe("PM");
  });
});
