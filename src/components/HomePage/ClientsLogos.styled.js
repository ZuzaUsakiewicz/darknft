import styled from "styled-components";
import { mediaQueries } from "../../theme/mediaQueries";
import { motion } from "framer-motion";

export const ClientsContainer = styled(motion.section)`
  padding: 6rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
  max-width: 2000px;
  margin: 0 auto;
  img {
    width: 7rem;
    height: auto;
  }
  @media ${mediaQueries.laptop} {
    padding: 13rem 8rem;
    img {
      width: 10rem;
    }
  }
  @media ${mediaQueries.desktop} {
    max-width: 1440px;
    margin: 0 auto;
  }
`;
