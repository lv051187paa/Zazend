export const LOAD_POSTS = "LOAD_POSTS";
export const LOADING_POSTS = "LOADING_POSTS";
export const POSTS_LOADED = "POSTS_LOADED";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const VIEW_POST = "VIEW_POST";
export const LOADING_SINGLE_POST = "LOADING_SINGLE_POST";
export const LOADING_ERROR = "LOADING_ERROR";

export const getPosts = res => {
  return {
    type: POSTS_LOADED,
    payload: res
  };
};

export const loadingPosts = () => {
  return {
    type: LOADING_POSTS,
    payload: true
  };
};

export const loadingError = (error) => {
  return {
    type: LOADING_ERROR,
    payload: error
  };
};

export const nextPage = page => {
  return {
    type: NEXT_PAGE,
    payload: page + 1
  };
};

export const prevPage = page => {
  return {
    type: PREV_PAGE,
    payload: page - 1
  };
};

export const showPostDetails = post => {
  return {
    type: VIEW_POST,
    payload: post
  };
};

export const loadingSinglePost = postId => {
  return {
    type: LOADING_SINGLE_POST,
    payload: postId
  };
};
