import { useContext } from "react";
import { LiveAuctionsContainer } from "./LiveAuctions.styled";
import { SectionTitle } from "../Reusables/SectionTitle.styled";
import NftCard from "../Reusables/NftCard";
import { NftContext } from "../../App";

const LiveAuctions = () => {
  const data = useContext(NftContext);
  const threeCards = data.slice(0, 3);

  return (
    <LiveAuctionsContainer>
      <SectionTitle>live auctions</SectionTitle>
      {threeCards.map((item) => {
        return <NftCard key={item.id} item={item} />;
      })}
    </LiveAuctionsContainer>
  );
};

export default LiveAuctions;
