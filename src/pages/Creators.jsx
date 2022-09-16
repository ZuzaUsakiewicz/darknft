import { useContext } from "react";
import { NftContext } from "../App";
import { SectionContainer } from "../components/Reusables/Container.styled";
import { SectionTitle } from "../components/Reusables/SectionTitle.styled";
import Avatar from "../components/Reusables/Avatar";
import {
  CreatorsContainer,
  CreatorContainer,
  Name,
  Items,
} from "../components/HomePage/TopCreatorsSection.styled";

function Creators() {
  const data = useContext(NftContext);

  let creators = [
    ...new Map(data.map((item) => [item["author"], item])).values(),
  ];

  return (
    <SectionContainer style={{ padding: "8rem 0" }}>
      <SectionTitle>All creators</SectionTitle>
      <CreatorsContainer>
        {creators.map((creator, index) => (
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
    </SectionContainer>
  );
}

export default Creators;
