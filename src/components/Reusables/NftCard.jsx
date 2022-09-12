import { CardButton } from "../Buttons/Button.styled";
import {
  CardContainer,
  ImageContainer,
  InfoContainer,
  Avatar,
  CardInfo,
  Loved,
  CurrentBidContainer,
} from "./NftCard.styled";
import heart from "../../assets/icons/heart.svg";

const NftCard = ({ item }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={item.image} />
      </ImageContainer>
      <InfoContainer>
        <Avatar></Avatar>
        <CardInfo>
          <h5>{item.name}</h5>
          <p> by @{item.author}</p>
        </CardInfo>
        <Loved>
          <img src={heart} />
          <h4>{item.loved > 999 ? "999+" : item.loved}</h4>
        </Loved>
      </InfoContainer>
      <CurrentBidContainer>
        <h3>Current Bid</h3>
        <span>{item.currentBid} ETH</span>
      </CurrentBidContainer>
      <CardButton to="/">Place a bid</CardButton>
    </CardContainer>
  );
};

export default NftCard;
