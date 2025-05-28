import styled from "styled-components";
import map from "../../assets/images/map.png";

export const MapContainer = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const MapBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${map});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  position: absolute;
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

