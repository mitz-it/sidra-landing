import styled from "styled-components";
import { theme } from "../../styles/theme";

export const BackButton = styled.div`
  color: ${theme.colors.black};
  font-size: 1.5rem;
  font-weight: 450;
  cursor: pointer;
  align-items: center;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 4rem;
  font-family: "Overused Grotesk", sans-serif;

  path {
    fill: ${theme.colors.black};
  }

  &:hover {
    filter: brightness(3.8);
  }
`;
