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

  beforeEach(() => {
    render(<Timer {...mockProps} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const arrowButtonClickTestCases = [
    { arrowType: "hour-up", handler: "onClickHourUpArrow" } as const,
    { arrowType: "hour-down", handler: "onClickHourDownArrow" } as const,
    { arrowType: "minute-up", handler: "onClickMinuteUpArrow" } as const,
    { arrowType: "minute-down", handler: "onClickMinuteDownArrow" } as const,
  ];

  arrowButtonClickTestCases.forEach(({ arrowType, handler }) => {
    it(`${arrowType} arrow 클릭이 제대로 동작하는지 확인한다.`, () => {
      const arrowButton = screen.getByTestId(`${arrowType}-arrow`);

      fireEvent.click(arrowButton);

      expect(mockProps[handler]).toBeCalledTimes(1);
    });
  });

  it("넘겨받은 props(hour, minute, period)를 포맷팅 한 후 화면에 제대로 보여준다", () => {
    const { hour, minute, period } = mockProps.HMWithPeriod;

    const hourText = screen.getByTestId("hour-text");
    const minuteText = screen.getByTestId("minute-text");
    const periodText = screen.getByTestId("period-text");

    expect(hourText).toHaveTextContent(String(hour).padStart(2, "0"));
    expect(minuteText).toHaveTextContent(String(minute).padStart(2, "0"));
    expect(periodText).toHaveTextContent(period);
  });
});
