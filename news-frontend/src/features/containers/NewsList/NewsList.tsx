import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Container, Grid } from '@mui/material';
import { fetchNewsList } from './NewsLstThunk';
import { selectFetching, selectNewsList } from './NewsListSlice';
import OneNews from './components/OneNews';
import Spinner from '../../../components/UI/Spinner/Spinner';

const NewsList = () => {
  const dispatch = useAppDispatch();
  const newsList = useAppSelector(selectNewsList);
  const fetching = useAppSelector(selectFetching);

  useEffect(() => {
    dispatch(fetchNewsList());
  }, [dispatch]);

  const oneNews = newsList.map(news => (
    <OneNews key={news.id}
             id={news.id}
             title={news.title}
             dateStart={news.datetimeAt}
             image={news.image}
    />
  ))

  return (
    <Container>
      {fetching ? <Spinner/> : null}
      <Grid sx={{marginTop: 5}}>
        {oneNews}
      </Grid>
    </Container>

  );
};

export default NewsList;