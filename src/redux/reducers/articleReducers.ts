import { AnyAction } from 'redux';
import {
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAIL,
} from '../constants/articleConstants';

export const getArticlesReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case GET_ARTICLE_REQUEST:
      return {
        loading: true,
      };
    case GET_ARTICLE_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
      };

    // case SEARCH_ALBUMS_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     success: true,
    //     data: action.payload,
    //   };

    // case PAGINATE_ALBUMS_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     success: true,
    //     data: action.payload,
    //   };

    case GET_ARTICLE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
