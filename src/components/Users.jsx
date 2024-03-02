/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../slices/thunks';
import { appPaths } from '../routes';

const Users = () => {
  const dispatch = useDispatch();
  const { entities: users, loading, error } = useSelector((state) => state.users);
  const { posts } = appPaths;

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = currentPage * usersPerPage;

  const usersToShow = Object.values(users).slice(startIndex, endIndex);

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

  return (
    <div>
      <h1>Список пользователей</h1>
      <ul>
        {usersToShow.map(({ id, name }) => (
          <li key={id}>
            <Link to={`${posts}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          {'< Previous'}
        </button>
        <span>{currentPage}</span>
        <button onClick={handleNextPage} disabled={endIndex >= Object.values(users).length}>
          {'Next >'}
        </button>
      </div>
    </div>
  );
};

export default Users;
