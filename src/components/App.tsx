import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Users from '../pages/Users';
import Posts from '../pages/Posts';
import Favorites from '../pages/Favorites';
import { appPaths } from '../routes';

const App = () => {
  const { users, posts, favorites } = appPaths;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={users} element={<Users />} />
        <Route path={`${posts}/:userId`} element={<Posts />} />
        <Route path={favorites} element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
