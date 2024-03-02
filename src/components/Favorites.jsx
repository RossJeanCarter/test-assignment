import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { appPaths } from '../routes';

const Favorites = () => {
  // Получение списка избранных пользователей из хранилища состояний
  const favorites = useSelector((state) => state.favorites.entities);

  return (
    <div>
      <h1>Список избранных пользователей</h1>
      {Object.keys(favorites).length === 0 ? (
        <p>Нет избранных пользователей.</p>
      ) : (
        <ul>
          {Object.values(favorites).map(({ id, name }) => (
            <li key={id}>
              <Link to={`${appPaths.posts}/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
