import styled from "styled-components";
import { mediaQueries } from "../../theme/mediaQueries";
import { SectionContainer } from "../Reusables/Container.styled";

export const LiveAuctionsContainer = styled(SectionContainer)`
  gap: 3rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 3rem;
  @media ${mediaQueries.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
