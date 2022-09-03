import styled from "styled-components";
import { mediaQueries } from "../../theme/mediaQueries";

export const ClientsContainer = styled.section`
  padding: 6rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
  img {
    width: 7rem;
    height: auto;
  }
  @media ${mediaQueries.tablet} {
    padding: 16rem 4rem;
    justify-content: space-around;
    gap: 1rem;
  }
  @media ${mediaQueries.laptop} {
    padding: 8rem;

    img {
      width: 10rem;
    }
  }
`;