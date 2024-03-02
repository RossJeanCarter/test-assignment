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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
