import styled from "styled-components";
import { mediaQueries } from "../../theme/mediaQueries";
import { motion } from "framer-motion";

export const ModalContainer = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(60, 55, 55, 0.833);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
  padding: 5rem 1rem;
`;
export const CloseButton = styled.button`
  background: transparent;
  border: none;
  width: 2rem;
  height: 2rem;
  top: -2rem;
  position: relative;
  @media ${mediaQueries.tablet} {
    top: -3rem;
  }
  &:before {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.cardButtonBgColor};
    border-radius: 50%;
    padding: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 0.4s linear, transform 0.3s linear;
  }
  &:hover {
    &:before {
      opacity: 0.8;
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
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
`;

export const ModalContent = styled.div`
  width: 16.5rem;
  height: 34rem;
  background: ${({ theme }) => theme.colors.cardButtonBgColor};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 10px;
  @media ${mediaQueries.laptop} {
    width: 50rem;
    height: 26rem;
  }
`;
