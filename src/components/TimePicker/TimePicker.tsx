import Clock from "../Clock/Clock";
import Timer from "../Timer/Timer";
import {
  StyledContainer,
  StyledLeftWrapper,
  StyledRightWrapper,
} from "./TimePicker.styles";

export default function TimePicker() {
  return (
    <StyledContainer>
      <StyledLeftWrapper>
        <Clock />
      </StyledLeftWrapper>

      <StyledRightWrapper>
        <Timer />
      </StyledRightWrapper>
    </StyledContainer>
  );
}
