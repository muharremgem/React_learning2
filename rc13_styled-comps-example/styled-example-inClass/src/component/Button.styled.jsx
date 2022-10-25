import styled from "styled-components";

export const Button = styled.button`
  //background-color: hotpink;
  //color: white;
  background-color: ${(props) => (props.primary ? "pink" : "purple")};
  color: ${({ primary }) => (primary ? "green" : "orange")};
  cursor: pointer;
  width: 7rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border-color: pink;
  font-size: 1.1rem;

  &:hover {
    transform: scale(0.97);
  }
`;

export const TomatoButton = styled(Button)`
  background-color: ${(props) => (props.primary ? "white" : "tomato")};
  color: ${({ primary }) => (primary ? "tomato" : "orange")};
  border: 1px solid tomato;
`;
