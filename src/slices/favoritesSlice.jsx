// favoritesSlice.js
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const favoritesAdapter = createEntityAdapter();

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesAdapter.getInitialState(),
  reducers: {
    addToFavorites: favoritesAdapter.addOne,
    removeFromFavorites: favoritesAdapter.removeOne,
    clearFavorites: favoritesAdapter.removeAll,
  },

});

export const {
  addToFavorites, removeFromFavorites, clearFavorites, setLoading, setError,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
