import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, CardColumns } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";

import PostCard from "../components/PostCard";
import Loading from "../components/Loading";

const POSTS_QUERY = gql`
  query Posts {
    posts {
      count
      edges {
        node {
          id
          title
          summary
          imageUrl
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
  const { loading, data, refetch } = useQuery(POSTS_QUERY);

  useEffect(() => {
    refetch();
  }, []);

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
        {data.posts.count === 0 && (
          <h4 className="text-secondary text-center h-25">
            There's no posts yet, <Link to="/post/create">Create one</Link>.
          </h4>
        )}
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
