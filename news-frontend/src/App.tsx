import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppToolBar from './components/UI/AppToolBar/AppToolBar';
import { Container, CssBaseline } from '@mui/material';
import NewsPortal from './features/containers/newsPortal/newsPortal';
import NewsInfo from './features/containers/NewsList/components/NewsInfo';
import NewNews from './features/containers/NewsList/components/NewNews';

const App = () => (
    <Container className="App">
      <CssBaseline/>
      <AppToolBar/>
        <Routes>
            <Route path="/" element={<NewsPortal/>}/>
            <Route path="/news/:id" element={<NewsInfo/>}/>
            <Route path="/new-post" element={<NewNews/>}/>
        </Routes>
    </Container>
);

export default App;
