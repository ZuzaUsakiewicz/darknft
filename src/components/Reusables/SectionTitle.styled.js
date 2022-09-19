import styled from "styled-components";
import { mediaQueries } from "../../theme/mediaQueries";

export const SectionTitle = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 700;
  position: relative;
  @media ${mediaQueries.tablet} {
    font-size: 2.25rem;
  }
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: ${({ color }) => (color ? color : "#8613A5")};
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    left: -10%;
    top: -20%;
  }
`;
