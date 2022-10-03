import { useContext } from "react";
import {
  HeroContainer,
  HeroPattern,
  Aside,
  HeroHeading,
  ButtonsContainer,
  HeroCardContainer,
  CardBlur,
  ImageContainer,
  CardCounter,
  Text,
  CardInformation,
  BidButton,
  NumbersContainer,
} from "../HomePage/HeroSection.styled";
import { Button } from "../Buttons/Button.styled";
import Pattern from "../../assets/photos/pattern.jpg";
import { NftContext } from "../../App";

const HeroSection = () => {
  const data = useContext(NftContext);
  const cardItem = data.filter((item) => item.isLive == true)[4];

  return (
    <HeroContainer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <HeroPattern alt="pattern background" src={Pattern} />
      <Aside>
        <HeroHeading>
          Explore, Buy and Sell the <span>Best NFTs!</span>
        </HeroHeading>
        <ButtonsContainer>
          <Button to="/explore" primary="true">
            explore
          </Button>
          <Button to="/create">create</Button>
        </ButtonsContainer>
      </Aside>
      <HeroCardContainer>
        <CardBlur />
        <ImageContainer>
          <img src={cardItem.image} alt="image card" />
          <CardCounter>
            <Text>
              <h5>Current Bid</h5>
              <span>{cardItem.currentBid} ETH</span>
            </Text>
            <Text>
              <h5>Ends in</h5>
              <span>24hrs</span>
            </Text>
          </CardCounter>
        </ImageContainer>
        <CardInformation>
          <Text>
            <h5>{cardItem.author}</h5>
            <h6>@{cardItem.author}</h6>
          </Text>
          <BidButton to="/explore" primary="true">
            Start Bid
          </BidButton>
        </CardInformation>
      </HeroCardContainer>
      <NumbersContainer>
        <div>
          <span>32k+</span>
          <h5>Artworks</h5>
        </div>
        <div>
          <span>20k+</span>
          <h5>Auctions</h5>
        </div>
        <div>
          <span>12k+</span>
          <h5>Creators</h5>
        </div>
      </NumbersContainer>
    </HeroContainer>
  );
};

export default HeroSection;
