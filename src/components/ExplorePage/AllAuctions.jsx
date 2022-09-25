import { useSearchParams } from "react-router-dom";
import NftCard from "../Reusables/NftCard";
import { CardsContainer } from "../HomePage/LiveAuctions.styled";
import { useContext, useMemo } from "react";
import { NftContext } from "../../App";

export const AllAuctions = () => {
  const data = useContext(NftContext);
  let [searchParams] = useSearchParams();
  let category = searchParams.get("category");

  const filteredCards = useMemo(() => {
    if (!category) return data;
    return data?.filter(
      (card) => card.category.toLowerCase() === category.toLowerCase()
    );
  }, [category]);

  return (
    <CardsContainer style={{ padding: "3rem 0.5rem" }}>
      {filteredCards.map((item) => {
        return <NftCard key={item.id} item={item} />;
      })}
    </CardsContainer>
  );
};
