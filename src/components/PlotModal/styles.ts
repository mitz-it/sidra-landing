import { styled } from "styled-components";

export const Modal = styled.div<{
  dimensions?: { height: string; width: string };
}>`
  font-family: "Overused Grotesk", sans-serif;
  width: ${(props) => props.dimensions?.width ?? "min(87.5rem, 90vw)"};
  height: ${(props) => props.dimensions?.height ?? "min(54.125rem, 80vh)"};
  padding: 2.5rem;
  border-radius: 20px;
  border: 0.5px solid #00171f;
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
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin: 0 20px;

  ${({ highlightColor }) =>
    highlightColor &&
    `
    mark {
      background: ${highlightColor};
      padding: 0 6px;
      border-radius: 10px;
      font-weight: 700;
    }
  `}
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const SmallSpecialModalTitle = styled.div`
  text-align: center;
  font-size: 44px;
  font-family: "Zarathustra", sans-serif;
  font-weight: 400;
  line-height: normal;
`;

export const SmallSpecialModalText = styled.div`
  font-size: 28px;
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
  width: ${(props) => props.width ?? "400px"};
  height: ${(props) => props.height ?? "400px"};
  background-image: url(${(props) => props.imagePath});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.3s ease-in-out;
  opacity: 1;
`;

export const PlotLegendContainer = styled.div`
  position: relative;
  top: 50px;
  left: -200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
`;

export const PlotLegendItem = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`;

export const SkipButton = styled.div`
  color: #00171f;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  position: absolute;
  left: 20px;
  bottom: 20px;
  cursor: pointer;
`;

export const InfoIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  border: 0.5px solid #00171f;
  background: #fff8f1;
  box-shadow: 0px 2px 0px 0px #00171f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: "Zarathustra", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #00171f;
  transition: transform 0.2s ease-in-out;
`;

export const InfoTooltip = styled.div`
  position: absolute;
  top: 40px; /* adjust as needed */
  right: 0px;
  z-index: 10;
  background: #fff8f1;
  color: #00171f;
  border: 0.5px solid #00171f;
  border-radius: 16px;
  box-shadow: 0px 6px 0px 0px #00171f;
  padding: 14px 10px;
  font-size: 18px;
  font-family: "Overused Grotesk", sans-serif;
  max-width: 350px;
  min-width: 250px;
  line-height: 1.4;
  text-align: left;
  pointer-events: none; /* so it doesn't block hover */
`;