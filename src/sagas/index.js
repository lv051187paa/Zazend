import { all } from "redux-saga/effects";
import { watchFetchingPosts, watchFetchingSinglePost } from "./sagas";

export function* rootSaga() {
  yield all([watchFetchingPosts(), watchFetchingSinglePost()]);
}
