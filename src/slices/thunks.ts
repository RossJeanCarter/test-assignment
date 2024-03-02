import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiRoutes } from '../routes';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const { data } = await axios.get(apiRoutes.users());
  return data;
});

export const fetchUserPosts = createAsyncThunk('posts/fetchUserPosts', async (userId: number) => {
  const { data } = await axios.get(apiRoutes.userPosts(userId));
  return data;
});
