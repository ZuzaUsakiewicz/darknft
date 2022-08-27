import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaQueries } from "../../theme/mediaQueries";

export const Navbar = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  padding: 2rem 0.5rem;
  height: 3rem;
  background: ${({ navBg }) =>
    navBg ? "rgba(7, 0, 0, 0.452)" : "transparent"};
  z-index: 999;
  transition: background 0.5s linear;
  img {
    position: absolute;
    top: 0.6rem;
    left: 5%;
    width: 3rem;
    height: auto;
    z-index: 100;
    @media ${mediaQueries.laptop} {
      position: absolute;
      width: 4.125rem;
      top: 1.1rem;
      left: calc((100vw - 1000px) / 3);
    }
  }
  @media ${mediaQueries.laptop} {
    height: 6rem;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  list-style-type: none;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-140%)")};
  background: ${({ theme }) => theme.colors.backgroundColor};
  transition: transform 0.6s linear;
  gap: 2rem;
  @media ${mediaQueries.laptop} {
    transform: translate(0);
    flex-direction: row;
    height: 6rem;
    background: transparent;
  }
`;
export const NavbarLink = styled(Link)`
  color: ${({ theme }) => theme.colors.bodyTextColor};
  text-decoration: none;
  position: relative;
  font-size: 1.125rem;
  @media ${mediaQueries.laptop} {
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.colors.accentColor};
      bottom: -10px;
      left: 0;
      transform: scaleX(0);
      transition: transform 0.4s linear;
      transform-origin: center;
    }
    &:hover:after {
      transform: scaleX(100%);
    }
  }
`;

export const HamburgerButton = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  background: transparent;
  position: absolute;
  top: 1.1rem;
  right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  z-index: 100;
  div {
    width: 1.375rem;
    height: 3px;
    background: ${({ theme }) => theme.colors.accentColor};
    transition: transform 0.6s linear, opacity 0.1s linear;
    opacity: 1;
    &:nth-child(1) {
      transform: ${({ open }) =>
        open ? "translateY(-140px)" : "translateY(0)"};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(3) {
      transform: ${({ open }) =>
        open ? "translateY(-7px) rotate(-45deg)" : "translateY(0) rotate(0)"};
    }
  }

  @media ${mediaQueries.laptop} {
    display: none;
  }
`;

export const ActionButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  padding: 1.25rem 1.875rem;
  font-size: ${({ theme }) => theme.typography.linkFS};
  color: ${({ theme }) => theme.colors.accentColor};
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-weight: 600;
  @media ${mediaQueries.laptop} {
    position: absolute;
    top: 0.9rem;
    right: calc((100vw - 1000px) / 3);
  }
`;
