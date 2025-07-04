import styled from "styled-components";

import map from "../../../assets/images/map.webp";
import { theme } from "../../../styles/theme";

export const HowToNavigateContainer = styled.main`
  width: 100vw;
  height: 100vh;
  position: absolute;
`;

export const HowToNavigateBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${map});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(2px);
  position: absolute;
`;

export const HowToNavigatePageContainer = styled.section`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const HowToNavigateModal = styled.div`
  background-color: ${theme.colors.cream};
  box-shadow: 0px 6px 0px 0px rgba(0, 0, 0, 1);
  border: 0.5px solid ${theme.colors.black};
  padding: 3rem 1.5rem;
  border-radius: 1.25rem;
  position: relative;
  max-width: 61.874rem;
`;

export const HowToNavigateModalClose = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const HowToNavigateModalTitle = styled.h1`
  font-size: 3rem;
  font-family: "Zarathustra", sans-serif;
  text-align: center;
  font-weight: 400;
  color: ${theme.colors.black};
`;

export const HowToNavigateModalText = styled.p`
  margin-top: 1rem;
  font-size: 2rem;
  font-family: "Overused Grotesk", sans-serif;
  text-align: center;
  font-weight: 400;
  color: ${theme.colors.black};
`;

export const HowToNavigateModalImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
