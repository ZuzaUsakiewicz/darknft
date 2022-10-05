import { useState } from "react";
import Avatar from "./Avatar";
import { CreatorContainer, Name, Items } from "./CreatorCard.styled";

const CreatorCard = ({ data, creator }) => {
  const [isAccordion, setIsAccordion] = useState(false);
  // const openAccordion = () => {
  //   setIsAccordion((prev) => !prev);
  // };
  return (
    <CreatorContainer key={creator.id} onClick={() => openAccordion()}>
      <Avatar imgSrc={creator.image} />
      <Name>
        <h3>{creator.author}</h3>
        <h4>{creator.currentBid}</h4>
      </Name>
      <Items>
        <h3>
          {data.filter((element) => element.author === creator.author).length >
          999
            ? 999
            : data.filter((element) => element.author === creator.author)
                .length}
        </h3>
        <h4>
          {data.filter((element) => element.author === creator.author).length <=
          1
            ? "item"
            : "items"}
        </h4>
      </Items>
      {isAccordion && <p>{creator.name}</p>}
    </CreatorContainer>
  );
};

export default CreatorCard;
