import { Link } from "react-router-dom";
import styled from "styled-components";
import { mediaQueries } from "../../theme/mediaQueries";

export const ConnectWalletContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  h2 {
    font-size: 1.1rem;
  }
  h4 {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.secondaryBodyTextColor};
  }
  h6 {
    font-size: 0.6rem;
    color: ${({ theme }) => theme.colors.accentColor};
    letter-spacing: 2px;
  }
  @media ${mediaQueries.tablet} {
    flex-direction: row;
    h2 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1rem;
    }
    h6 {
      font-size: 0.9rem;
    }
  }
`;

export const ConnectWalletOptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  gap: 0.6rem;
  @media ${mediaQueries.tablet} {
    width: 40%;
    border-right: 1px solid grey;
  }
`;
export const Option = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 12rem;
  color: inherit;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background: #80808031;
  }
`;
export const Icon = styled.div`
  padding: 0.2rem 0.3rem;
  background: rgba(255, 192, 203, 0.058);
  border-radius: 4px;
  display: flex;
  justify-conent: center;
  align-items: center;
`;
export const WalletInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 0.9rem;
  gap: 0.2rem;
  @media ${mediaQueries.tablet} {
    align-items: center;
    width: 55%;
    gap: 0.5rem;
    padding: 0 1rem;
  }
`;
export const Info = styled.p`
  font-size: 0.7rem;
  padding: 0.3rem;
  tex-aling: justify;
  @media ${mediaQueries.tablet} {
    font-size: 0.8rem;
    padding: 2rem 0 2rem 1rem;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  @media ${mediaQueries.tablet} {
    flex-direction: column;
  }
`;
export const WalletInfoButton = styled(Link)`
  background: ${({ primary, theme }) =>
    primary ? theme.colors.accentColor : "transparent"};
  font-size: 1rem;
  font-weight: 600;
  text-transform: capitalize;
  padding: 0.2rem 0.6rem;
  border-radius: 40px;
  transition: transform 0.2s ease-in;
  border: none;
  text-decoration: none;
  color: ${({ primary, theme }) =>
    primary ? theme.colors.backgroundColor : theme.colors.accentColor};
  @media ${mediaQueries.laptop} {
    &:hover {
      transform: scale(1.1);
    }
  }
`;
