import styled from "styled-components";
import { theme } from "../../styles/theme";

export const SurveyContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.cream};
  display: flex;
`;

export const SurveyPageOne = styled.section`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 7rem;
  background-color: ${theme.colors.darkRed};
`;

export const SurveyTitle = styled.h1`
  font-family: "Overused Grotesk", sans-serif;
  color: ${theme.colors.white};
  font-size: 1.5rem;
  text-align: center;
  font-weight: 400;
`;

export const SurveyText = styled.p`
  font-family: "Zarathustra", sans-serif;
  color: ${theme.colors.white};
  font-size: 3rem;
  text-align: center;
  max-width: 1200px;
  line-height: 4rem;

  @media screen and (max-width: 1280px) {
    font-size: 2rem;
    line-height: 2.4rem;
    max-width: 800px;
  }
`;

export const SurveyTextScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SurveyTextSecondary = styled.span`
  font-family: "Overused Grotesk", sans-serif;
  color: ${theme.colors.cream};
  font-size: 1.5rem;
  text-align: center;
  font-weight: 400;
  opacity: 0.7;
`;

export const SurveyPageTwo = styled.form`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 4rem;
  padding: 7rem 10rem 7rem 10rem;
  background-color: ${theme.colors.cream};
`;

export const SurveyQuestionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const SurveyQuestionNumber = styled.span`
  font-family: "Zarathustra", sans-serif;
  color: ${theme.colors.darkRed};
  font-size: 7rem;
  text-shadow: 0px 4px 0px #000000;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;

  @media screen and (max-width: 1280px) {
    font-size: 6rem;
  }
`;

export const SurveyQuestion = styled.p`
  font-family: "Zarathustra", sans-serif;
  color: ${theme.colors.black};
  font-size: 2.5rem;

  max-width: 1200px;
  line-height: 4rem;

  @media screen and (max-width: 1280px) {
    font-size: 2rem;
    line-height: 3rem;
    max-width: 800px;
  }
`;
