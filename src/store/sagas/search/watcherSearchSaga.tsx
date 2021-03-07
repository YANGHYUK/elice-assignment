import {
  all,
  put,
  fork,
  // takeEvery,
  takeLatest,
  select,
} from "redux-saga/effects";

import { fetchData } from "@store/sagas/baseSaga";

function* searchRequest(action: any) {
  const payload = action.payload;
  const successAction = (res: any) =>
    function* () {
      const payload = res.data;
      yield put({
        type: "search/SEARCH_REQUEST_SUCCESS",
        payload,
      });
    };
  const failureAction = (res: any) =>
    function* () {
      const payload = res.data;
      yield put({
        type: "search/SEARCH_REQUEST_FAILURE",
        payload,
      });

      // yield put({
      // 	type: 'base/SHOW_MODAL',

      // });
    };
  yield fork(fetchData, payload, successAction, failureAction);
}

export default function* watcherSearchSaga() {
  yield all([takeLatest("search/ON_SEARCH", searchRequest)]);
}
