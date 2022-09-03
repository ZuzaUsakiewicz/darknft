import { SectionContainer } from "../Reusables/Container.styled";
import { SectionTitle } from "../Reusables/SectionTitle.styled";
import { StepsContainer, Line, Step } from "./HowItWorks.styled";
import wallet from "../../assets/icons/wallet.svg";
import collection from "../../assets/icons/collection.svg";
import addNfts from "../../assets/icons/addNfts.svg";
import listNfts from "../../assets/icons/listNfts.svg";
import line from "../../assets/icons/line.svg";

const HowItWorks = () => {
  return (
    <SectionContainer>
      <SectionTitle color="#1d70a2">How it works</SectionTitle>
      <StepsContainer>
        <Step>
          <img src={wallet} />
          <h4>set up your wallet</h4>
        </Step>
        <Line src={line} />
        <Step>
          <img src={collection} />
          <h4>create your collection</h4>
        </Step>
        <Line src={line} />
        <Step>
          <img src={addNfts} />
          <h4>add your NFTs</h4>
        </Step>
        <Line src={line} />
        <Step>
          <img src={listNfts} />
          <h4>list them for sale</h4>
        </Step>
      </StepsContainer>
    </SectionContainer>
  );
};

export default HowItWorks;
