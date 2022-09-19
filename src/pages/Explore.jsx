import { useContext } from "react";
import { NftContext } from "../App";
import { CardsContainer } from "../components/HomePage/LiveAuctions.styled";
import { SectionContainer } from "../components/Reusables/Container.styled";
import NftCard from "../components/Reusables/NftCard";
import { SectionTitle } from "../components/Reusables/SectionTitle.styled";

function Explore() {
  const data = useContext(NftContext);
  return (
    <SectionContainer style={{ padding: "8rem 1rem 4rem 1rem" }}>
      <SectionTitle>All Auctions</SectionTitle>
      <CardsContainer style={{ padding: "3rem 0.5rem" }}>
        {data.map((item) => {
          return <NftCard key={item.id} item={item} />;
        })}
      </CardsContainer>
    </SectionContainer>
  );
}

export default Explore;
