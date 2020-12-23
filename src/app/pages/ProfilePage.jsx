import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Image, Button, CardColumns } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { gql, useQuery } from '@apollo/client';

import PostCard from '../components/PostCard';

const PROFILE_QUERY = gql`
  query Profile($id: ID!) {
    user(id: $id) {
      fullName
      username
      image
      cover
      posts {
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
  }
`;

export default function ProfilePage() {
  const user$ = useSelector((state) => state.user);
  const { id } = useParams();
  const { loading, error, data } = useQuery(PROFILE_QUERY, {
    variables: { id: id || user$.id },
  });

  if (loading) return <div>loading...</div>;
  if (error) return <div>error!!!</div>;

  const { user } = data;

  return (
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
        <CardColumns>
          {user.posts.edges
            .map((edge) => edge.node)
            .map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
        </CardColumns>
      </Col>
    </Row>
  );
}
