/* eslint-disable global-require */
import React, { useEffect, useState, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchUsers } from '../slices/thunks';
import Loading from './Loading';
import Error from './Error';
import { User } from '../slices/usersSlice';
import FavoritesLink from './FavoritesLink';
import UserList from './UserList';

const Users: React.FC = () => {
  const dispatch = useAppDispatch();
  const { entities: users, loading, error } = useAppSelector((state) => state.users);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = currentPage * usersPerPage;

  const memoizedUsers: User[] = useMemo(() => Object.values(users)
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
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <FavoritesLink />

      <UserList users={memoizedUsers} />
      <div className="pagination">
        <button type="button" onClick={handlePreviousPage} disabled={currentPage === 1} className="button-previous" />
        <span className="current-page">{currentPage}</span>
        <button type="button" onClick={handleNextPage} disabled={endIndex >= Object.values(users).length} className="button-next" />
      </div>
    </>
  );
};

export default Users;
