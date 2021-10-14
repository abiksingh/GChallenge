import React, { useEffect } from 'react';
import Header from '../UIHelpers/header';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleArticle } from '../redux/actions/articleActions';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import { ArticleDetailsScreenWrapper } from '../UIHelpers/styles';

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
    </div>
  );
};

export default ArticleDetailsScreen;
