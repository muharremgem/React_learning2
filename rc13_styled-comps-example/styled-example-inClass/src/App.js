import { Button, TomatoButton } from "./component/Button.styled";
import Container from "./component/Container.styled";
import HeaderText from "./component/Header.styled";
import StyledLink from "./component/Link.styled";
const App = () => {
  return (
    <>
      <Container bg="grey">
        <HeaderText color="hotpink">Styled Components</HeaderText>
        <Button primary>Save</Button>
        <Button>Click</Button>
        <TomatoButton>Send</TomatoButton>
        <TomatoButton primary>Submit</TomatoButton>
      </Container>
      <Container bg="crimson">
        <StyledLink
          href="https://www.youtube.com/watch?v=h_D3VFfhvs4"
          target="_blank"
        >
          Mıcheal Jackson
        </StyledLink>
        <StyledLink
          secondary
          href="https://www.youtube.com/watch?v=h_D3VFfhvs4"
          target="_blank"
        >
          REACT
        </StyledLink>
      </Container>
    </>
  );
};

export default App;
