import clockImg from "../../assets/clock.svg";
import {
  StyledContainer,
  StyledClockHand,
  StyledClockImg,
} from "./Clock.styles";

export default function Clock() {
  return (
    <StyledContainer>
      <StyledClockHand />
      <StyledClockImg src={clockImg} />
    </StyledContainer>
  );
}
