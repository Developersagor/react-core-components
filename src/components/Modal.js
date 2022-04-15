import React from "react";
import "../styles/modal.css";

const Modal = ({ openModal, onClose }) => {
  if (!openModal) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
        <div className="modal-content">
          <p>This is modal</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            architecto, sequi mollitia autem deserunt magni minima quod non,
          </p>
        </div>
        <span onClick={onClose}>x</span>
      </div>
    </div>
  );
};

export default Modal;
