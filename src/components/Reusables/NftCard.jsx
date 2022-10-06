import { useState } from "react";
import {
  CardContainer,
  ImageContainer,
  InfoContainer,
  CardInfo,
  Loved,
  CurrentBidContainer,
  CardButton,
} from "./NftCard.styled";
import heart from "../../assets/icons/heart.svg";
import Avatar from "../Reusables/Avatar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NftCardModal from "../Modal/NftCardModal";
import Modal from "../Modal/Modal";

const NftCard = ({ item }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <CardContainer>
        <ImageContainer>
          <LazyLoadImage
            src={item.image}
            alt="nft product image"
            effect="opacity"
            width="100%"
            height="304px"
          />
        </ImageContainer>
        <InfoContainer>
          <Avatar imgSrc={item.image} alt="creator avatar" />
          <CardInfo>
            <h5>{item.name}</h5>
            <p> by @{item.author}</p>
          </CardInfo>
          <Loved>
            <img src={heart} alt="heart logo" />
            <h4>{item.loved > 999 ? "999+" : item.loved}</h4>
          </Loved>
        </InfoContainer>
        <CurrentBidContainer>
          <h3>Current Bid</h3>
          <span>{item.currentBid} ETH</span>
        </CurrentBidContainer>
        <CardButton onClick={() => setIsOpenModal(true)}>
          Place a bid
        </CardButton>
      </CardContainer>
      <Modal handleClose={() => setIsOpenModal(false)} isOpen={isOpenModal}>
        <NftCardModal item={item} />
      </Modal>
    </>
  );
};

export default NftCard;
