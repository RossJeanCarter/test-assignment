import React from 'react';

interface ErrorProps {
  error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => (
  <div className="error">
    Error:
    {error}
  </div>
);

export default Error;
