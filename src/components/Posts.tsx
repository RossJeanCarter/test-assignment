/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable global-require */
import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchUserPosts } from '../slices/thunks';
import { addToFavorites } from '../slices/favoritesSlice';
import { appPaths } from '../routes';
import { User } from '../slices/usersSlice';
import Loading from './Loading';
import Error from './Error';

const Posts = () => {
  const dispatch = useAppDispatch();
  const { userId } = useParams();
  const { entities: posts, loading, error } = useAppSelector((state) => state.posts);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserPosts(parseInt(userId, 10)));
    }
  }, [dispatch, userId]);

  const { entities: users } = useAppSelector((state) => state.users);

  const memoizedPosts = useMemo(() => Object.values(posts), [posts]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const handleAddToFavorites = (user: User) => {
    dispatch(addToFavorites(user));
    setIsFavorite(true);
  };

  const user = userId ? Object.values(users)
    // eslint-disable-next-line no-shadow
    .find((user) => user.id === parseInt(userId, 10)) : undefined;

  return (
    <>

      <Link to={appPaths.favorites}>
        <div className="favorites-container">
          Избранное
          <span className="star-image">
            <img src={require('../assets/star.png')} alt="Star" />
          </span>
        </div>
      </Link>

      <div className="posts-container">
        <div className="posts-header">
          <div className="title">
            {user && user.name}
            <span role="button" onClick={() => user && handleAddToFavorites(user)} className="star-image">
              {isFavorite ? (<img src={require('../assets/goldStar.png')} alt="Gold Star" />) : <img src={require('../assets/star.png')} alt="Star" /> }
            </span>
          </div>
          <div className="post-heading">Posts</div>
        </div>
        {memoizedPosts.map(({ id, title, body }) => (
          <div key={id} className="post-card">
            <p className="post-title">{title}</p>
            <p className="post-body">{body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
