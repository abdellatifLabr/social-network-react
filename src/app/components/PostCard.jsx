import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function PostCard({ post }) {
  const history = useHistory();
  const { id, title, imageUrl, summary, createdSince, user } = post;

  const gotoPost = (postId) => {
    history.push(`/post/${postId}`);
  };

  return (
    <Card>
      <Card.Img onClick={() => gotoPost(id)} variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{summary}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>
          Posted by <Link to={`/profile/${user.id}`}>{user.fullName}</Link>{' '}
          {createdSince} ago
        </small>
      </Card.Footer>
    </Card>
  );
}
