import styled from "styled-components";
import { theme } from "../../styles/theme";

export const WhoWeAreContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.blue};
  display: flex;
`;

export const WhoWeArePageOne = styled.section`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2rem;
`;

export const WhoWeAreTitle = styled.h1`
  font-family: "Overused Grotesk", sans-serif;
  color: ${theme.colors.white};
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
`;

export const WhoWeAreText = styled.p`
  font-family: "Zarathustra", sans-serif;
  color: ${theme.colors.white};
  font-size: 2.625rem;
  text-align: center;
  max-width: 78.313rem;
`;

export const WhoWeAreTextScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WhoWeAreTextSecondary = styled.span`
  font-family: "Overused Grotesk", sans-serif;
  color: ${theme.colors.cream};
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
  opacity: 0.7;
`;

export const WhoWeAreTeamTitle = styled.h1`
  font-family: "Overused Grotesk", sans-serif;
  color: ${theme.colors.white};
  font-size: 3rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 15rem;
  margin-top: 8rem;
  margin-bottom: 1rem;
`;

export const WhoWeAreTeamText = styled.p`
  font-family: "Zarathustra", sans-serif;
  color: ${theme.colors.white};
  font-size: 2rem;
  max-width: 800px;
  margin-left: 15rem;
  font-weight: 400;
`;