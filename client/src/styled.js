import styled, { css } from "styled-components"

export const Navbar = styled.nav`
  background: lightblue;
  height: 3.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    padding: 1em;
    transition: background 0.3s 0s ease-in-out;
    &:hover {
      background: lightskyblue;
    }
  }
  a.active {
    background: #62c0fa;
  }
`;