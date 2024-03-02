/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchUserPosts } from '../slices/thunks';
import { addToFavorites } from '../slices/favoritesSlice';
import { appPaths } from '../routes';

const Posts = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { entities: posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchUserPosts(userId));
  }, [dispatch, userId]);

  const { entities: users } = useSelector((state) => state.users);
  const favorites = useSelector((state) => state.favorites);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  const handleAddToFavorites = (user) => {
    dispatch(addToFavorites(user));
    console.log(user, 'избранный юзер на которого нажао');
  };
  console.log(favorites, 'избранные юзеры');
  // eslint-disable-next-line no-shadow
  const user = Object.values(users).find((user) => user.id === parseInt(userId, 10));
  return (
    <div>
      <button onClick={() => handleAddToFavorites(user)}>Add to Favorites</button>
      <Link to={appPaths.favorites}>перейти в избранное</Link>

      <h1>
        Список постов
        {user.name}
      </h1>
      <ul>
        {Object.values(posts).map(({ id, title, body }) => (
          <li key={id}>
            <p>{title}</p>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
