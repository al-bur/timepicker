import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #080808d2;
  padding: 4% 6%;
  display: flex;
  align-items: center;
  // TODO: 여기서 Main의 width는 어떻게 결정이 되는 지 알아가야함
  width: 50%;
  gap: 10%;
`;

const StyledLeftWrapper = styled.div`
  width: 40%;
`;

const StyledRightWrapper = styled.div`
  width: 60%;
`;

export { StyledContainer, StyledLeftWrapper, StyledRightWrapper };
