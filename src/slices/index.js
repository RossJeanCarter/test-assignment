import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import postsReducer from './postsSlice';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    favorites: favoritesReducer,
  },
});

export default store;
