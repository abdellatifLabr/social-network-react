import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Postitem({ post }) {
  const history = useHistory();
  const { id, title, imageUrl, createdSince } = post;

  return (
    <div
      className="d-flex align-items-center mb-3"
      style={{ cursor: 'pointer' }}
      onClick={() => history.push(`/post/${id}`)}
    >
      <div
        style={{
          width: '70px',
          height: '70px',
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
        className="mr-4"
      />
      <div>
        <h6 className="h6">{title}</h6>
        <h6 className="small text-muted">{createdSince}</h6>
      </div>
    </div>
  );
}
