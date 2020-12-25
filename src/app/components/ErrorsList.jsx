import React from 'react';

export default function ErrorsList({ errors, field }) {
  if (!errors[field]) return null;

  return (
    <ul className="text-danger">
      {errors[field].map((error) => (
        <li key={error.code}>{error.message || error}</li>
      ))}
    </ul>
  );
}
