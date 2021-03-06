import React, { useState } from "react";
import Modal from "react-modal";
import { useCustomEvent } from "../../hooks/useCustomEvent";

const ModalCmp = ({ name, isOpen, width, height, children }) => {
  const [isOpenModal, setIsOpenModal] = useState(isOpen);

  useCustomEvent({
    typeArg: "appActions",
    listener: (e) => {
      const { action, target, resource } = e.detail;
      if (target !== name) return;
      if (action === "openModal") {
        setIsOpenModal(true);
      } else if (action === "closeModal") {
        setIsOpenModal(false)
      }
      console.log(`get "${action}" event from: ${resource}`)
    },
  });

  const customStyles = {
    content: {
      with: width,
      height: height,
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
    },
    overlay: {
      backgroundColor: "rgba(14,14,14,0.45)",
    },
  };

  function handleCloseModal() {
    setIsOpenModal(false);
  }
  return (
    <Modal
      isOpen={isOpenModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel={name}
      onRequestClose={handleCloseModal}
    >
      {children}
    </Modal>
  );
};

export default ModalCmp;
