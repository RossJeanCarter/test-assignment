/* eslint-disable global-require */
import React, { useMemo } from 'react';
import { useAppSelector } from '../hooks/hooks';
import UserList from '../components/UserList';
import { User } from '../slices/usersSlice';

const Favorites = () => {
  const favorites = useAppSelector((state) => state.favorites.entities);
  const memoizedFavorites: User[] = useMemo(() => Object.values(favorites), [favorites]);
  return (
    <div>
      <div className="favorites-container">
        Избранное
        <span className="star-image"><img src={require('../assets/star.png')} alt="Star" /></span>
      </div>
      {Object.keys(favorites).length === 0 ? (
        <div className="notAdded">Вы пока никого не добавили в избранное 😭</div>
      ) : (
        <UserList users={memoizedFavorites} />
      )}
    </div>
  );
};

export default Favorites;
