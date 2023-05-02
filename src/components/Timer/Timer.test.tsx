import { render, screen, fireEvent } from "@testing-library/react";
import Timer from "./Timer";
import { HMWithPeriod } from "../../types/time";

describe("Timer 컴포넌트 UI 테스트", () => {
  const mockProps = {
    HMWithPeriod: { hour: 12, minute: 0, period: "PM" } as HMWithPeriod,
    onClickHourUpArrow: jest.fn(),
    onClickHourDownArrow: jest.fn(),
    onClickMinuteUpArrow: jest.fn(),
    onClickMinuteDownArrow: jest.fn(),
  };

  it("hour에 대한 up arrow 클릭이 제대로 동작하는지 확인한다.", () => {
    render(<Timer {...mockProps} />);
    const hourUpArrow = screen.getByTestId("hour-up-arrow");

    fireEvent.click(hourUpArrow);

    expect(mockProps.onClickHourUpArrow).toBeCalledTimes(1);
  });

  it("hour에 대한 down arrow 클릭이 제대로 동작하는지 확인한다.", () => {
    render(<Timer {...mockProps} />);
    const hourDownArrow = screen.getByTestId("hour-down-arrow");

    fireEvent.click(hourDownArrow);

    expect(mockProps.onClickHourDownArrow).toBeCalledTimes(1);
  });

  it("minute에 대한 up arrow 클릭이 제대로 동작하는지 확인한다.", () => {
    render(<Timer {...mockProps} />);
    const minuteUpArrow = screen.getByTestId("minute-up-arrow");

    fireEvent.click(minuteUpArrow);

    expect(mockProps.onClickMinuteUpArrow).toBeCalledTimes(1);
  });

  it("minute에 대한 down arrow 클릭이 제대로 동작하는지 확인한다.", () => {
    render(<Timer {...mockProps} />);
    const minuteDownArrow = screen.getByTestId("minute-down-arrow");

    fireEvent.click(minuteDownArrow);

    expect(mockProps.onClickMinuteDownArrow).toBeCalledTimes(1);
  });

  it("넘겨받은 props(hour, minute, period)를 포맷팅 한 후 화면에 제대로 보여준다", () => {
    const { hour, minute, period } = mockProps.HMWithPeriod;
    render(<Timer {...mockProps} />);

    const hourText = screen.getByTestId("hour-text");
    const minuteText = screen.getByTestId("minute-text");
    const periodText = screen.getByTestId("period-text");

    expect(hourText).toHaveTextContent(String(hour).padStart(2, "0"));
    expect(minuteText).toHaveTextContent(String(minute).padStart(2, "0"));
    expect(periodText).toHaveTextContent(period);
  });
});
