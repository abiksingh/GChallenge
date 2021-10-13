import { AnyAction } from 'redux';
import {
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAIL,
  PAGINATE_ARTICLE_SUCCESS,
  GET_SINGLE_ARTICLE_SUCCESS,
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

    case PAGINATE_ARTICLE_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
      };

    case GET_ARTICLE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getIndividualArticleReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case GET_ARTICLE_REQUEST:
      return {
        loading: true,
      };

    case GET_SINGLE_ARTICLE_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
      };

    case GET_ARTICLE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
