import styled, { css } from "styled-components";

const StyledLink = styled.a`
  color: white;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
  ${(props) =>
    props.secondary &&
    css`
      background-color: lightblue;
      color: purple;
      padding: 0.3rem;
    `}
`;

export default StyledLink;
