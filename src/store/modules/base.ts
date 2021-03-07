import createReducer from "@store/createReducer";

export const types = {
  SHOW_MODAL: "base/SHOW_MODAL",
  HIDE_MODAL: "base/HIDE_MODAL",

  // api 리턴 성공
  FETCH_SUCCESS: "base/FETCH_SUCCESS",

  // api 리턴 실패
  FETCH_FAILURE: "base/FETCH_FAILURE",
};

type PAYLOAD = any;

export const actions = {
  showModal: (payload: PAYLOAD) => ({ type: types.SHOW_MODAL, payload }),
  hideModal: (payload: PAYLOAD) => ({ type: types.HIDE_MODAL, payload }),

  fetchSuccess: (payload: PAYLOAD) => ({ type: types.FETCH_SUCCESS, payload }),
  fetchFailure: (payload: PAYLOAD) => ({ type: types.FETCH_FAILURE, payload }),
};

export interface Modals {
  isShowModal: boolean;
  message: string;
  modalCheckCallback?: () => void;
  modalCancelCallback?: () => void;
}

export interface STORE_STATE {
  modals: Modals;
}

export const INITIAL_STATE: STORE_STATE = {
  modals: {
    isShowModal: false,
    message: "",
    modalCheckCallback: () => null,
    modalCancelCallback: () => null,
  },
};

interface ACTION {
  payload: any;
  type: string;
}

const reducer = createReducer(INITIAL_STATE, {
  [types.SHOW_MODAL]: (state: STORE_STATE, action: ACTION) => {
    const {
      modalType,
      message,
      modalCheckCallback,
      modalCancelCallback,
    } = action.payload;

    // console.log({ modalType, message });
    switch (modalType) {
      case "modal":
        state.modals.isShowModal = true;
        state.modals.message = message;
        break;

      default:
        break;
    }
  },
  [types.HIDE_MODAL]: (state: STORE_STATE, action: ACTION) => {
    const { modalType } = action.payload;
    switch (modalType) {
      case "modal":
        state.modals.isShowModal = false;
        state.modals.message = "";
        break;

      default:
        break;
    }
  },
});

export default reducer;
