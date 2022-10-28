import { SectionContainer } from "../Reusables/Container.styled";
import { Text404, GoBackLink } from "./Page404.styled";

const Page404 = () => {
  return (
    <SectionContainer>
      <Text404>
        <h2>404!</h2>
        <p>
          Nothing's wrong here. I've made that link redirects to a 404 page on
          purpose.
        </p>
        <GoBackLink to="/">Go back to home page</GoBackLink>
      </Text404>
    </SectionContainer>
  );
};

export default Page404;
