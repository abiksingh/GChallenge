import axios from 'axios';
import { Dispatch } from 'redux';
import {
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAIL,
  PAGINATE_ARTICLE_SUCCESS,
  GET_SINGLE_ARTICLE_SUCCESS,
} from '../constants/articleConstants';

export const getAllArticles = (text: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_ARTICLE_REQUEST,
    });

    const { data } = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?fl=headline%2C%20_id&q=${text}&api-key=${process.env.REACT_APP_API_KEY}`
    );

    dispatch({
      type: GET_ARTICLE_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_ARTICLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const articlesPagination =
  (num: string, text: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: GET_ARTICLE_REQUEST,
      });

      const { data } = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&api-key=${process.env.REACT_APP_API_KEY}&page=${num}`
      );

      dispatch({
        type: PAGINATE_ARTICLE_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: GET_ARTICLE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getSingleArticle = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_ARTICLE_REQUEST,
    });

    const { data } = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?fl=web_url%2C%20lead_paragraph%2C%20pub_date%2C%20headline&fq=_id:("nyt://article/${id}")&api-key=${process.env.REACT_APP_API_KEY}`
    );

    dispatch({
      type: GET_SINGLE_ARTICLE_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_ARTICLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
