import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  position: relative;
`;

const StyledClockHand = styled.hr<{ rotationDeg: number }>`
  position: absolute;
  top: 48%;
  border: 0.2rem solid #74b074;
  width: 35%;
  left: 14%;
  transform-origin: right;
  transform: rotate(${(props) => props.rotationDeg}deg);
  rotate: 90deg;
  margin: 0;
`;

const StyledClockImg = styled.img`
  background-color: #ffffff;
  border-radius: 50%;
  width: 100%;
`;

export { StyledContainer, StyledClockHand, StyledClockImg };
