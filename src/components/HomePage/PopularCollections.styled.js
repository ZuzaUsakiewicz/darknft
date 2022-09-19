import styled from "styled-components";
import { flexRowCenter, flexColumnCenter } from "../Reusables/styledHelpers";
import { CardContainer } from "../Reusables/NftCard.styled";
import { mediaQueries } from "../../theme/mediaQueries";

export const CollectionsContainer = styled.div`
  ${flexColumnCenter};
  gap: 2.5rem;
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  padding: 4rem 0 3rem 0;
  @media ${mediaQueries.tablet} {
    ${flexRowCenter};
    flex-wrap: wrap;
  }
  @media ${mediaQueries.desktop} {
    max-width: 3300px;
    margin: 0 auto;
  }
`;

export const CollectionCard = styled(CardContainer)`
  height: 17.4rem;
`;

export const CollectionImage = styled.img`
  width: 18rem;
  height: 11rem;
  object-fit: cover;
  padding-top: 1rem;
`;

export const CardInfo = styled.div`
  ${flexRowCenter};
  justify-content: space-between;
  width: 96%;
  margin: 0 auto;
  padding: 1rem 0;
  height: 4.5rem;
  span {
    ${flexRowCenter};
    gap: 10px;
  }
  h3 {
    letter-spacing: 2px;
  }
  p {
    color: #c2b5c6;
    font-weight: 600;
  }
`;
