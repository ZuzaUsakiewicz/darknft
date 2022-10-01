import { SectionContainer } from "./Container.styled";
import {
  LoadingContainer,
  LoaderContainer,
  Column,
} from "./LoadingSection.styled";

const LoadingSection = () => {
  return (
    <SectionContainer>
      <LoadingContainer>
        <LoaderContainer>
          <Column columnNum={0}></Column>
          <Column columnNum={1}></Column>
          <Column columnNum={2}></Column>
        </LoaderContainer>
        <p>Loading...</p>
      </LoadingContainer>
    </SectionContainer>
  );
};

export default LoadingSection;
