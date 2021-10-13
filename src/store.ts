import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  getArticlesReducer,
  getIndividualArticleReducer,
} from './redux/reducers/articleReducers';

const reducer = combineReducers({
  getArticles: getArticlesReducer,
  getIndividualArticle: getIndividualArticleReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
