import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllArticles,
  articlesPagination,
} from '../redux/actions/articleActions';
import Header from '../UIHelpers/header';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ArticleScreenWrapper, typographyStyle } from '../UIHelpers/styles';
import Typography from '@mui/material/Typography';
import Spinner from '../UIHelpers/spinner';
import { Stack, Pagination, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ArticleScreen = ({ history }: any) => {
  const dispatch = useDispatch();

  const getArticles = useSelector((state: any) => state.getArticles);
  const { loading, data } = getArticles;

  const [text, setText] = useState('');

  console.log(data);

  const searchButton = () => {
    return dispatch(getAllArticles(text));
  };

  const handlePagination = (e: any) => {
    const input = e.target as HTMLElement;
    dispatch(articlesPagination(input.textContent!, text));
  };

  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <ArticleScreenWrapper>
          <Box
            sx={{
              width: 800,
              maxWidth: '100%',
            }}
          >
            <Typography variant="h6" sx={typographyStyle} component="div">
              Type search query term in here:
            </Typography>
            <TextField
              value={text}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setText(e.target.value)
              }
              fullWidth
              id="fullWidth"
            />
            <IconButton
              onClick={searchButton}
              type="submit"
              sx={{ p: '10px' }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Box>
          {loading ? (
            <Spinner />
          ) : (
            data?.response.docs.map((article: any) => (
              <Typography
                key={article._id}
                variant="h6"
                sx={typographyStyle}
                component="div"
                onClick={() => history.push(`/article/${article._id}`)}
              >
                {article.headline.main}
              </Typography>
            ))
          )}

          <Stack spacing={2}>
            <Pagination
              count={100}
              onClick={handlePagination}
              shape="rounded"
            />
          </Stack>
        </ArticleScreenWrapper>
      </Container>
    </div>
  );
};

export default ArticleScreen;
