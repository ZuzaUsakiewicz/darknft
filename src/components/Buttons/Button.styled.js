import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  padding: 1rem 2.875rem;
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  background: ${({ primary, theme }) =>
    primary ? theme.colors.accentColor : "rgb(89, 72, 70)"};
  color: ${({ primary, theme }) =>
    primary ? theme.colors.backgroundColor : theme.colors.bodyTextColor};
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  text-transform: capitalize;
`;
