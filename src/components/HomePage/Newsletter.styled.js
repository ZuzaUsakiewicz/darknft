import styled from "styled-components";
import { SectionContainer } from "../Reusables/Container.styled";
import { mediaQueries } from "../../theme/mediaQueries";

export const NewsletterContainer = styled(SectionContainer)`
  padding: 1rem 0;
`;

export const NewsletterContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
  @media ${mediaQueries.tablet} {
    padding: 4rem 0;
    gap: 1rem;
  }
  h2 {
    font-size: 2.25rem;
    padding: 0 2rem;
    z-index: 1;
  }
  input {
    border: 1px solid ${({ theme }) => theme.colors.accentColor};
    background: transparent;
    color: ${({ theme }) => theme.colors.secondaryBodyTextColor};
    padding: 1.2rem;
    width: 343px;
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    @media ${mediaQueries.tablet} {
      font-size: 1.25rem;
    }
  }
  button {
    padding: 0.5rem 2rem;
    border: none;
    background: ${({ theme }) => theme.colors.accentColor};
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.buttonTextColor};
    text-transform: capitalize;
    @media ${mediaQueries.tablet} {
      padding: 1.4rem 3rem;
      border: 1px solid ${({ theme }) => theme.colors.accentColor};
    }
  }
`;

export const NewsletterBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.06;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media ${mediaQueries.laptopL} {
      max-width: 1400px;
      margin: 0 auto;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media ${mediaQueries.tablet} {
    flex-direction: row;
    gap: 0;
  }
`;
