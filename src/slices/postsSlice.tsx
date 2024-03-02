/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserPosts } from './thunks';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

const postsAdapter = createEntityAdapter<Post>();

interface PostsState extends ReturnType<typeof postsAdapter.getInitialState> {
    loading: boolean;
    error: string | null;
  }

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState({
    loading: false,
    error: null,
  }) as PostsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        postsAdapter.setAll(state, action.payload);
        console.log(state.entities, 'состояние постов');
      })
      .addCase(fetchUserPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export default postsSlice.reducer;
