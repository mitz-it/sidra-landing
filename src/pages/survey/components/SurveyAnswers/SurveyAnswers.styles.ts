import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const SurveyAnswersContainer = styled.div`
  background-color: ${theme.colors.cream};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8.5rem 0;
`;

export const SurveyAnswersTitle = styled.h2`
  font-family: "Zarathustra", sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 0.5rem;

  text-align: center;
  & mark {
    background-color: ${theme.colors.cream};
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.black};
    padding: 0.1rem 0.8rem;
    border-radius: 3.375rem;
  }
`;

export const Select = styled.select`
  margin-bottom: 13rem;
  margin-top: 13rem;
  background-color: transparent;
  border: 1px solid rgba(0, 23, 31, 1);
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 1);
  border-radius: 54px;
  color: #000;
  font-family: "Zarathustra", sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0.625rem 3rem 0.625rem 1.75rem;
  background-image: url('data:image/svg+xml;utf8,<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7617 11.7805L11.0546 12.4876L11.7617 13.1947L12.4688 12.4876L11.7617 11.7805ZM23.0299 1.92659C23.4204 1.53606 23.4204 0.9029 23.0299 0.512376C22.6393 0.121851 22.0062 0.121851 21.6156 0.512376L23.0299 1.92659ZM1.2002 1.21948L0.493105 1.92661L11.0546 12.4876L11.7617 11.7805L12.4688 11.0734L1.90729 0.512359L1.2002 1.21948ZM11.7617 11.7805L12.4688 12.4876L23.0299 1.92659L22.3228 1.21948L21.6156 0.512376L11.0546 11.0734L11.7617 11.7805Z" fill="%2300171F"/></svg>');
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.5rem auto;
  pointer-events: auto;
  outline: 1px solid rgba(0, 23, 31, 1);

  & option {
    background-color: ${theme.colors.cream};
    color: ${theme.colors.black};
  }
`;

export const ComparisonSection = styled.div`
  margin-bottom: 2rem;
  width: 83.41669rem;
`;

export const QuestionItem = styled.div`
  margin-bottom: 15rem;
`;

export const ScaleContainer = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
`;

export const ScaleBackground = styled.div`
  width: 100%;
  height: 3rem;
  border: 1px solid ${theme.colors.black};
  box-shadow: 0px 4px 0px 0px ${theme.colors.black};
  border-radius: 9999px;
  position: relative;
`;

export const ScaleMark = styled.div<{ position: number }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: ${(props) => (props.position - 1) * 25}%;
`;

export const ScaleLine = styled.div`
  width: 1px;
  height: 1rem;
  background-color: #9ca3af;
  margin-bottom: 0.25rem;
`;

export const ScaleNumber = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
`;

export const Marker = styled.div<{
  position: number;
  color: string;
  size?: number;
  absolute?: boolean;
}>`
  ${(props) => props.absolute && "position:absolute"};
  width: ${(props) => props.size || 3}rem;
  height: ${(props) => props.size || 3}rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: 1px solid ${theme.colors.black};
  box-shadow: 0px 3px 0px 0px ${theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  left: calc(
    (${(props) => (props.position - 1) * 25}%) -
      (
        ${(props) =>
          props.position === 5 ? "3rem" : props.position === 1 ? 0 : "1.5rem"}
      )
  );

  &:hover {
    filter: brightness(0.8);
    span {
      visibility: visible;
    }
  }
`;

export const MarkerText = styled.span<{
  defaultValue?: boolean;
}>`
  position: absolute;
  top: 4rem;
  width: 7rem;
  color: #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Overused Grotesk";
  font-size: 1.25rem;
  line-height: 100%;
  font-weight: 450;
  ${({ defaultValue }) =>
    !defaultValue &&
    `
    visibility: hidden;
  `}
`;

export const Legend = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
`;

export const LegendItem = styled.span`
  display: flex;
  color: #000;
  font-family: "Zarathustra", sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
`;

export const BelongSection = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

export const BelongCircle = styled.div<{ size: number; color: string }>`
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid #00171f;
  box-shadow: 0px 4px 0px 0px #00171f;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2rem;
  position: relative;
  flex-shrink: 0;
`;

export const BelongCircleContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BelongCircleLabel = styled.span<{ isUserAnswer?: boolean }>`
  color: #000;
  font-family: "Overused Grotesk";
  font-size: 1.5rem;
  font-weight: 450;

  ${({ isUserAnswer }) =>
    isUserAnswer &&
    `
      ${BelongCircle}:hover & {
        visibility: hidden;
      }
  `}
`;

export const BelongCirclePercent = styled.span<{ isUserAnswer?: boolean }>`
  color: #ffeedf;
  text-shadow: 0px 2px 0px #00171f;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #00171f;
  font-family: Zarathustra;
  font-weight: 400;

  ${({ isUserAnswer }) =>
    isUserAnswer &&
    `
      ${BelongCircle}:hover & {
        visibility: hidden;
      }
  `}
`;

export const BelongUserIndicator = styled.div`
  position: absolute;
  font-family: "Overused Grotesk";
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  color: #222;
  font-weight: 600;
  text-align: center;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${BelongCircle}:hover & {
    visibility: visible;
  }
`;

export const SurveyAnswersButton = styled.a`
  background: ${theme.colors.yellow};
  text-decoration: none;
  font-family: "Overused Grotesk", sans-serif;
  font-size: 1.8rem;
  border: 1px solid ${theme.colors.black};
  border-radius: 1.125rem;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  color: ${theme.colors.black};
  transition: background 0.3s;
  box-shadow: 0px 4px 0px 0px ${theme.colors.black};
  display: flex;
  align-items: center;
  font-weight: 500;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const ScaleMarkerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -1.2rem;
  left: 0;
  width: 3rem;
  pointer-events: none;
`;

export const ScaleMarkerBall = styled.div<{ color: string }>`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background: ${(props) => props.color};
  border: 2.5px solid #222;
  box-shadow: 0 2px 0 #222;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const ScaleMarkerSVGSpace = styled.div`
  width: 2.2rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.1rem;
`;

export const ScaleMarkerText = styled.div`
  font-family: "Overused Grotesk", sans-serif;
  font-size: 1.1rem;
  color: #222;
  text-align: center;
  margin-top: 0.1rem;
  line-height: 1.1;
`;
