import { styled } from "styled-components";

export const Modal = styled.div<{
  dimensions?: { height: string; width: string };
}>`
  font-family: "Overused Grotesk", sans-serif;
  width: ${(props) => props.dimensions?.width ?? "90vw"};
  height: ${(props) => props.dimensions?.height ?? '80vh'};
  padding: 2.5rem;
  border-radius: 1.25rem;
  border: 0.03125rem solid #00171f;
  background: #fff8f1;
  box-shadow: 0px 6px 0px 0px #00171f;
  position: relative;
  display: ${(props) => (props.dimensions ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  transition: height 0.3s ease-in-out;
`;

export const ModalText = styled.p<{ highlightColor?: string }>`
  color: #00171f;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin: 0 1.25rem;

  ${({ highlightColor }) =>
    highlightColor &&
    `
    mark {
      background: ${highlightColor};
      padding: 0 0.375rem;
      border-radius: 0.625rem;
      font-weight: 700;
    }
  `}
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.125rem;
`;

export const SmallSpecialModalTitle = styled.div`
  text-align: center;
  font-size: 2.75rem;
  font-family: "Zarathustra", sans-serif;
  font-weight: 400;
  line-height: normal;
`;

export const SmallSpecialModalText = styled.div`
  font-size: 1.75rem;
  font-family: "Overused Grotesk", sans-serif;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

export const Plot = styled.div<{
  imagePath: string;
  width?: string;
  height?: string;
}>`
  width: ${(props) => props.width ?? "25rem"};
  height: ${(props) => props.height ?? "25rem"};
  background-image: url(${(props) => props.imagePath});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.3s ease-in-out;
  opacity: 1;
`;

export const PlotLegendContainer = styled.div`
  position: relative;
  top: 3.125rem;
  left: -12.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.3125rem;
`;

export const PlotLegendItem = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.3125rem;
  cursor: pointer;
`;

export const SkipButton = styled.div`
  color: #00171f;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  position: absolute;
  left: 1.25rem;
  bottom: 1.25rem;
  cursor: pointer;
`;

export const InfoIcon = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  margin-right: 0.625rem;
  border: 0.03125rem solid #00171f;
  background: #fff8f1;
  box-shadow: 0px 2px 0px 0px #00171f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: "Zarathustra", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #00171f;
  transition: transform 0.2s ease-in-out;
`;

export const InfoTooltip = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 0;
  z-index: 10;
  background: #fff8f1;
  color: #00171f;
  border: 0.03125rem solid #00171f;
  border-radius: 1rem;
  box-shadow: 0px 6px 0px 0px #00171f;
  padding: 0.875rem 0.625rem;
  font-size: 1.125rem;
  font-family: "Overused Grotesk", sans-serif;
  max-width: 21.875rem;
  min-width: 15.625rem;
  line-height: 1.4;
  text-align: left;
  pointer-events: none;
`;