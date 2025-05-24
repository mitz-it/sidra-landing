import styled from "styled-components";

export const StoriesContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  top: 2rem;
  position: fixed;
  z-index: 1000;
`;
export const ProgressBar = styled.div<{ idx: number; currentSlide: number }>`
  flex: 1;
  width: 4rem;
  height: 0.75rem;
  border-radius: 8px;
  background: ${(props) =>
    props.idx <= props.currentSlide ? "#FFA726" : "#FFE0B2"};
  border: 1px solid #333;
  box-shadow: ${(props) =>
    props.idx <= props.currentSlide ? "0px 2px 0px 0px #00171f" : ""};
  transition: background 0.3s;
`;
