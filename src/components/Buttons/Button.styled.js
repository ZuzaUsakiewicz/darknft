import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaQueries } from "../../theme/mediaQueries";

export const Button = styled(Link)`
  padding: 0.8rem 2.875rem;
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  background: ${({ primary, theme }) =>
    primary ? theme.colors.accentColor : "transparent"};
  color: ${({ primary, theme }) =>
    primary ? theme.colors.buttonTextColor : theme.colors.bodyTextColor};
  cursor: pointer;
  text-decoration: none;
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 1px;
  transition: opacity 0.3s linear, transform 0.3s linear;
  &:hover {
    opacity: 0.6;
    transform: translateY(1px);
  }
  @media ${mediaQueries.laptop} {
    font-size: 1.5rem;
    padding: 1.2rem 4rem;
  }
`;

export const CardButton = styled(Button)`
  padding: 0.8rem 4rem;
  width: 100%;
  font-size: 1.25rem;
  background: ${({ theme }) => theme.colors.cardButtonBgColor};
  border: 1px solid #bcb39a;
`;
