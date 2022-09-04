import {
  ConnectWalletContainer,
  ConnectWalletOptions,
  Option,
  Icon,
  WalletInfoContainer,
  Info,
  Buttons,
  WalletInfoButton,
} from "./ConnectWalletModal.styled";
import { GiFox, GiAbstract053, GiWallet, GiRaining } from "react-icons/gi";

const ConnectWalletModal = () => {
  return (
    <ConnectWalletContainer>
      <ConnectWalletOptions>
        <h2>Connect a Wallet</h2>
        <h4>Popular</h4>
        <Option to="/explore">
          <Icon>
            <GiFox />
          </Icon>
          <h6>FoxMask</h6>
        </Option>
        <Option to="/">
          <Icon>
            <GiAbstract053 />
          </Icon>
          <h6>AbstractBase</h6>
        </Option>
        <Option to="/">
          <Icon>
            <GiWallet />
          </Icon>
          <h6>HugeWallet</h6>
        </Option>
        <Option to="/">
          <Icon>
            <GiRaining />
          </Icon>
          <h6>RainingBow</h6>
        </Option>
      </ConnectWalletOptions>
      <WalletInfoContainer>
        <h2>What is a Wallet?</h2>
        <Info>
          In the context of blockchain and Web3, a “wallet” is essentially a
          cryptographic key management system that doubles as a user interface
          allowing you to interact with network applications and services by
          reading and/or modifying the state of the blockchain
        </Info>
        <Buttons>
          <WalletInfoButton to="/" primary="true">
            get a wallet
          </WalletInfoButton>
          <WalletInfoButton to="/"> learn more</WalletInfoButton>
        </Buttons>
      </WalletInfoContainer>
    </ConnectWalletContainer>
  );
};

export default ConnectWalletModal;
