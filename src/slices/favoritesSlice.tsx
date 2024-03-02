// favoritesSlice.js
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { User } from './usersSlice';

export interface Favorites {
  ids: number[];
  entities: Record<number, User>;
}

const favoritesAdapter = createEntityAdapter<User>();

interface FavoritesState extends ReturnType<typeof favoritesAdapter.getInitialState> {
  loading: boolean;
  error: string | null;
}
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesAdapter.getInitialState() as FavoritesState,
  reducers: {
    addToFavorites: favoritesAdapter.addOne,
  },

});

export const { addToFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
