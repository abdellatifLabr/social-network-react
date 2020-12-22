import React from 'react';
import { Row, Col, Image, Button, CardColumns } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { gql, useQuery } from '@apollo/client';

import PostCard from '../components/PostCard';

const POSTS_QUERY = gql`
  query MyPosts {
    myPosts {
      edges {
        node {
          id
          title
          imageUrl
          summary
          createdSince
          user {
            id
            fullName
          }
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
          <Image src={user.cover || '/media/banner.png'} className="w-100" />
          <Image
            src={user.image || '/media/avatar-img.png'}
            width="200"
            style={{ marginTop: '-120px' }}
          />
          <h1 className="mt-3 mb-1">{user.fullName}</h1>
          <small>@{user.username}</small>
        </Col>
        <Col md={12}>
          <div className="d-flex justify-content-between mb-4">
            <div>
              <h3 className="font-weight-bold text-uppercase">My Posts</h3>
            </div>
            <div>
              <Button>+ New Post</Button>
            </div>
          </div>
          {loading ? (
            <div>loading...</div>
          ) : (
            !error && (
              <CardColumns>
                {data.myPosts.edges
                  .map((edge) => edge.node)
                  .map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
              </CardColumns>
            )
          )}
        </Col>
      </Row>
    )
  );
}
