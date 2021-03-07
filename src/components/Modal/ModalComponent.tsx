import React from "react";
import "./ModalComponent.scss";

type Modal = {
  closeModal: () => void;
  message: string;
  modalCheckCallback: () => void;
};

const Index = ({ message, closeModal, modalCheckCallback }: Modal) => (
  <div className="modal-background">
    <div className="modal-contentBox">
      <section className="modal-contentBox-messageBox">
        <div></div>
        <div className="modal-contentBox-messageBox-message">{message}</div>
      </section>

      <section className="modal-contentBox-buttonBox">
        <div
          className="modal-contentBox-buttonBox-checkButton"
          onClick={() => {
            closeModal();
            return modalCheckCallback ? modalCheckCallback() : 1;
          }}
        >
          OK
        </div>
      </section>
    </div>
  </div>
);

export default Index;
