import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllArticles } from '../redux/actions/articleActions';

const ArticleScreen = () => {
  const dispatch = useDispatch();

  const getArticles = useSelector((state: any) => state.getArticles);
  const { loading, data } = getArticles;

  console.log(data);

  useEffect(() => {
    dispatch(getAllArticles('election'));
  }, [dispatch]);

  return (
    <div>
      <h1>Article Screen</h1>
    </div>
  );
};

export default ArticleScreen;
