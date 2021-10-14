import React, { useEffect } from 'react';
import Header from '../UIHelpers/header';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleArticle } from '../redux/actions/articleActions';
import moment from 'moment';
import { ArticleDetailsScreenWrapper } from '../UIHelpers/styles';
import { Typography, Link, Container } from '@mui/material';

interface MatchParams {
  match: {
    params: {
      id: string;
    };
  };
}

const ArticleDetailsScreen = ({ match }: MatchParams) => {
  const dispatch = useDispatch();

  type RootState = {
    getIndividualArticle: {
      data: any;
    };
  };

  const getIndividualArticle = useSelector(
    (state: RootState) => state.getIndividualArticle
  );
  const { data } = getIndividualArticle;
  console.log(data);

  useEffect(() => {
    dispatch(getSingleArticle(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <ArticleDetailsScreenWrapper>
          <Link
            sx={{ marginTop: '1rem', fontWeight: 'bold' }}
            variant="h6"
            href={`/`}
            underline="always"
          >
            {'Back to the results'}
          </Link>

          <Typography
            sx={{ marginTop: '2rem', fontWeight: 'bold' }}
            variant="h4"
            gutterBottom
            component="div"
          >
            {data?.response.docs[0].headline.main}
          </Typography>
          <Typography
            sx={{ marginTop: '1rem', fontWeight: 'light', fontStyle: 'Italic' }}
            variant="subtitle1"
            gutterBottom
            component="div"
          >
            {moment
              .utc(data?.response.docs[0].pub_date?.duration?.start)
              .local()
              .format('DD.MM.YYYY')}
          </Typography>
          <Typography sx={{ marginTop: '1rem' }} variant="body1" gutterBottom>
            {data?.response.docs[0].lead_paragraph}
          </Typography>
          <Link
            sx={{ marginTop: '1rem', fontWeight: 'bold' }}
            variant="h6"
            target={'_blank'}
            href={data?.response.docs[0].web_url}
            underline="always"
          >
            {'Read the full article'}
          </Link>
        </ArticleDetailsScreenWrapper>
      </Container>
    </>
  );
};

export default ArticleDetailsScreen;
