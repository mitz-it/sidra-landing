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
  font-size: 2.5rem;
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

export const WhoWeAreTeamPage = styled.section`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 7rem;
  align-items: center;
`;

export const WhoWeAreTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-inline: 7rem;
`;

export const WhoWeAreTeamTitle = styled.h1`
  font-family: "Overused Grotesk", sans-serif;
  color: ${theme.colors.white};
  font-size: 3rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const WhoWeAreTeamText = styled.p`
  font-family: "Zarathustra", sans-serif;
  color: ${theme.colors.white};
  font-size: 2rem;
  font-weight: 400;
  max-width: 49.75rem;
`;

export const WhoWeAreCard = styled.div`
  height: 18.75rem;
  width: 13.5rem;
  border: 0.65px solid ${theme.colors.black};
  box-shadow: 0px 3.92px 0px 0px ${theme.colors.black};
  border-radius: 0.818rem;
  margin-bottom: 1rem;
  overflow: hidden;
  position: relative;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  &:hover {
    p {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const WhoWeAreCardLegend = styled.p`
  color: ${theme.colors.black};
  background-color: ${theme.colors.cream};
  position: absolute;
  z-index: 4;
  bottom: 0;
  width: 100%;
  padding: 0.5rem 0.8rem;
  border-radius: 0.818rem;
  border: 0.65px solid ${theme.colors.black};
  font-size: 1.125rem;
  font-family: "Zarathustra", sans-serif;
  display: flex;
  flex-direction: column;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;

  span {
    font-size: 0.75rem;
    font-family: "Overused Grotesk", sans-serif;
  }
`;

export const WhoWeAreTeam = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const WhoWeAreTeamAside = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  max-width: 93.75rem;
  width: 100%;
`;