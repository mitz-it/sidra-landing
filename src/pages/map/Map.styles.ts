import styled from "styled-components";

import { theme } from "../../styles/theme";

export const MapContainer = styled.main`
  width: 100vw;
  height: 100vh;

  background-color: ${theme.colors.cream};
  display: flex;
  justify-content: center;
`;

export const MapBackground = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  width: fit-content;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

export const MapButtonContainer = styled.div<{
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  width?: string;
}>`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  ${({ top }) => top && `top: ${top};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ width }) => width && `width: ${width};`}
`;

