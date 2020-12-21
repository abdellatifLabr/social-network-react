import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { gql, useQuery } from '@apollo/client';

const POSTS_QUERY = gql`
  query MyPosts {
    myPosts {
      edges {
        node {
          id
          title
          summary
          createdSince
        }
      }
    }
  }
`;

export default function ProfilePage() {
  const user = useSelector((state) => state.user);
  const { loading, error, data } = useQuery(POSTS_QUERY);

  return (
    user && (
      <Row>
        <Col md={12} className="text-center mb-5">
          <Image src={user.image || '/media/avatar-img.png'} width="200" />
          <h1 className="mt-3 mb-1">{user.fullName}</h1>
          <small>@{user.username}</small>
        </Col>
        <Col md={12}>
          <div className="d-flex justify-content-between">
            <div>
              <h2 className="font-weight-bold text-uppercase mb-4">My Posts</h2>
            </div>
            <div>
              <Button>+ New Post</Button>
            </div>
          </div>
          {loading ? (
            <div>loading...</div>
          ) : (
            !error &&
            data.myPosts.edges
              .map((edge) => edge.node)
              .map((post) => (
                <div className="mb-4">
                  <h3 className="my-0">{post.title}</h3>
                  <small className="text-secondary">
                    Created {post.createdSince} ago.
                  </small>
                  <p>
                    {post.summary}...
                    <Link to={`/post/${post.id}`}>Read more</Link>
                  </p>
                </div>
              ))
          )}
        </Col>
      </Row>
    )
  );
}
