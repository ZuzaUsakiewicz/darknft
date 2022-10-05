import { useContext } from "react";
import { NftContext } from "../App";
import { SectionContainer } from "../components/Reusables/Container.styled";
import { SectionTitle } from "../components/Reusables/SectionTitle.styled";
import { CreatorsContainer } from "../components/HomePage/TopCreatorsSection.styled";
import CreatorCard from "../components/Reusables/CreatorCard";

function Creators() {
  const data = useContext(NftContext);

  let creators = [
    ...new Map(data.map((item) => [item["author"], item])).values(),
  ];

  return (
    <SectionContainer
      style={{ padding: "8rem 0" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SectionTitle>All creators</SectionTitle>
      <CreatorsContainer>
        {creators.map((creator, index) => (
          <CreatorCard creator={creator} data={data} />
        ))}
      </CreatorsContainer>
    </SectionContainer>
  );
}

export default Creators;
