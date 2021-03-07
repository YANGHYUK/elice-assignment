import { call } from "redux-saga/effects";
import { apiFetch } from "@lib/api";

export function* fetchData(
  payload: any,
  successAction: any,
  failureAction: any
) {
  try {
    const res = yield call(apiFetch, payload);
    console.log({ res }, "baseSaga res");
    if (res && successAction) {
      yield call(successAction(res));
    } else if (!res && failureAction) {
      yield call(failureAction(res));
    }
  } catch (e) {
    yield call(failureAction(e));
  }
}
