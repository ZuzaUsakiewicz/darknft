import { Link } from "react-router-dom";
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
            <CategoryLink to={`/explore/?category=${category.name}`}>
              <CategoryImage>
                <img src={category.image} />
              </CategoryImage>
              <h3>{category.name}</h3>
            </CategoryLink>
          </CategoryCard>
        ))}
      </CollectionsContainer>
      <Button to="/explore">View all</Button>
    </SectionContainer>
  );
};

const CategoryCard = styled(CardContainer)`
  height: 25rem;
  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    text-transform: capitalize;
    padding-top: 0.5rem;
  }
`;
const CategoryLink = styled(Link)`
  padding-top: 0.5rem;
  color: inherit;
  text-decoration: none;
`;
const CategoryImage = styled(ImageContainer)`
  &:after {
    display: none;
  }
`;
export default ExploreByCategories;
