import { SectionContainer } from "../Reusables/Container.styled";
import { SectionTitle } from "../Reusables/SectionTitle.styled";
import { useContext } from "react";
import { NftContext } from "../../App";
import Avatar from "../Reusables/Avatar";
import {
  CreatorsContainer,
  CreatorContainer,
  Name,
  Items,
} from "./TopCreatorsSection.styled";
import { Button } from "../Buttons/Button.styled";

const TopCreatorsSection = () => {
  const data = useContext(NftContext);

  let creators = [
    ...new Map(data.map((item) => [item["author"], item])).values(),
  ];

  return (
    <SectionContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <SectionTitle color="#E03054">Top Creators</SectionTitle>
      <CreatorsContainer>
        {/* each creator component will be a link to individual route with details soon... */}
        {creators.slice(0, 4).map((creator, index) => (
          <CreatorContainer key={index}>
            <Avatar imgSrc={creator.image} />
            <Name>
              <h3>{creator.author}</h3>
              <h4>{creator.currentBid}</h4>
            </Name>
            <Items>
              <h3>
                {data.filter((element) => element.author === creator.author)
                  .length > 999
                  ? 999
                  : data.filter((element) => element.author === creator.author)
                      .length}
              </h3>
              <h4>
                {data.filter((element) => element.author === creator.author)
                  .length <= 1
                  ? "item"
                  : "items"}
              </h4>
            </Items>
          </CreatorContainer>
        ))}
      </CreatorsContainer>
      <Button to="/creators">view all</Button>
    </SectionContainer>
  );
};

export default TopCreatorsSection;
