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
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 3rem;
  a {
    text-decoration: none;
    color: inherit;
    color: ${({ theme }) => theme.colors.footerColor};
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
`;

export const IconLink = styled(Link)`
  color: ${({ theme }) => theme.colors.footerIconsColor};
  font-size: 1.5rem;
`;
