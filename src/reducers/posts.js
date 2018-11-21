import {
  LOADING_POSTS,
  POSTS_LOADED,
  NEXT_PAGE,
  PREV_PAGE,
  LOADING_ERROR
} from "../actions/index";
import { countPages, postsToShow } from "../services/paginatorHelpers";

const postsReducer = {
  posts: [],
  currentPosts: [],
  loading: false,
  currentPage: 1,
  totalPages: 1,
  postsPerPage: 6,
  loadError: false,
  textError: ""
};

export const postsController = (state = postsReducer, action) => {
  switch (action.type) {
    case POSTS_LOADED:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        totalPages: countPages(action.payload.length, 6),
        currentPosts: postsToShow(
          action.payload,
          state.currentPage,
          state.postsPerPage
        )
      };
    case LOADING_POSTS:
      return { ...state, loading: true };
    case NEXT_PAGE:
      let nextPage =
        action.payload <= state.totalPages ? action.payload : state.currentPage;
      return {
        ...state,
        currentPage: nextPage,
        currentPosts: postsToShow(state.posts, nextPage, state.postsPerPage)
      };
    case PREV_PAGE:
      let prevPage = action.payload >= 1 ? action.payload : state.currentPage;
      return {
        ...state,
        currentPage: prevPage,
        currentPosts: postsToShow(state.posts, prevPage, state.postsPerPage)
      };
    case LOADING_ERROR:
      return {
        ...state,
        loadError: true,
        loading: false,
        textError: action.payload
      };
    default:
      return state;
  }
};
