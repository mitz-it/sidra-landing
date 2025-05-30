import React, { useState } from "react";
import { Modal, ModalContent, NormalText, SpecialText } from "./styles";

interface FirstTimeModalProps {
  setIsOpen: (isOpen: boolean) => void;
}

const FirstTimeModal = ({ setIsOpen }: FirstTimeModalProps) => {
  return (
    <Modal>
      <ModalContent>
        <NormalText>
          Whether we are from Kuwait, Egypt, India, the Philippines, or anywhere
          else, our lives converge here in Kuwait.
        </NormalText>
        <SpecialText>
          Like the Sidra tree, this land gives us shade and shelter, allowing us
          to co-exist and help each other flourish.
        </SpecialText>
      </ModalContent>
        <svg
        onClick={() => setIsOpen(false)}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          cursor: "pointer",
          height: "1.5rem",
          width: "1.5rem",
        }}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 4.1859L21.8141 1L13.0005 9.81358L4.1859 1L1 4.1859L9.81358 13.0005L1 21.8141L4.1859 25L13.0005 16.1864L21.8141 25L25 21.8141L16.1864 13.0005L25 4.1859Z"
          fill="#FC9918"
          stroke="#00171F"
          />
        </svg>
    </Modal>
  );
};

export default FirstTimeModal;
