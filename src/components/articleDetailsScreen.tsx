import React, { useEffect } from 'react';
import Header from '../UIHelpers/header';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleArticle } from '../redux/actions/articleActions';
import Spinner from '../UIHelpers/spinner';

const ArticleDetailsScreen = ({ history, match }: any) => {
  const dispatch = useDispatch();

  const getIndividualArticle = useSelector(
    (state: any) => state.getIndividualArticle
  );
  const { loading, data } = getIndividualArticle;
  console.log(data);

  console.log(match.params.id);

  useEffect(() => {
    dispatch(getSingleArticle(match.params.id));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <Button onClick={() => history.push(`/`)} variant="contained">
          Back
        </Button>
        <Link href="#" underline="always">
          {'Read the full article'}
        </Link>
      </Container>
    </div>
  );
};

export default ArticleDetailsScreen;
