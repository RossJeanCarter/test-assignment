/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import { appPaths } from '../routes';

const FavoritesLink = () => (
  <Link to={appPaths.favorites}>
    <div className="favorites-container">
      Избранное
      <span className="star-image">
        <img src={require('../assets/star.png')} alt="star" />
      </span>
    </div>
  </Link>
);

export default FavoritesLink;
