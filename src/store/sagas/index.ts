import { all } from "redux-saga/effects";
import watcherSearchSaga from "@store/sagas/search/watcherSearchSaga";
export default function* rootSaga() {
  yield all([watcherSearchSaga()]);
}
