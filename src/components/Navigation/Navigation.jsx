import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarList,
  NavbarLink,
  HamburgerButton,
  ActionButton,
} from "./Navigation.styled";
import Logo from "../../assets/logo.svg";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const displayNavBg = () => {
    if (window.scrollY >= 100) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", displayNavBg);
  }, []);

  return (
    <Navbar navBg={navBg}>
      <Link to="/" onClick={() => setOpen(false)}>
        <img src={Logo} alt="nft logo" />
      </Link>
      <NavbarList open={open} onClick={() => setOpen(false)}>
        <li>
          <NavbarLink to="/">Home</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/explore">Explore</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/creators">Creators</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/community">Community</NavbarLink>
        </li>
        <li>
          <ActionButton>Connect Wallet</ActionButton>
        </li>
      </NavbarList>
      <HamburgerButton onClick={() => toggleMenu()} open={open}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerButton>
    </Navbar>
  );
};

export default Navigation;
