import upArrowImg from "../../assets/upArrow.svg";
import { HMWithPeriod } from "../../types/time";
import {
  StyledContainer,
  StyledUpArrowImg,
  StyledDownArrowImg,
  StyledColumn,
  StyledTimeText,
  StyledColonText,
  StyledPeriodText,
} from "./Timer.styles";

type Props = {
  HMWithPeriod: HMWithPeriod;
  onClickHourUpArrow: React.MouseEventHandler<HTMLImageElement>;
  onClickHourDownArrow: React.MouseEventHandler<HTMLImageElement>;
  onClickMinuteUpArrow: React.MouseEventHandler<HTMLImageElement>;
  onClickMinuteDownArrow: React.MouseEventHandler<HTMLImageElement>;
};

export default function Timer({
  HMWithPeriod,
  onClickHourUpArrow,
  onClickHourDownArrow,
  onClickMinuteUpArrow,
  onClickMinuteDownArrow,
}: Props) {
  return (
    <StyledContainer>
      <StyledColumn>
        <StyledUpArrowImg src={upArrowImg} onClick={onClickHourUpArrow} />
        <StyledTimeText>
          {String(HMWithPeriod.hour).padStart(2, "0")}
        </StyledTimeText>
        <StyledDownArrowImg src={upArrowImg} onClick={onClickHourDownArrow} />
      </StyledColumn>

      <StyledColonText>:</StyledColonText>

      <StyledColumn>
        <StyledUpArrowImg src={upArrowImg} onClick={onClickMinuteUpArrow} />
        <StyledTimeText>
          {String(HMWithPeriod.minute).padStart(2, "0")}
        </StyledTimeText>
        <StyledDownArrowImg src={upArrowImg} onClick={onClickMinuteDownArrow} />
      </StyledColumn>

      <StyledPeriodText>{HMWithPeriod.period}</StyledPeriodText>
    </StyledContainer>
  );
}
