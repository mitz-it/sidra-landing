import { styled } from "styled-components";

export const Modal = styled.div`
  position: absolute;
  top: 40%;
  left: 70%;
  transform: translate(-50%, -50%);
  padding: 2.5rem;
  z-index: 1000;
  max-width: 43.75rem;
  border-radius: 20px;
  border: 0.5px solid #00171f;
  background: #fff8f1;
  box-shadow: 0px 6px 0px 0px #00171f;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const NormalText = styled.div`
  font-size: 1.25rem;
  font-family: "Overused Grotesk", sans-serif;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

export const SpecialText = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 2rem;
  font-family: "Zarathustra", sans-serif;
  font-weight: 400;
  line-height: normal;
`;
