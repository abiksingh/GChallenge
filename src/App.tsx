import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArticleScreen from './components/articleScreen';
import Container from '@mui/material/Container';
import ArticleDetailsScreen from './components/articleDetailsScreen';

const App = () => {
  return (
    <Router>
      <Container maxWidth="xl">
        <Route path="/" component={ArticleScreen} exact />
        <Route path="/:id" component={ArticleDetailsScreen} exact />
      </Container>
    </Router>
  );
};

export default App;
