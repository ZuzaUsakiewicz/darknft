import styled from "styled-components";

export const CardContainer = styled.div`
  width: 21.4rem;
  height: 35rem;
  background: ${({ theme }) => theme.colors.cardBackgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
`;

export const ImageContainer = styled.div`
  width: 18rem;
  height: 19rem;
  position: relative;
  object-position: top center;
  img {
    width: 100%;
    height: 19rem;
    object-fit: cover;
  }
  &:after {
    content: "03:18:24";
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 3rem;
    background: linear-gradient(
      to right,
      rgba(128, 0, 128, 0.7),
      rgba(239, 157, 240, 0.7)
    );
  }
`;

export const InfoContainer = styled.div`
  height: 10rem;
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Loved = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  h4 {
    color: #bdaac1;
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    font-weight: 400;
    font-size: 1.5rem;
    padding-left: 0.5rem;
  }
`;

export const Avatar = styled.div`
  background: purple;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
`;

export const CardInfo = styled.div`
  font-weight: 500;
  text-align: left;
  padding: 0.5rem 0 0 0.5rem;
  width: 11rem;
  height: 5rem;
  word-break: break-all;
  h5 {
    font-size: 1.125rem;
    text-transform: capitalize;
  }
  p {
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    font-weight: 400;
    font-size: 0.875rem;
    color: #bdaac1;
  }
`;

export const CurrentBidContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  h3 {
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    font-weight: 400;
    color: #bdaac1;
    font-size: 1.25rem;
  }
  span {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
