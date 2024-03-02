import React from 'react';
import { User } from '../slices/usersSlice';
import CommonUserCard from './CommonUserCard';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => (
  <div className="users-container">
    {users.map((user) => (
      <CommonUserCard key={user.id} user={user} />
    ))}
  </div>
);

export default UserList;
