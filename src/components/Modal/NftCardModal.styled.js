import styled from "styled-components";
import { mediaQueries } from "../../theme/mediaQueries";
import {
  flexColumnCenter,
  flexColumnAlignLeft,
} from "../Reusables/styledHelpers";
import { Button } from "../Buttons/Button.styled";

export const CardModalContainer = styled.div`
  width: 100%;
  height: 100%;
  ${flexColumnCenter};
  gap: 0.5rem;
  @media ${mediaQueries.laptop} {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const ImgContainer = styled.div`
  width: 10rem;
  height: 10rem;
  position: relative;
  img {
    object-fit: cover;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    filter: saturate(10%);
  }
`;

export const InfoContainer = styled.div`
  ${flexColumnAlignLeft};
  div {
    padding: 1rem 0;
    p {
      font-size: 1rem;
      span {
        color: ${({ theme }) => theme.colors.accentColor};
      }
      @media ${mediaQueries.laptop} {
        font-size: 1.5rem;
      }
    }
  }
`;

export const CollectButton = styled(Button)`
  margin: 0 auto;
  width: 60%;
  padding: 0.6rem 1.2rem;
  font-size: 1.3rem;
`;
