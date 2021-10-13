import React from 'react';
import Header from '../UIHelpers/header';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const ArticleDetailsScreen = ({ history }: any) => {
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
