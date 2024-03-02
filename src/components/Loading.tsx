import React from 'react';

const Loading = () => (
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

export default Loading;
