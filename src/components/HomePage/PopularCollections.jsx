import { useContext } from "react";
import { SectionContainer } from "../Reusables/Container.styled";
import { SectionTitle } from "../Reusables/SectionTitle.styled";
import { NftContext } from "../../App";
import {
  CollectionsContainer,
  CollectionCard,
  CollectionImage,
  CardInfo,
} from "./PopularCollections.styled";
import Avatar from "../Reusables/Avatar";
import { Button } from "../Buttons/Button.styled";

const PopularCollections = () => {
  const data = useContext(NftContext);
  let collections = [
    ...new Map(data.map((item) => [item["author"], item])).values(),
  ].slice(0, 3);

  return (
    <SectionContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <SectionTitle color="#E03054">Popular Collections</SectionTitle>
      <CollectionsContainer>
        {collections.map((collection, index) => {
          return (
            <CollectionCard key={index}>
              <CollectionImage src={collection.image} />
              <CardInfo>
                <span>
                  <Avatar imgSrc={collection.image} />
                  <h3>@{collection.author}</h3>
                </span>
                <p>ERC-721</p>
              </CardInfo>
            </CollectionCard>
          );
        })}
      </CollectionsContainer>
      <Button to="/explore">view all</Button>
    </SectionContainer>
  );
};

export default PopularCollections;
