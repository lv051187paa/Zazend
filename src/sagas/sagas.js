import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

import {
  LOADING_POSTS,
  LOADING_SINGLE_POST,
  getPosts,
  showPostDetails,
  loadingError
} from "../actions/index";

const posts = "https://jsonplaceholder.typicode.com/posts";
const authors = "https://jsonplaceholder.typicode.com/users";
const errorText = "Error";

function* fetchPosts() {
  try {
    let result = yield axios.get(posts).then(r => r.data);
    yield put(getPosts(result));
  } catch {
    yield put(loadingError(errorText));
  }
}

export function* watchFetchingPosts() {
  yield takeEvery(LOADING_POSTS, fetchPosts);
}

function* fetchSinglePost(action) {
  try{
    let result = yield axios.get(`${posts}/${action.payload}`).then(r => r.data);
  let comments = yield axios
    .get(`${posts}/${action.payload}/comments`)
    .then(r => r.data);
  let author = yield axios.get(`${authors}/${result.userId}`).then(r => r.data);
  result = { ...result, comments, author };
  yield put(showPostDetails(result));
  } catch {
    yield put(loadingError(errorText));
  }
}

export function* watchFetchingSinglePost() {
  yield takeEvery(LOADING_SINGLE_POST, fetchSinglePost);
}
