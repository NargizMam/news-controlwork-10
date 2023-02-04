import { Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ApiNews } from '../../../../type';
import { createNews } from '../NewsLstThunk';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import NewForm from '../../../components/NewForm/NewForm';
import { selectCreating } from '../NewsListSlice';


const NewNews = () => {
  const dispatch = useAppDispatch();
  const creating = useAppSelector(selectCreating);
  const navigate = useNavigate();

  const onFormSubmit = async (newsMutation: ApiNews) => {
    await dispatch(createNews(newsMutation));
    navigate('/');
  };

  return (
    <Container>
      <Grid item xs={12} sm={6} md={4} lg={3}>
      <Typography variant="h4" sx={{mb: 2}}>Add new post</Typography>
      <NewForm onSubmit={onFormSubmit} loading={creating}/>
      </Grid>
    </Container>
  );
};
export default NewNews;
