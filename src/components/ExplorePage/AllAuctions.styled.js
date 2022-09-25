import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CategoriesNavigation = styled.ul`
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  padding: 3rem 0.5rem 0 0.5rem;
`;
export const CategoryLink = styled(NavLink)`
  text-decoration: none;
`;
