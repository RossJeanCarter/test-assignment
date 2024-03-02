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
    return (
      <div className="loading">
        <svg
          className="clock"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="rotate(90 12 12)">
            <circle cx="12" cy="12" r="11" stroke="#333" strokeWidth="2" />
            <path
              d="M12 5V9L15 10"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        Error:
        {error}
      </div>
    );
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
