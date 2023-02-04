import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiNews, News, NewsMutation } from '../../../type';
import axiosApi from '../../../axiosApi';


export const fetchNewsList = createAsyncThunk<NewsMutation[]>(
  'news/fetchAll',
  async () => {
    const newsResponse = await axiosApi.get<NewsMutation[]>('/news');
    return newsResponse.data;
  }
);
export const fetchOneNews = createAsyncThunk<News, string>(
  'news/fetchOne',
  async (id) => {
    const response = await axiosApi.get<News>('/news/'+ id);
    const newsInfo = response.data;
    if(newsInfo === null){
      throw  new Error('Not found');
    }
    return newsInfo;
  }
)
export const createNews = createAsyncThunk<void, ApiNews>(
  'news/create',
  async (newsMutation) => {
    const formData = new FormData();

    const keys = Object.keys(newsMutation) as (keyof ApiNews)[];
    keys.forEach(key => {
      const value = newsMutation[key];

      if (value !== null) {
        formData.append(key, value);
      }
    });
    return axiosApi.post('/news', formData);
  }
);
export const deleteNews = createAsyncThunk<string, string>(
  'news/delete/:id',
  async (id) => {
    return  await axiosApi.delete('/news/' + id);
  }
)