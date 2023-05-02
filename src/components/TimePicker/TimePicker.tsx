import useTimePicker from "../../hooks/useTimePicker";
import Clock from "../Clock/Clock";
import Timer from "../Timer/Timer";
import {
  StyledContainer,
  StyledLeftWrapper,
  StyledRightWrapper,
} from "./TimePicker.styles";

export default function TimePicker() {
  const {
    HMWithPeriod,
    degrees,
    handleIncreaseHour,
    handleDecreaseHour,
    handleIncreaseMinute,
    handleDecreaseMinute,
    handleSetCalculatedHM,
    handleMouseDown,
    handleMouseUp,
  } = useTimePicker();

  return (
    <StyledContainer>
      <StyledLeftWrapper>
        <Clock
          degrees={degrees}
          onMouseMove={handleSetCalculatedHM}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
      </StyledLeftWrapper>

      <StyledRightWrapper>
        <Timer
          HMWithPeriod={HMWithPeriod}
          onClickHourUpArrow={handleIncreaseHour}
          onClickHourDownArrow={handleDecreaseHour}
          onClickMinuteUpArrow={handleIncreaseMinute}
          onClickMinuteDownArrow={handleDecreaseMinute}
        />
      </StyledRightWrapper>
    </StyledContainer>
  );
}
