import { Button, TomatoButton } from "./component/Button.styled";
import Container from "./component/Container.styled";
const App = () => {
  return (
    <>
      <Container bg="grey">
        <Button primary>Save</Button>
        <Button>Click</Button>
        <TomatoButton>Send</TomatoButton>
        <TomatoButton primary>Submit</TomatoButton>
      </Container>
    </>
  );
};

export default App;
