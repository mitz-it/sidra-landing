import styled from "styled-components";
import { theme } from "../../styles/theme";

export const BottomNavigationContainer = styled.nav`
  position: fixed;
  bottom: 20px;
  width: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  z-index: 999;
`;

export const BottomNavigationSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const BottomNavigationItem = styled.button<{ isActive?: boolean }>`
  background: ${({ isActive }) =>
    isActive ? theme.colors.yellow : theme.colors.cream};
  font-family: "Overused Grotesk", sans-serif;
  font-size: 1.8rem;
  border: 1px solid ${theme.colors.black};
  border-radius: 1.125rem;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  color: ${theme.colors.black};
  transition: background 0.3s;
  box-shadow: 0px 4px 0px 0px #000000;
  display: flex;
  align-items: center;
  font-weight: 500;

  &:hover {
    background: ${theme.colors.yellow};
  }
`;
