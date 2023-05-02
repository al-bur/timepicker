import { HTMLAttributes } from "react";
import clockImg from "../../assets/clock.svg";
import {
  StyledContainer,
  StyledClockHand,
  StyledClockImg,
} from "./Clock.styles";

type Props = {
  degrees: number;
} & HTMLAttributes<HTMLDivElement>;

export default function Clock({ degrees, ...props }: Props) {
  const { onMouseUp, onMouseDown, onMouseMove } = props;

  return (
    <StyledContainer
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <StyledClockHand rotationDeg={degrees} />
      <StyledClockImg draggable={false} src={clockImg} />
    </StyledContainer>
  );
}
