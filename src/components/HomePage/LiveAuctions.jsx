import { useContext } from "react";
import { LiveAuctionsContainer, CardsContainer } from "./LiveAuctions.styled";
import { SectionTitle } from "../Reusables/SectionTitle.styled";
import NftCard from "../Reusables/NftCard";
import { NftContext } from "../../App";
import { Button } from "../Buttons/Button.styled";

const LiveAuctions = () => {
  const data = useContext(NftContext);
  const threeCards = data.slice(0, 3);

  return (
    <LiveAuctionsContainer>
      <SectionTitle>live auctions</SectionTitle>
      <CardsContainer>
        {threeCards.map((item) => {
          return <NftCard key={item.id} item={item} />;
        })}
      </CardsContainer>
      <Button to="/">view all</Button>
    </LiveAuctionsContainer>
  );
};

export default LiveAuctions;
