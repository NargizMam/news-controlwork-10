import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { useParams } from 'react-router-dom';
import { selectNewsInfo } from '../NewsListSlice';
import { fetchOneNews } from '../NewsLstThunk';
import { Container, Grid, Paper, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { apiUrl } from '../../../../constants';


const NewsInfo= () => {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const newsInfo = useAppSelector(selectNewsInfo);
  const dateAt = dayjs(newsInfo?.datetimeAt).format('DD-MM-YYYY {HH:mm}')
  const imagePath = apiUrl + '/' + newsInfo?.image;

  useEffect(() => {
    if (id){
      dispatch(fetchOneNews(id));
    }
  }, [id]);

  return newsInfo && (
    <Container >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper  variant="outlined"  square sx={{padding: "15px"}}>
          <img src={imagePath} alt=""/>
          <Typography variant="h5">{newsInfo.title}</Typography>
          {newsInfo ? <Typography>At {dateAt}</Typography> : null}
          <Typography variant="body2">{newsInfo.description}</Typography>
        </Paper>
        <Typography margin={3}>Comments</Typography>
          <Typography margin={3}>Add new comments</Typography>
      </Grid>
    </Container>

  );
};

export default NewsInfo;