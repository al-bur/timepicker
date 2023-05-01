import upArrowImg from "../../assets/upArrow.svg";
import {
  StyledContainer,
  StyledUpArrowImg,
  StyledDownArrowImg,
  StyledColumn,
  StyledTimeText,
  StyledColonText,
  StyledPeriodText,
} from "./Timer.styles";

export default function Timer() {
  return (
    <StyledContainer>
      <StyledColumn>
        <StyledUpArrowImg src={upArrowImg} />
        <StyledTimeText>00</StyledTimeText>
        <StyledDownArrowImg src={upArrowImg} />
      </StyledColumn>

      <StyledColonText>:</StyledColonText>

      <StyledColumn>
        <StyledUpArrowImg src={upArrowImg} />
        <StyledTimeText>00</StyledTimeText>
        <StyledDownArrowImg src={upArrowImg} />
      </StyledColumn>

      <StyledPeriodText>AM</StyledPeriodText>
    </StyledContainer>
  );
}
