import React from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import { Row, Col, Image, Button, CardColumns } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { gql, useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

import PostCard from '../components/PostCard';
import Loading from '../components/Loading';

const PROFILE_QUERY = gql`
  query Profile($id: ID!) {
    user(id: $id) {
      fullName
      username
      image
      cover
      posts {
        count
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
    variables: { id: id || (user$ && user$.id) },
  });

  if (loading) return <Loading />;
  if (error) return <div>error!!!</div>;

  const { user } = data;

  if (user$ && id === user$.id) return <Redirect to="/profile" />;

  return (
    <Row>
      <Col md={12} className="text-center mb-5">
        <div className="position-relative">
          <Image src={user.cover || '/media/banner.png'} className="w-100" />
          <div
            className="position-absolute"
            style={{ right: '0', bottom: '0' }}
          >
            <Button variant="link" size="lg">
              <FontAwesomeIcon icon={faCamera} />
            </Button>
          </div>
        </div>
        <div
          className="position-relative w-25 mx-auto"
          style={{ marginTop: '-15%' }}
        >
          <Image
            src={user.image || '/media/avatar-img.png'}
            className="w-100"
          />
          <div
            className="position-absolute"
            style={{ right: '0', bottom: '0' }}
          >
            <Button variant="link" size="lg" className="p-0">
              <FontAwesomeIcon icon={faCamera} />
            </Button>
          </div>
        </div>
        <h1 className="mt-3 mb-1">{user.fullName}</h1>
        <small>@{user.username}</small>
        <Button size="sm" className="d-block mx-auto mt-3">
          Update Profile
        </Button>
      </Col>
      <Col md={12}>
        <div className="d-flex justify-content-between mb-4">
          <div>
            <h3 className="font-weight-bold text-uppercase">My Posts</h3>
          </div>
          {!id && (
            <div>
              <Link to="/post/create">
                <Button>+ New Post</Button>
              </Link>
            </div>
          )}
        </div>
        {user.posts.count === 0 && (
          <h4 className="text-secondary text-center h-25">
            There's no posts yet, <Link to="/post/create">Create one</Link>.
          </h4>
        )}
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
