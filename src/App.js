import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StopCounter from './components/StopCounter/StopCounter';
import PostAPI from './components/Post/PostAPI';
import Parent from './components/Parent Child/Parent';
import Debouncing from './components/Debouncing';
import { NavBar } from './components/NavBar';
import Child from './components/Parent Child/Child';
import NewsList from './components/News/NewsList';
import Dayjs from './components/Dayjs';

function App() {
  console.log("ENV File data: ", process.env.REACT_APP_SECRET_NAME);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Debouncing />} />
          <Route path='/stopCounter' element={<StopCounter />} />
          <Route path='/stopCounter/:id' element={<StopCounter />} />
          <Route path='/postapi' element={<PostAPI />} />
          <Route path='/parent' element={<Parent />} />
          <Route path='/child' element={<Child />} />
          <Route path='/newslist' element={<NewsList />} />
          <Route path='/dayjs' element={<Dayjs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;