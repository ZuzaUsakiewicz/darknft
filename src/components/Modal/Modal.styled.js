import styled from "styled-components";
import { mediaQueries } from "../../theme/mediaQueries";

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.833);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
  padding: 3rem 1rem;
`;
export const CloseButton = styled.button`
  background: transparent;
  border: none;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15%;
  right: 10%;
  div {
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.accentColor};
    &:nth-child(1) {
      transform: rotate(45deg) translate(3px);
    }
    &:nth-child(2) {
      transform: rotate(-45deg) translate(1px);
    }
  }
  @media ${mediaQueries.laptop} {
    right: 25%;
  }
`;

export const ModalContent = styled.div`
  width: 80%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.cardBackgroundColor};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  @media ${mediaQueries.laptop} {
    width: 50%;
  }
`;
