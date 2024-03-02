// CommonUserCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../slices/usersSlice';
import { appPaths } from '../routes';

interface CommonUserCardProps {
  user: User;
}

const CommonUserCard: React.FC<CommonUserCardProps> = ({ user }) => (
  <div className="user-card">
    <Link to={`${appPaths.posts}/${user.id}`} className="user-card">
      <div className="bold">{user.name}</div>
      <p className="medium">{user.username}</p>
      <p className="medium">{user.email}</p>
      <p className="medium">{user.phone}</p>
      <p className="medium">{user.website}</p>
    </Link>
  </div>
);

export default CommonUserCard;
