import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ bg }) => bg || "white"};
  color: ${({ color }) => color || "white"};
  border: 1px solid #af3a53;
  border-radius: 5px;
  box-shadow: 0 0 3px 2px;
  padding: 1rem 1.2rem;
  font-size: 17.6px;
  margin-right: 0.5rem;
  margin: 2rem 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.97);
  }
`;

export default Button;
