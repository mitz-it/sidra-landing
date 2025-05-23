import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const SurveyFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 73.75rem;

  label {
    font-size: 2rem;
    font-family: "Overused Grotesk", sans-serif;
    display: grid;
    grid-template-columns: 3rem auto;
    gap: 1rem;
  }

  input,
  select,
  textarea {
    font-size: 1.5rem;
    font-family: "Overused Grotesk", sans-serif;
  }

  input,
  textarea,
  select {
    background-color: transparent;
    border: 1px solid rgba(0, 23, 31, 1);
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 1);
    border-radius: 14px;
    padding: 0.6rem 0.75rem;
  }

  select {
    width: 32.813rem;
  }

  input[type="checkbox"],
  input[type="radio"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: transparent;
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: ${theme.colors.darkRed};
    width: 3.05rem;
    height: 3.05rem;
    border: 0.05rem solid ${theme.colors.black};
    border-radius: 0.9rem;
    transform: translateY(-0.075rem);

    display: grid;
    place-content: center;
  }

  textarea {
    margin-top: 1rem;
    padding: 2rem;
    min-height: 12.5rem;
  }

  input[type="checkbox"]::before,
  input[type="radio"]::before {
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    clip-path: polygon(
      100% 14.154%,
      64.043% 50.422%,
      63.456% 51.014%,
      64.043% 51.602%,
      100% 87.861%,
      87.962% 100%,
      52.004% 63.741%,
      51.421% 63.149%,
      50.834% 63.741%,
      14.869% 100%,
      2.83% 87.861%,
      38.792% 51.602%,
      39.379% 51.014%,
      38.792% 50.422%,
      2.83% 14.154%,
      14.869% 2.015%,
      50.834% 38.278%,
      51.421% 38.87%,
      52.004% 38.278%,
      87.962% 2.015%,
      100% 14.154%
    );
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    background-color: ${theme.colors.darkRed};
  }

  input[type="checkbox"]:checked::before,
  input[type="radio"]:checked::before {
    transform: scale(1);
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: max(2px, 0.15em) solid ${theme.colors.darkRed};
    box-shadow: 0px 4px 0px 0px ${theme.colors.darkRed};
  }

  input[type="checkbox"]:disabled {
    --form-control-color: var(--form-control-disabled);

    color: var(--form-control-disabled);
    cursor: not-allowed;
  }
`;

export const SurveyFormFlex = styled.div<{ width: number }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: ${({ width }) => width}rem;
`;

export const SurveyFormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const SurveyQuestionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const SurveySubQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const SurveyQuestionNumber = styled.span`
  font-family: "Zarathustra", sans-serif;
  color: ${theme.colors.darkRed};
  font-size: 7.5rem;
  text-shadow: 0px 4px 0px #000000;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
`;

export const SurveyQuestion = styled.p`
  font-family: "Zarathustra", sans-serif;
  color: ${theme.colors.black};
  font-size: 2.5rem;
`;

export const SurveyQuestionSecondary = styled.p`
  font-family: "Zarathustra", sans-serif;
  color: ${theme.colors.black};
  font-size: 1.5rem;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button<{ isActive?: boolean }>`
  background: ${({ isActive }) =>
    isActive ? theme.colors.yellow : theme.colors.yellow};
  font-family: "Overused Grotesk", sans-serif;
  font-size: 1.8rem;
  border: 1px solid ${theme.colors.black};
  border-radius: 1.125rem;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  color: ${theme.colors.black};
  transition: background 0.3s;
  box-shadow: 0px 4px 0px 0px #000000;
  display: flex;
  align-items: center;
  font-weight: 500;

  &:hover {
    background: ${theme.colors.yellow};
  }
`;


