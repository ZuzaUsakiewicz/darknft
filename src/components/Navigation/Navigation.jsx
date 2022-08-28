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
import Modal from "../Modal/Modal";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

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
          <ActionButton onClick={() => setIsOpenModal(true)}>
            Connect Wallet
          </ActionButton>
        </li>
      </NavbarList>
      <HamburgerButton onClick={() => toggleMenu()} open={open}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerButton>
      <Modal handleClose={() => setIsOpenModal(false)} isOpen={isOpenModal}>
        This is Modal Content!
      </Modal>
    </Navbar>
  );
};

export default Navigation;
