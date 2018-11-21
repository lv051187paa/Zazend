import {
  LOADING_SINGLE_POST,
  VIEW_POST,
  LOADING_ERROR
} from "../actions/index";

const singlePostReducer = {
  post: {},
  loading: false,
  loadError: false,
  textError: ""
};

export const singlePostController = (state = singlePostReducer, action) => {
  switch (action.type) {
    case LOADING_SINGLE_POST:
      return { ...state, loading: true };
    case VIEW_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
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
