import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';

export default function PostCard({ post }) {
  const history = useHistory();
  const { id, title, summary, imageUrl, createdSince, user } = post;

  const gotoPost = (postId) => {
    history.push(`/post/${postId}`);
  };

  return (
    <Card style={{ cursor: 'pointer' }}>
      <Card.Header>
        <div className="d-flex align-items-center">
          <div className="mr-2">
            <Image src={user.image || '/media/avatar-img.png'} width="35" />
          </div>
          <div className="flex-grow-1 small">
            <Link to={`/profile/${user.id}`} className="d-block">
              {user.fullName}
            </Link>
            <span className="text-secondary">{createdSince} ago</span>
          </div>
        </div>
      </Card.Header>
      <Card.Img onClick={() => gotoPost(id)} variant="top" src={imageUrl} />
      <Card.Body onClick={() => gotoPost(id)}>
        <Card.Title className="my-0">{title}</Card.Title>
        <Card.Text>{summary}</Card.Text>
      </Card.Body>
    </Card>
  );
}
