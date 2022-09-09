import { Link } from "react-router-dom";
import {
  FooterContainer,
  LinksContainer,
  LinkList,
  IconsContainer,
  IconLink,
} from "./Footer.styled";
import Logo from "../../assets/icons/logo.svg";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
  const aboutUsLinks = [
    { name: "About NFTs", path: "/" },
    { name: "Live", path: "/" },
    { name: "Auctions", path: "/" },
    { name: "NFT Blog", path: "/" },
    { name: "Activity", path: "/" },
  ];
  const supportLinks = [
    { name: "Help & Support", path: "/" },
    { name: "Item Details", path: "/" },
    { name: "Author Profile", path: "/" },
    { name: "Collection", path: "/" },
  ];

  const icons = [
    { icon: <FaGooglePlusG />, path: "/" },
    { icon: <BsFacebook />, path: "/" },
    { icon: <BsYoutube />, path: "/" },
    { icon: <BsTwitter />, path: "/" },
  ];

  return (
    <FooterContainer>
      <Link to="/">
        <img src={Logo} alt="nft logo" />
      </Link>
      <p>
        Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla pharetra
        gravida est.
      </p>
      <LinksContainer>
        <div>
          <h3>about us</h3>
          <LinkList>
            {aboutUsLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </LinkList>
        </div>
        <div>
          <h3>support</h3>
          <LinkList>
            {supportLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </LinkList>
        </div>
      </LinksContainer>
      <IconsContainer>
        {icons.map((item, index) => {
          return (
            <IconLink to={item.path} key={index}>
              {item.icon}
            </IconLink>
          );
        })}
      </IconsContainer>
    </FooterContainer>
  );
};

export default Footer;
