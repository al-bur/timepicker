import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledUpArrowImg = styled.img`
  width: 20%;
  cursor: pointer;
`;

const StyledDownArrowImg = styled.img`
  width: 20%;
  transform: rotate(180deg);
  cursor: pointer;
`;

const StyledColumn = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const StyledTimeText = styled.span`
  color: #ffffff;
  font-size: 6rem;
  font-family: "Courier New";
`;

const StyledColonText = styled.span`
  width: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  font-size: 6rem;
`;

const StyledPeriodText = styled.span`
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  font-size: 6rem;
  margin-left: 10%;
  font-family: "Courier New";
`;

export {
  StyledContainer,
  StyledUpArrowImg,
  StyledDownArrowImg,
  StyledColumn,
  StyledTimeText,
  StyledColonText,
  StyledPeriodText,
};
