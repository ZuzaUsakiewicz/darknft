import { SectionContainer } from "../Reusables/Container.styled";
import { SectionTitle } from "../Reusables/SectionTitle.styled";
import { useContext } from "react";
import { NftContext } from "../../App";
import { CreatorsContainer } from "./TopCreatorsSection.styled";
import { Button } from "../Buttons/Button.styled";
import CreatorCard from "../Reusables/CreatorCard";

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
        {creators.slice(0, 4).map((creator, index) => (
          <CreatorCard creator={creator} data={data} key={index} />
        ))}
      </CreatorsContainer>
      <Button to="/creators">view all</Button>
    </SectionContainer>
  );
};

export default TopCreatorsSection;
