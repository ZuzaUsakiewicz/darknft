import React from "react";
import { motion } from "framer-motion";
import {
  CardModalContainer,
  ImgContainer,
  InfoContainer,
  CollectButton,
} from "./NftCardModal.styled";
import { SiEthereum } from "react-icons/si";

const NftCardModal = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.2 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.2, transition: { delay: 1 } }}
    >
      <CardModalContainer>
        <ImgContainer>
          <img src={item.image} />
        </ImgContainer>
        <InfoContainer>
          <div>
            <p>
              <span>{item.name}</span> by {item.author}
            </p>
            <p>
              <SiEthereum />
              {item.currentBid} ETH
            </p>
          </div>
          <CollectButton to={`/explore/?category=${item.category}`}>
            Collect!
          </CollectButton>
        </InfoContainer>
      </CardModalContainer>
    </motion.div>
  );
};

export default NftCardModal;
