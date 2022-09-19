import styled from "styled-components";
import { mediaQueries } from "../../theme/mediaQueries";

export const Container = styled.section`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* @media ${mediaQueries.tablet} {
    padding: 3rem calc((100vw - 1000px) / 3);
  } */
  @media ${mediaQueries.laptopL} {
    padding: 3rem calc((100vw - 1000px) / 3);
  }
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3rem 0;
`;
