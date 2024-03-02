/* eslint-disable global-require */
import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchUsers } from '../slices/thunks';
import { appPaths } from '../routes';

const Users = () => {
  const dispatch = useAppDispatch();
  const { entities: users, loading, error } = useAppSelector((state) => state.users);
  const { posts } = appPaths;

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = currentPage * usersPerPage;

  const memoizedUsers = useMemo(() => Object.values(users)
    .slice(startIndex, endIndex), [users, startIndex, endIndex]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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

  return (
    <>
      <Link to={appPaths.favorites}>
        <div className="favorites-container">
          Избранное
          <span className="star-image">
            <img src={require('../assets/star.png')} alt="star" />
          </span>
        </div>
      </Link>
      <div className="users-container">
        {memoizedUsers.map(({
          id, name, username, email, phone, website,
        }) => (
          <div key={id} className="user-card">
            <Link key={id} to={`${posts}/${id}`} className="user-card">
              <div className="bold">{name}</div>
              <p className="medium">{username}</p>
              <p className="medium">{email}</p>
              <p className="medium">{phone}</p>
              <p className="medium">{website}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button type="button" onClick={handlePreviousPage} disabled={currentPage === 1} className="button-previous" />
        <span className="current-page">{currentPage}</span>
        <button type="button" onClick={handleNextPage} disabled={endIndex >= Object.values(users).length} className="button-next" />
      </div>
    </>
  );
};

export default Users;
