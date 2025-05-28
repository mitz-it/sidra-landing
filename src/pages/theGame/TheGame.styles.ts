import styled from "styled-components";
import { theme } from "../../styles/theme";

export const TheGameContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.blue};
  display: flex;
`;

export const TheGameCardsContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
`;

export const TheGameTitle = styled.h1`
  font-size: 5.936rem;
  color: ${theme.colors.white};
  text-align: center;
  font-family: "Zarathustra", sans-serif;
  font-weight: 400;
`;

export const TheGameSubtitle = styled.h2`
  font-size: 3.5rem;
  color: ${theme.colors.white};
  text-align: center;
  font-family: "Overused Grotesk", sans-serif;
  font-weight: 400;
`;

export const TheGameImage = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: scale-down;
`;

export const TheGamePageTwo = styled.section`
  width: 100%;
  height: 100vh;
  padding-bottom: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TheGamePageTwoTitle = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.white};
  text-align: center;
  font-family: "Overused Grotesk", sans-serif;
  font-weight: 300;
  padding-bottom: 2rem;
`;

export const TheGameText = styled.p`
  font-family: "Zarathustra", sans-serif;
  color: ${theme.colors.white};
  font-size: 3.125rem;
  text-align: center;
  max-width: 68.625rem;
  line-height: 4rem;
`;

export const TheGameLicense = styled.span`
  font-family: "Overused Grotesk", sans-serif;
  color: ${theme.colors.white};
  font-size: 1.125rem;
  text-align: center;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 1rem;

  a {
    color: ${theme.colors.white};
  }
`;

export const TheGameButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const TheGameButton = styled.button`
  background-color: ${theme.colors.cream};
  color: ${theme.colors.black};
  border-radius: 18px;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  color: ${theme.colors.black};
  transition: background 0.3s;
  box-shadow: 0px 4px 0px 0px #000000;
  display: flex;
  align-items: center;
  font-family: "Overused Grotesk", sans-serif;

  &:hover {
    background: ${theme.colors.yellow};
  }
`;

export const TheGameButtonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TheGameButtonTextPrimary = styled.span`
  font-size: 2rem;
  margin-left: 0.5rem;
  font-weight: 500;
`;

export const TheGameButtonTextSecondary = styled.span`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  font-weight: 400;
`;
