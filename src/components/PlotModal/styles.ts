import { styled } from "styled-components";

export const Modal = styled.div`
  width: min(87.5rem, 90vw);
  height: min(54.125rem, 80vh);
  padding: 2.5rem;
  border-radius: 20px;
  border: 0.5px solid #00171f;
  background: #fff8f1;
  box-shadow: 0px 6px 0px 0px #00171f;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: 
`;

export const ModalText = styled.p`
  color: #00171f;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin: 0 30px;
`;

export const PlotContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
`;

export const Plot = styled.div<{ imagePath: string }>`
  width: 400px;
  background-image: url(${(props) => props.imagePath});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.3s ease-in-out;
  opacity: 1;
`;

export const PlotLegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
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
