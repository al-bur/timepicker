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
        <StyledUpArrowImg
          src={upArrowImg}
          onClick={onClickHourUpArrow}
          data-testid="hour-up-arrow"
        />
        <StyledTimeText data-testid="hour-text">
          {String(HMWithPeriod.hour).padStart(2, "0")}
        </StyledTimeText>
        <StyledDownArrowImg
          src={upArrowImg}
          onClick={onClickHourDownArrow}
          data-testid="hour-down-arrow"
        />
      </StyledColumn>

      <StyledColonText>:</StyledColonText>

      <StyledColumn>
        <StyledUpArrowImg
          src={upArrowImg}
          onClick={onClickMinuteUpArrow}
          data-testid="minute-up-arrow"
        />
        <StyledTimeText data-testid="minute-text">
          {String(HMWithPeriod.minute).padStart(2, "0")}
        </StyledTimeText>
        <StyledDownArrowImg
          src={upArrowImg}
          onClick={onClickMinuteDownArrow}
          data-testid="minute-down-arrow"
        />
      </StyledColumn>

      <StyledPeriodText data-testid="period-text">
        {HMWithPeriod.period}
      </StyledPeriodText>
    </StyledContainer>
  );
}
