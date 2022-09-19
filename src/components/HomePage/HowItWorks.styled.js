import styled from "styled-components";
import { mediaQueries } from "../../theme/mediaQueries";

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  padding: 6rem 0 2rem 0;
  @media ${mediaQueries.tablet} {
    flex-direction: row;
    gap: 0;
  }
`;

export const Line = styled.img`
  transform: rotate(90deg);
  height: 5rem;
  width: 5rem;

  @media ${mediaQueries.tablet} {
    transform: rotate(0deg);
    width: 8rem;
    height: 8rem;
    padding: 1rem 0 4rem 0;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    padding: 2rem;
    background: #372839;
    border-radius: 50%;
    z-index: -1;
    top: -1rem;
    @media ${mediaQueries.tablet} {
      padding: 2.6rem;
      top: -1.2rem;
    }
  }
  img {
    width: 2.25rem;
    height: 2.25rem;
    positon: relative;

    @media ${mediaQueries.tablet} {
      width: 3rem;
      height: 3rem;
    }
  }
  h4 {
    font-size: 1.2rem;
    text-transform: capitalize;
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    color: ${({ theme }) => theme.colors.accentColor};
    font-weight: 600;
  }
`;
