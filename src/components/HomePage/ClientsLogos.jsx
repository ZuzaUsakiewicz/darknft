import { ClientsContainer } from "./ClientsLogos.styled";
import Binance from "../../assets/icons/binance.svg";
import Bitmex from "../../assets/icons/bitmex.svg";
import Blockchain from "../../assets/icons/blockchain.svg";
import Coinbase from "../../assets/icons/coinbase.svg";

const ClientsLogos = () => {
  return (
    <ClientsContainer
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <img src={Binance} alt="binance logo" />
      <img src={Bitmex} alt="bitmex logo" />
      <img src={Blockchain} alt="blockchain logo" />
      <img src={Coinbase} alt="coinbase logo" />
    </ClientsContainer>
  );
};

export default ClientsLogos;
