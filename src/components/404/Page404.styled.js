import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaQueries } from "../../theme/mediaQueries";

export const Text404 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  h2 {
    font-size: 10rem;
    line-height: 100%;
  }
  @media ${mediaQueries.tablet} {
    padding: 2rem 0;
    h2 {
      font-size: 35rem;
      line-height: 100%;
    }
  }
`;
export const GoBackLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.accentColor};
`;
