import styled from "styled-components";
import { Container } from "../Reusables/Container.styled";
import { mediaQueries } from "../../theme/mediaQueries";
import { Button } from "../Buttons/Button.styled";

export const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  gap: 3rem;
  position: relative;
  @media ${mediaQueries.tablet} {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 7rem;
  }
  @media ${mediaQueries.laptop} {
    padding-top: 5rem;
  }
`;

export const HeroPattern = styled.img`
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  height: 35%;
  width: 100%;
  z-index: -1;
  opacity: 0.1;
  @media ${mediaQueries.tablet} {
    visibility: hidden;
  }
`;
export const Aside = styled.div`
  @media ${mediaQueries.tablet} {
    width: 50%;
    align-items: center;
  }
  @media ${mediaQueries.laptop} {
    width: 60%;
    align-items: left;
  }
  @media ${mediaQueries.desktop} {
    width: 80%;
  }
`;
export const HeroHeading = styled.h1`
  font-size: 42px;
  text-align: center;
  padding: 1rem 0;
  span {
    color: ${({ theme }) => theme.colors.accentColor};
  }
  @media ${mediaQueries.tablet} {
    font-size: 2.5rem;
    padding: 0 0 3rem 1.5rem;
  }
  @media ${mediaQueries.laptop} {
    font-size: 5.3rem;
    text-align: left;
    line-height: 6rem;
    padding: 1rem 0 3rem 0;
  }
  @media ${mediaQueries.desktop} {
    font-size: 5.3rem;
    text-align: left;
    line-height: 6rem;
    padding: 1rem 0 3rem 2rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  width: 100%;
  @media ${mediaQueries.laptop} {
    justify-content: flex-start;
  }
`;

export const HeroCardContainer = styled.div`
  width: 17.625rem;
  height: 23.625rem;
  position: relative;
  @media ${mediaQueries.tablet} {
    width: 18rem;
    height: 24rem;
    padding-right: 2rem;
  }
  @media ${mediaQueries.laptop} {
    width: 26rem;
    height: 40rem;
    padding-top: 4rem;
    &:after {
      content: "";
      position: absolute;
      width: 47rem;
      height: 49rem;
      top: 45%;
      left: 50%;
      overflow-x: hidden;
      transform: translate(-50%, -50%);
      background: #654c62d4;
      filter: blur(150px);
      z-index: -1;
    }
  }
  @media ${mediaQueries.desktop} {
    width: 34rem;
  }
`;
export const CardBlur = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(79, 70, 78, 0.35);
  z-index: -1;
  width: 96vw;
  overflow-x: hidden;
  height: 30rem;
  @media ${mediaQueries.tablet} {
    width: 24rem;
    height: 46rem;
    left: 38%;
  }
  @media ${mediaQueries.laptop} {
    width: 48rem;
    height: 54rem;
    left: 50%;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardCounter = styled.div`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 0.5rem 1.5rem;
  width: 90%;
  background: linear-gradient(
    to right,
    rgba(61, 41, 66, 0.868),
    rgba(78, 58, 76, 0.595)
  );
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  h5,
  span {
    font-family: ${({ theme }) => theme.typography.mainFont};
  }
  h5 {
    font-size: 1rem;
    font-weight: 500;
  }
  span {
    font-size: 1.375rem;
    font-weight: 700;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const CardInformation = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  gap: 2rem;
  color: #1a161c;
  h5 {
    font-size: 1.125rem;
  }
  h6 {
    font-weight: 400;
    font-size: 0.8rem;
  }
  @media ${mediaQueries.laptop} {
    gap: 8rem;
  }
`;

export const BidButton = styled(Button)`
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 800;
`;

export const NumbersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  width: 100%;
  padding: 1rem 0.5rem;
  span {
    font-size: 2.25rem;
    font-weight: 700;
    @media ${mediaQueries.laptop} {
      font-size: 3rem;
    }
  }
  h5 {
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    font-size: 1rem;
    font-weight: 400;
    color: #808080;
    @media ${mediaQueries.laptop} {
      font-size: 1.5rem;
    }
  }
  @media ${mediaQueries.tablet} {
    position: absolute;
    bottom: -9.5rem;
    left: 4rem;
    width: 40%;
  }
  @media ${mediaQueries.laptop} {
    left: 20%;
    bottom: -5%;
    width: 30rem;
  }
  @media ${mediaQueries.desktop} {
    left: 30%;
    bottom: -10%;
    width: 30rem;
  }
`;
