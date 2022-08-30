import { ClientsContainer } from "./ClientsLogos.styled";
import Binance from "../../assets/binance.svg";
import Bitmex from "../../assets/bitmex.svg";
import Blockchain from "../../assets/blockchain.svg";
import Coinbase from "../../assets/coinbase.svg";

const ClientsLogos = () => {
  return (
    <ClientsContainer>
      <img src={Binance} alt="binance logo" />
      <img src={Bitmex} alt="bitmex logo" />
      <img src={Blockchain} alt="blockchain logo" />
      <img src={Coinbase} alt="coinbase logo" />
    </ClientsContainer>
  );
};

export default ClientsLogos;
