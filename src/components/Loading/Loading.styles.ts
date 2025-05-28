import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import svg from "../../assets/svg/Loading.svg"


const move = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
`;

export const LoadingContainer = styled.div`
  background-color: ${theme.colors.darkRed};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingAnimatedSvg = styled.div`
  width: 150px;
  height: 150px;
  background: linear-gradient(90deg, ${theme.colors.cream}, ${theme.colors.lightCream}, ${theme.colors.lightCream}, ${theme.colors.cream});
  background-size: 200% 100%;
  animation: ${move} 4s linear infinite;
  -webkit-mask-image: url(${svg});
  mask-image: url(${svg});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
`;

export const LoadingPercentage = styled.div`
  color: ${theme.colors.cream};
  font-family: "Zarathustra", sans-serif;
  font-size: 2rem;
  margin-top: 20px;
`;
