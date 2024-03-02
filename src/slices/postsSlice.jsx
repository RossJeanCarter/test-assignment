/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchUserPosts } from './thunks';

const usersAdapter = createEntityAdapter();

const postsSlice = createSlice({
  name: 'posts',
  initialState: usersAdapter.getInitialState({
    loading: false,
    error: null,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserPosts.fulfilled, (state, action) => {
        state.loading = false;
        usersAdapter.setAll(state, action.payload);
        console.log(state.entities, 'состояние постов');
      })
      .addCase(fetchUserPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
