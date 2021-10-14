import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllArticles,
  articlesPagination,
} from '../redux/actions/articleActions';
import Header from '../UIHelpers/header';
import Container from '@mui/material/Container';
import {
  ArticleScreenWrapper,
  typographyStyle,
  paginationStyle,
  ArticlesWrapper,
  paperStyle,
} from '../UIHelpers/styles';
import Typography from '@mui/material/Typography';
import Spinner from '../UIHelpers/spinner';
import {
  Stack,
  Pagination,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

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

  const onKeyDownHandler = (e: any) => {
    if (e.keyCode === 13) {
      dispatch(getAllArticles(text));
    }
  };

  return (
    <div>
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
              data?.response.docs.map((article: any) => (
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
    </div>
  );
};

export default ArticleScreen;
