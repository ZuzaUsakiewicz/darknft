import styled from "styled-components";

const Avatar = ({ imgSrc }) => {
  return (
    <AvatarContainer>
      {imgSrc ? <img src={imgSrc} alt="avatar image" /> : null}
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div`
  background: linear-gradient(#e66465, #9198e5);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  position: relative;
  img {
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    border-radius: 50%;
    filter: hue-rotate(90deg);
    transform: scaleX(-1);
  }
`;

export default Avatar;
