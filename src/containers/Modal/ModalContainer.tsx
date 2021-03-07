import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actions as modalActions,
  INITIAL_STATE as BASE_STATE,
} from "@store/modules/base";
import ModalComponent from "@components/Modal";

interface STATE {
  base: any;
  message: string;
  isShowModal: typeof BASE_STATE.modals.isShowModal;
  modalCheckCallback: typeof BASE_STATE.modals.modalCheckCallback;
}

const ModalContainer = () => {
  const dispatch = useDispatch();

  const { message, isShowModal, modalCheckCallback } = useSelector(
    (state: STATE) => ({
      message: state.base.modals.message,
      isShowModal: state.base.modals.isShowModal,
      modalCheckCallback: state.base.modals.modalCheckCallback,
    })
  );

  const closeModal = (): void => {
    dispatch(modalActions.hideModal({ modalType: "modal", message: "" }));
  };

  return (
    <>
      {isShowModal && (
        <ModalComponent
          message={message}
          closeModal={closeModal}
          modalCheckCallback={modalCheckCallback}
        />
      )}
    </>
  );
};

export default ModalContainer;
