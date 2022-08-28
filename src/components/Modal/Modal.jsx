import { useEffect } from "react";
import { ModalContainer, CloseButton, ModalContent } from "./Modal.styled";

function Modal({ children, isOpen, handleClose }) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <CloseButton onClick={handleClose}>Close</CloseButton>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
}
export default Modal;
