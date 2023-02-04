import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ApiNews } from '../../../../type';
import { createNews } from '../NewsLstThunk';
import { useAppDispatch } from '../../../../app/hooks';
import NewForm from '../../../components/NewForm/NewForm';


const NewNews = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFormSubmit = async (newsMutation: ApiNews) => {
    await dispatch(createNews(newsMutation));
    navigate('/');
  };

  return (
    <>
      <Typography variant="h4" sx={{mb: 2}}>Add new post</Typography>
      <NewForm onSubmit={onFormSubmit}/>
    </>
  );
};
export default NewNews;
