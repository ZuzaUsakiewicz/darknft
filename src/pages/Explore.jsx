import { Outlet, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { NftContext } from "../App";
import { SectionContainer } from "../components/Reusables/Container.styled";
import { SectionTitle } from "../components/Reusables/SectionTitle.styled";
import {
  CategoriesNavigation,
  CategoryLink,
} from "../components/ExplorePage/AllAuctions.styled";

function Explore() {
  const data = useContext(NftContext);
  let [searchParams] = useSearchParams();
  let activeLink = searchParams.get("category");

  let categories = [...new Set(data.map((item) => item.category))];

  return (
    <SectionContainer
      style={{ padding: "8rem 1rem 4rem 1rem" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SectionTitle>All Auctions</SectionTitle>
      <CategoriesNavigation>
        <CategoryLink
          to={"/explore"}
          style={{
            color: activeLink === null ? "#FFCE4E" : "inherit",
          }}
        >
          all
        </CategoryLink>
        {categories.map((category, index) => (
          <CategoryLink
            to={`/explore/?category=${category}`}
            key={index}
            style={{
              color: activeLink === category ? "#FFCE4E" : "inherit",
            }}
          >
            {category}
          </CategoryLink>
        ))}
      </CategoriesNavigation>
      <Outlet />
    </SectionContainer>
  );
}

export default Explore;
