import axios from 'axios';
import { Dispatch } from 'redux';
import {
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAIL,
} from '../constants/articleConstants';

export const getAllArticles = (text: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_ARTICLE_REQUEST,
    });

    const { data } = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&api-key=${process.env.REACT_APP_API_KEY}`
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

// export const searchIndividualAlbums =
//   (text: string) => async (dispatch: Dispatch) => {
//     try {
//       dispatch({
//         type: GET_ALBUMS_REQUEST,
//       });

//       const { data } = await axios.get(
//         `http://localhost:4000/albums?q=${text}`
//       );

//       dispatch({
//         type: SEARCH_ALBUMS_SUCCESS,
//         payload: data,
//       });
//     } catch (error: any) {
//       dispatch({
//         type: GET_ALBUMS_FAIL,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       });
//     }
//   };

// export const paginationAlbums = (num: string) => async (dispatch: Dispatch) => {
//   try {
//     dispatch({
//       type: GET_ALBUMS_REQUEST,
//     });

//     const { data } = await axios.get(
//       `http://localhost:4000/albums?_page=${num}`
//     );

//     dispatch({
//       type: PAGINATE_ALBUMS_SUCCESS,
//       payload: data,
//     });
//   } catch (error: any) {
//     dispatch({
//       type: GET_ALBUMS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
