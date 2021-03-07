import createReducer from "@store/createReducer";

export const types = {
  ON_SEARCH: "search/ON_SEARCH",
  ON_RESET: "search/ON_RESET",
  SEARCH_REQUEST_SUCCESS: "search/SEARCH_REQUEST_SUCCESS",
  SEARCH_REQUEST_FAILURE: "search/SEARCH_REQUEST_FAILURE",
};

type PAYLOAD = any;

type ACTION = {
  payload: any;
  type: string;
  status: undefined | string;
};

export const actions = {
  onSearch: (payload: PAYLOAD) => ({
    type: types.ON_SEARCH,
    payload,
  }),
  onReset: (payload: PAYLOAD) => ({
    type: types.ON_RESET,
    payload,
  }),
};

export type STORE_STATE = {
  loading: boolean;
  searchValue: string;
  courses: any;
  course_count: number;
};

export const INITIAL_STATE: STORE_STATE = {
  searchValue: "",
  loading: false,
  courses: [],
  course_count: 0,
};

const reducer = createReducer(INITIAL_STATE, {
  [types.ON_SEARCH]: (state: STORE_STATE, action: ACTION) => {
    // console.log({ action }, "ON_SEARCH");
    const { value } = action.payload;
    state.searchValue = value;
    state.loading = true;
  },
  [types.ON_RESET]: (state: STORE_STATE, action: ACTION) => {
    console.log({ action }, "ON_RESET");
    state.searchValue = "";
  },

  [types.SEARCH_REQUEST_SUCCESS]: (state: STORE_STATE, action: ACTION) => {
    console.log({ action }, "SEARCH_REQUEST_SUCCESS");
    const { courses, course_count } = action.payload;
    state.courses = courses;
    state.course_count = course_count;
    state.loading = false;
  },

  [types.SEARCH_REQUEST_FAILURE]: (state: STORE_STATE, action: ACTION) => {
    console.log({ action }, "SEARCH_REQUEST_FAILURE");
    state.loading = false;
  },
});

export default reducer;
