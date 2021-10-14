import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import {
  getAllArticles,
  articlesPagination,
} from '../redux/actions/articleActions';

import {
  ArticleScreenWrapper,
  typographyStyle,
  paginationStyle,
  ArticlesWrapper,
  paperStyle,
} from '../UIHelpers/styles';

import {
  Stack,
  Pagination,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  InputBase,
  Paper,
  Typography,
  Container,
} from '@mui/material';
import Spinner from '../UIHelpers/spinner';
import Header from '../UIHelpers/header';
import SearchIcon from '@mui/icons-material/Search';

const ArticleScreen = ({ history }: RouteComponentProps) => {
  const dispatch = useDispatch();

  type RootState = {
    getArticles: {
      data: any;
      loading: boolean;
    };
  };

  type Article = {
    _id: string;
    headline: {
      main: string;
    };
  };

  const getArticles = useSelector((state: RootState) => state.getArticles);
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

  const onKeyDownHandler = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      dispatch(getAllArticles(text));
    }
  };

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <ArticleScreenWrapper>
          <Typography variant="h6" sx={typographyStyle} component="div">
            Type search query term in here:
          </Typography>

          <Paper sx={paperStyle} variant="outlined">
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              value={text}
              placeholder="Search Articles"
              inputProps={{ 'aria-label': 'search articles' }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setText(e.target.value)
              }
              onKeyDown={onKeyDownHandler}
            />
            <IconButton
              onClick={searchButton}
              type="submit"
              sx={{ p: '10px' }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>

          <ArticlesWrapper>
            {data && (
              <Typography
                variant="subtitle1"
                sx={typographyStyle}
                component="div"
              >
                Results:
              </Typography>
            )}
            {loading ? (
              <Spinner />
            ) : (
              data?.response.docs.map((article: Article) => (
                <List key={article._id}>
                  <ListItem button>
                    <ListItemText
                      onClick={() => history.push(`/article/${article._id}`)}
                    >
                      {' '}
                      {article.headline.main}{' '}
                    </ListItemText>
                  </ListItem>
                  <Divider />
                </List>
              ))
            )}
          </ArticlesWrapper>

          <Stack sx={paginationStyle} spacing={2}>
            {data && (
              <Pagination
                count={100}
                onClick={handlePagination}
                shape="rounded"
              />
            )}
          </Stack>
        </ArticleScreenWrapper>
      </Container>
    </>
  );
};

export default ArticleScreen;
