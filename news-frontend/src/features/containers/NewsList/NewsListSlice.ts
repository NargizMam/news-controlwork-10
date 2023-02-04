import { createSlice } from '@reduxjs/toolkit';
import { News, NewsMutation } from '../../../type';
import { deleteNews, fetchNewsList, fetchOneNews } from './NewsLstThunk';
import { RootState } from '../../../app/store';

interface NewsState {
  newsList: NewsMutation[],
  newsInfo: News | null,
  fetching: boolean,
  oneFetching: boolean,
  creating: boolean,
  deleting: boolean,
  callbackMessage: string
}
const initialState: NewsState = {
  newsList: [],
  newsInfo: null,
  fetching: false,
  oneFetching: false,
  creating: false,
  deleting: false,
  callbackMessage: ''
}
export const NewsListSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewsList.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(fetchNewsList.fulfilled, (state, {payload: newsList}) => {
      state.fetching = false;
      state.newsList = newsList;
    });
    builder.addCase(fetchNewsList.rejected, (state) => {
      state.fetching = false;
    });
    builder.addCase(deleteNews.pending, (state) => {
      state.deleting = true;
    });
    builder.addCase(deleteNews.fulfilled, (state, {payload: message}) => {
      state.deleting = false;
      state.callbackMessage = message;
    });
    builder.addCase(deleteNews.rejected, (state) => {
      state.deleting = false;
    });
    builder.addCase(fetchOneNews.pending, (state) => {
      state.oneFetching = true;
    });
    builder.addCase(fetchOneNews.fulfilled, (state, {payload: oneNews}) => {
      state.oneFetching = false;
      state.newsInfo = oneNews;
    });
    builder.addCase(fetchOneNews.rejected, (state) => {
      state.oneFetching = false;
    });

  }
});

export const newsReducer = NewsListSlice.reducer;

export const selectNewsList = (state: RootState) => state.news.newsList;
export const selectFetching = (state: RootState) => state.news.fetching;
export const selectCreating = (state: RootState) => state.news.creating;
export const selectDeleting = (state: RootState) => state.news.deleting;
export const selectCallbackMessage = (state: RootState) => state.news.callbackMessage;
export const selectNewsInfo = (state: RootState) => state.news.newsInfo;