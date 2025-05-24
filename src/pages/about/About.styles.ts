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
  padding-bottom: 7rem;
`;

export const AboutTitle = styled.h1`
  font-family: "Overused Grotesk", sans-serif;
  color: ${theme.colors.white};
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
`;

export const AboutText = styled.p`
  font-family: "Zarathustra", sans-serif;
  color: ${theme.colors.white};
  font-size: 3.125rem;
  text-align: center;
  max-width: 78.313rem;
  line-height: 4rem;
`;

export const AboutHighlight = styled.span`
  background-color: ${theme.colors.yellow};
  border-radius: 20px;
  padding-inline: 1rem;
`;

export const AboutPageTwo = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-bottom: 7rem;
`;

export const AboutEllipseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
`;

export const AboutEllipse = styled.div`
  width: 34.75rem;
  height: 34.75rem;
  background-color: ${theme.colors.cream};
  border-radius: 100%;
  box-shadow: 0px 6px 0px 0px ${theme.colors.black};
  border: 1px solid ${theme.colors.black};
  color: ${theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.2rem;
  font-size: 2.125rem;
  text-align: center;
  font-family: "Overused Grotesk", sans-serif;
  position: relative;
`;

export const AboutEllipseNumber = styled.span`
  font-family: "Zarathustra", sans-serif;
  color: ${theme.colors.cream};
  font-size: 7.5rem;
  text-shadow: 0px 4px 0px #000000;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
  position: absolute;
  left: 3.2rem;
  top: 1.3rem;
`;

export const AboutEllipseHighlight = styled.p`
  font-family: "Zarathustra", sans-serif;
`;

export const AboutEllipseText = styled.p`
  font-family: "Overused Grotesk", sans-serif;
  color: ${theme.colors.cream};
  font-size: 1.5rem;
  text-align: center;
  line-height: 2rem;

  a {
    color: ${theme.colors.cream};
  }
`;
