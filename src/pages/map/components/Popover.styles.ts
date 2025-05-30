import styled from "styled-components";
import { theme } from "../../../styles/theme";


export const MapPopoverButton = styled.button<{ isActive?: boolean }>`
  background: ${({ isActive }) =>
    isActive ? theme.colors.blue : theme.colors.cream};
  color: ${({ isActive }) =>
    isActive ? theme.colors.cream : theme.colors.black};
  box-shadow: 0px 2px 0px 0px ${theme.colors.black};
  border: 1px solid ${theme.colors.black};
  padding: 0.5rem 0.75rem;
  font-family: "Overused Grotesk", sans-serif;
  font-weight: 500;
  font-size: 1.125rem;
  border-radius: 2rem;
  transition: background 0.5s;

  &:hover {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.cream};
  }
`;


export const MapPopover = styled.div<{
  axisX: "left" | "right";
  axisY: "top" | "bottom";
}>`
  background-color: ${theme.colors.cream};
  box-shadow: 0px 6px 0px 0px rgba(0, 0, 0, 1);
  border: 0.5px solid ${theme.colors.black};
  padding: 1.5rem;
  border-radius: 1.25rem;
  width: 29.25rem;
  z-index: 9999;

  position: absolute;
  ${({ axisX }) => `${axisX === "left" ? "right": "left"}: calc(100% + 1rem);`}
  ${({ axisY }) => `${axisY}: 0;`}
`;

export const MapPopoverDivider = styled.div`
  height: 1px;
  width: 100%;
  border-bottom: 1px solid ${theme.colors.black};
  margin-top: 0.4rem;
  margin-bottom: 0.8rem;
`;

export const MapPopoverHeader = styled.div`
  display: flex;
  justify-content: space-between;

  svg:hover{
    opacity: 0.7;
  }
`;

export const MapPopoverTitle = styled.p`
  font-family: "Noto Naskh Arabic";
  font-size: 3.75rem;
  font-weight: 700;
  line-height: 120%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const SVGWrapper = styled.div`
  cursor: pointer;
`;

export const MapPopoverSubTitle = styled.p`
  font-family: "Overused Grotesk", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;

  b {
    font-weight: 500;
  }
`;

export const MapPopoverText = styled.p`
  font-family: "Overused Grotesk", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
`;
