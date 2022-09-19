import categories from "../../data/categories";
import { SectionContainer } from "../Reusables/Container.styled";
import { CardContainer, ImageContainer } from "../Reusables/NftCard.styled";
import { SectionTitle } from "../Reusables/SectionTitle.styled";
import styled from "styled-components";
import { Button } from "../Buttons/Button.styled";
import { CollectionsContainer } from "./PopularCollections.styled";

const ExploreByCategories = () => {
  return (
    <SectionContainer>
      <SectionTitle color="#435db0">Explore by categories</SectionTitle>
      <CollectionsContainer>
        {categories.slice(0, 3).map((category, index) => (
          <CategoryCard key={index}>
            <CategoryImage>
              <img src={category.image} />
            </CategoryImage>
            <h3>{category.name}</h3>
          </CategoryCard>
        ))}
      </CollectionsContainer>
      <Button to="/categories">View all</Button>
    </SectionContainer>
  );
};

const CategoryCard = styled(CardContainer)`
  height: 25rem;
  h3 {
    font-size: 1.25rem;
    text-transform: capitalize;
    padding-top: 0.5rem;
  }
`;
const CategoryImage = styled(ImageContainer)`
  &:after {
    display: none;
  }
`;
export default ExploreByCategories;
