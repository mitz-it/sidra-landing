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
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
`;

export const SurveyText = styled.p`
  font-family: "Zarathustra", sans-serif;
  color: ${theme.colors.white};
  font-size: 3.125rem;
  text-align: center;
  max-width: 76.438rem;
  line-height: 4rem;
`;

export const SurveyTextScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SurveyTextSecondary = styled.span`
  font-family: "Overused Grotesk", sans-serif;
  color: ${theme.colors.cream};
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
  opacity: 0.7;
`;

export const SurveyPageTwo = styled.section`
  width: 100vw;
  height: 100%;
  overflow-y: scroll;
  background-color: ${theme.colors.cream};
  padding: 4rem;

  form {
    padding: 3rem 6rem 3rem 6rem;
  }
`;

export const FormCloseButton = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
