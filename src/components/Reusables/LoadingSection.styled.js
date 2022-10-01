import styled, { keyframes } from "styled-components";
import { flexColumnCenter, flexRowCenter } from "./styledHelpers";

export const LoadingContainer = styled.div`
  ${flexColumnCenter};
  min-height: 100vh;
`;

export const LoaderContainer = styled.div`
  ${flexRowCenter};
  align-items: flex-end;
  gap: 10px;
`;
const fadeInOut = keyframes`
  0% {
  transform: scaleY(0);
}
100% {
  transform: scaleY(1);
}
`;
export const Column = styled.div`
  width: 10px;
  height: 24px;
  transform: scaleY(0);
  transform-origin: bottom;
  background: ${({ theme }) => theme.colors.accentColor};
  animation: ${fadeInOut} 2s linear infinite alternate;
  animation-delay: ${({ columnNum }) => columnNum + 0.9}s;
`;
