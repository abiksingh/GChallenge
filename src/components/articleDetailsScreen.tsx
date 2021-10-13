import React, { useEffect } from 'react';
import Header from '../UIHelpers/header';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleArticle } from '../redux/actions/articleActions';
import Typography from '@mui/material/Typography';
import moment from 'moment';

const ArticleDetailsScreen = ({ history, match }: any) => {
  const dispatch = useDispatch();

  const getIndividualArticle = useSelector(
    (state: any) => state.getIndividualArticle
  );
  const { loading, data } = getIndividualArticle;
  console.log(data);

  useEffect(() => {
    dispatch(getSingleArticle(match.params.id));
  }, [dispatch, match]);

  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <Button onClick={() => history.push(`/`)} variant="contained">
          Back
        </Button>
        <Typography variant="h4" gutterBottom component="div">
          {data?.response.docs[0].headline.main}
        </Typography>
        {moment
          .utc(data?.response.docs[0].pub_date?.duration?.start)
          .local()
          .format('DD.MM.YYYY')}
        <Typography variant="body1" gutterBottom>
          {data?.response.docs[0].lead_paragraph}
        </Typography>
        <Link
          target={'_blank'}
          href={data?.response.docs[0].web_url}
          underline="always"
        >
          {'Read the full article'}
        </Link>
      </Container>
    </div>
  );
};

export default ArticleDetailsScreen;
