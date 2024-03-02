/* eslint-disable global-require */
import { Link } from 'react-router-dom';
import React, { useMemo } from 'react';
import { useAppSelector } from '../hooks';
import { appPaths } from '../routes';

const Favorites = () => {
  const favorites = useAppSelector((state) => state.favorites.entities);
  const memoizedFavorites = useMemo(() => Object.values(favorites), [favorites]);
  return (
    <div>
      <div className="favorites-container">
        Избранное
        <span className="star-image"><img src={require('../assets/star.png')} alt="Star" /></span>
      </div>
      {Object.keys(favorites).length === 0 ? (
        <div className="notAdded">Вы пока никого не добавили в избранное 😭</div>
      ) : (
        <div className="users-container">
          {memoizedFavorites.map(({
            id, name, username, email, phone, website,
          }) => (
            <div key={id} className="user-card">
              <Link key={id} to={`${appPaths.posts}/${id}`} className="user-card">

                <div className="bold">{name}</div>
                <p className="medium">{username}</p>
                <p className="medium">{email}</p>
                <p className="medium">{phone}</p>
                <p className="medium">{website}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
