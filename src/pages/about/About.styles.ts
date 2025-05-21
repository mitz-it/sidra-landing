import styled from "styled-components";
import { theme } from "../../styles/theme";

export const AboutContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.petrolBlue};
  color: ${theme.colors.white};
  display: flex;
`;

export const AboutPageOne = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const AboutTitle = styled.h1`
  font-family: "Overused Grotesk", sans-serif;
  color: ${theme.colors.white};
  font-size: 1.5rem;
  text-align: center;
  font-weight: 400;
`;

export const AboutText = styled.p`
  font-family: "Zarathustra", sans-serif;
  color: ${theme.colors.white};
  font-size: 3rem;
  text-align: center;
  max-width: 1200px;
  line-height: 4rem;

  @media screen and (max-width: 1280px) {
    font-size: 2rem;
    line-height: 3rem;
    max-width: 800px;
  }
`;

 export const AboutHighlight = styled.span`
  background-color: ${theme.colors.yellow};
  border-radius: 20px;
  padding-inline: 1rem;
 `;

