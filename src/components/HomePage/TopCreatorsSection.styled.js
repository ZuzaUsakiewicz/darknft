import styled from "styled-components";
import {
  flexColumnCenter,
  flexRowCenter,
  flexRowSpaceBetween,
  CardShadow,
  CardShadowHover,
} from "../Reusables/styledHelpers";
import { mediaQueries } from "../../theme/mediaQueries";

export const CreatorsContainer = styled.div`
  ${flexColumnCenter};
  gap: 1rem;
  padding: 3rem 0;
  @media ${mediaQueries.tablet} {
    gap: 2rem;
    padding: 4rem 5rem;
    max-width: 58rem;
    ${flexRowCenter};
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;
export const CreatorContainer = styled.div`
  width: 20rem;
  height: 6rem;
  ${flexRowSpaceBetween};
  padding: 0 0.8rem;
  background: #302034;
  position: relative;
  ${CardShadow};
  @media ${mediaQueries.laptop} {
    width: 23rem;
    transition: all 0.3s linear;
    cursor: pointer;
    &:hover {
      transform: scale(1.01);
      ${CardShadowHover}
    }
  }

  h3 {
    font-family: ${({ theme }) => theme.typography.mainFont};
    font-size: 1.25rem;
  }
  h4 {
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.footerColor};
    font-weight: 500;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -0.1rem;
    bottom: 0;
    width: 0.1rem;
    height: 100%;
    background: #e03054;
  }
`;

export const Name = styled.div`
  width: 55%;
  text-align: left;
`;

export const Items = styled.div`
  width: 20%;
  position: relative;
  /* padding: 0 0.5rem; */
  &:before {
    content: "";
    position: absolute;
    top: 0.1rem;
    left: -0.6rem;
    bottom: 0.1rem;
    width: 0.1rem;
    height: 100%;
    background: #5e4564;
  }
`;
