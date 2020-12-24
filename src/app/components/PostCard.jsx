import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function PostCard({ post }) {
  const history = useHistory();
  const { id, title, summary, imageUrl, createdSince, user } = post;

  const gotoPost = (postId) => {
    history.push(`/post/${postId}`);
  };

  return (
    <Card style={{ cursor: 'pointer' }}>
      <Card.Img onClick={() => gotoPost(id)} variant="top" src={imageUrl} />
      <Card.Body onClick={() => gotoPost(id)}>
        <Card.Title className="my-0">{title}</Card.Title>
        <Card.Text>{summary}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>
          Posted by <Link to={`/profile/${user.id}`}>{user.fullName}</Link>
          <br />
          <span className="text-secondary">{createdSince}</span>
        </small>
      </Card.Footer>
    </Card>
  );
}
