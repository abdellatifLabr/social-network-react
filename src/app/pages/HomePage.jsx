import React from 'react';
import { Row, Col, CardColumns } from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';

import PostCard from '../components/PostCard';
import Loading from '../components/Loading';

const POSTS_QUERY = gql`
  query Posts {
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
`;

export default function HomePage() {
  const { loading, data } = useQuery(POSTS_QUERY);

  if (loading) return <Loading />;

  return (
    <Row>
      <Col md={12}>
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="font-weight-bold text-uppercase mb-4">
              Recent Posts
            </h4>
          </div>
        </div>
      </Col>
      <Col md={12}>
        <CardColumns>
          {data.posts.edges
            .map((edge) => edge.node)
            .map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
        </CardColumns>
      </Col>
    </Row>
  );
}
