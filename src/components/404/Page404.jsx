import { SectionContainer } from "../Reusables/Container.styled";
import { Text404, GoBackLink } from "./Page404.styled";

const Page404 = () => {
  return (
    <SectionContainer>
      <Text404>
        <h2>404!</h2>
        <p>Sorry, there's no such a thing you're looking for</p>
        <GoBackLink to="/">Go back to home page</GoBackLink>
      </Text404>
    </SectionContainer>
  );
};

export default Page404;
