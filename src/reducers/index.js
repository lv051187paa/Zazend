import { combineReducers } from "redux";
import { postsController } from "./posts";
import { singlePostController } from "./singlePost";

export const allReducers = combineReducers({
  postList: postsController,
  singlePost: singlePostController
});
