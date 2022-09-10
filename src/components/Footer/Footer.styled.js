import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaQueries } from "../../theme/mediaQueries";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0.5rem;
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  gap: 2rem;
  h3 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  p {
    text-align: center;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.footerColor};
  }
  img {
    width: 6rem;
    height: auto;
  }
  @media ${mediaQueries.laptop} {
    flex-direction: row;
    justify-content: center;
    position: relative;
    gap: 3.5rem;
    p {
      width: 27%;
      max-width: 500px;
    }
  }
  @media ${mediaQueries.desktop} {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 3rem;
  a {
    text-decoration: none;
    color: inherit;
    color: ${({ theme }) => theme.colors.footerColor};
  }
  @media ${mediaQueries.laptop} {
    gap: 5rem;
  }
`;
export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style-type: none;
`;
export const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  @media ${mediaQueries.laptop} {
    position: absolute;
    left: 35%;
    bottom: 15%;
  }
  @media ${mediaQueries.desktop} {
    max-width: 300px;
  }
`;

export const IconLink = styled(Link)`
  color: ${({ theme }) => theme.colors.footerIconsColor};
  font-size: 1.5rem;
`;
