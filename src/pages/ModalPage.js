import React, { useState } from "react";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button style={{ cursor: "pointer" }} onClick={(e) => setOpenModal(true)}>
        OPEN MODAL
      </button>
      <Modal openModal={openModal} onClose={(e) => setOpenModal(false)} />
    </>
  );
};

export default ModalPage;
