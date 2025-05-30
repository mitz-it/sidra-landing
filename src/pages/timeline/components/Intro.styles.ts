import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const IntroContainer = styled.div`
  background-color: ${theme.colors.darkRed};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IntroText = styled.div`
  font-family: "Overused Grotesk", sans-serif;
  color: ${theme.colors.cream};
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items:center;
  position: absolute;

  bottom: 5rem;
`;

