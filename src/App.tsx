import { StyledContainer, StyledTimePickerWrapper } from "./App.styles";
import TimePicker from "./components/TimePicker/TimePicker";

function App() {
  return (
    <StyledContainer>
      <StyledTimePickerWrapper>
        <TimePicker />
      </StyledTimePickerWrapper>
    </StyledContainer>
  );
}

export default App;
