import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArticleScreen from './components/articleScreen';
import ArticleDetailsScreen from './components/articleDetailsScreen';

const App = () => {
  return (
    <Router>
      <Route path="/" component={ArticleScreen} exact />
      <Route path="/:id" component={ArticleDetailsScreen} exact />
    </Router>
  );
};

export default App;
