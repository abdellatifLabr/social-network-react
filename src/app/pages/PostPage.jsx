import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Image, Row, Col } from 'react-bootstrap';

import Loading from '../components/Loading';
import PostCard from '../components/PostCard';

const POST_QUERY = gql`
  query Post($id: ID!) {
    post(id: $id) {
      id
      title
      summary
      imageUrl
      createdSince
      user {
        id
        fullName
        image
      }
      sections {
        count
        edges {
          node {
            type
            content
            fileUrl
            order
          }
        }
      }
    }
  }
`;

export default function PostPage() {
  const { id } = useParams();
  const { loading, data } = useQuery(POST_QUERY, {
    variables: { id },
  });

  if (loading) return <Loading />;

  const { post } = data;

  const getSectionComponent = ({ type, content, fileUrl }) => {
    if (type === 'TEXT') {
      return <p>{content}</p>;
    }

    if (type === 'IMAGE') {
      return <Image src={fileUrl} width="100%" />;
    }

    if (type === 'VIDEO') {
      return (
        <video src={fileUrl}>
          <track kind="captions" />
        </video>
      );
    }
  };

  return (
    post && (
      <div className="mx-5 mt-5">
        <div className="pb-2 pb-lg-4">
          <h1 className="display-4 mb-2 font-weight-bold">{post.title}</h1>
          <div className="d-flex align-items-center">
            <div className="mr-2">
              <div style={{ width: '50px', height: '50px' }}>
                <img
                  src={post.user.image || '/media/avatar-img.png'}
                  height="100%"
                  width="100%"
                  alt="avatar"
                />
              </div>
            </div>
            <div>
              <small>
                <div>
                  Posted by <Link to="/">{post.user.fullName}</Link>
                </div>
                <div className="text-secondary">{post.createdSince} ago</div>
              </small>
            </div>
          </div>
        </div>
        <hr />
        <div className="row py-3">
          <div className="col-12">
            <div className="row small">
              <div className="col-6 col-lg-3 mb-2 mb-lg-0">
                <div className="row">
                  <div
                    className="btn btn-google w-100 text-white d-flex align-items-center"
                    style={{ justifyContent: 'space-evenly' }}
                  >
                    <div>
                      <i className="fa fa-google-plus" aria-hidden="true" />
                    </div>
                    <span
                      style={{
                        width: '1px',
                        backgroundColor: 'white',
                        height: '100%',
                      }}
                    />
                    <span className="small text-center">Share on Google +</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 mb-2 mb-lg-0">
                <div className="row">
                  <div
                    className="btn btn-facebook w-100 text-white d-flex align-items-center"
                    style={{ justifyContent: 'space-evenly' }}
                  >
                    <div>
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </div>
                    <span
                      style={{
                        width: '1px',
                        backgroundColor: 'white',
                        height: '100%',
                      }}
                    />
                    <span className="small text-center">Share on Facebook</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 mb-2 mb-lg-0">
                <div className="row">
                  <div
                    className="btn btn-twitter w-100 text-white d-flex align-items-center"
                    style={{ justifyContent: 'space-evenly' }}
                  >
                    <div>
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </div>
                    <span
                      style={{
                        width: '1px',
                        backgroundColor: 'white',
                        height: '100%',
                      }}
                    />
                    <span className="small text-center">Share on Twitter</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 mb-2 mb-lg-0">
                <div className="row">
                  <div
                    className="btn btn-whatsapp w-100 text-center text-white d-flex align-items-center"
                    style={{ justifyContent: 'space-evenly' }}
                  >
                    <div>
                      <i className="fa fa-whatsapp " aria-hidden="true" />
                    </div>
                    <span
                      style={{
                        width: '1px',
                        backgroundColor: 'white',
                        height: '100%',
                      }}
                    />
                    <span className="small  text-center">
                      Share on Whatsapp
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Image src={post.imageUrl} className="w-100 mb-4" />
        <div className="post-body pb-1">
          <p>{post.summary}</p>
          {post.sections.edges
            .map((edge) => edge.node)
            .map(getSectionComponent)}
        </div>
        <div>
          <h4 className="font-weight-bold text-uppercase my-4">
            Suggested Posts
          </h4>
          <SuggestedPosts postId={post.id} userId={post.user.id} />
        </div>
      </div>
    )
  );
}

const SUGGESTED_POSTS_QUERY = gql`
  query SuggestedPosts($userId: ID!, $postId: String!) {
    posts(user_Id: $userId, last: 4, before: $postId) {
      edges {
        node {
          id
          title
          summary
          imageUrl
          createdSince
          user {
            fullName
            image
          }
        }
      }
    }
  }
`;

function SuggestedPosts({ userId, postId }) {
  const { loading, data } = useQuery(SUGGESTED_POSTS_QUERY, {
    variables: { userId, postId },
  });

  if (loading) return <Loading />;

  const { posts } = data;

  return (
    <Row>
      {posts.edges
        .map((edge) => edge.node)
        .map((post, index) => (
          <Col key={index.toString()} md={4}>
            <PostCard post={post} />
          </Col>
        ))}
    </Row>
  );
}
