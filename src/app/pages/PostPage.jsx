import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Image, Row, Col, Button } from 'react-bootstrap';

import Loading from '../components/Loading';
import PostCard from '../components/PostCard';
import RightSideBar from '../components/HomePage/HomePageBody/PageFilters/RightSideBar';
import SinglePostComments from '../components/HomePage/HomePageBody/PageContent/SinglePost/SinglePostComments';

const POST_QUERY = gql`
  query Post($id: ID!) {
    post(id: $id) {
      pk
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

const REMOVE_POST_MUTATION = gql`
  mutation DeletePost($id: ID!) {
    deletePost(input: { id: $id }) {
      success
      errors
    }
  }
`;

export default function PostPage() {
  const user$ = useSelector((state) => state.user);
  const { id } = useParams();
  const history = useHistory();
  const { loading, data } = useQuery(POST_QUERY, {
    variables: { id },
  });
  const [removePost] = useMutation(REMOVE_POST_MUTATION, {
    onCompleted: ({ deletePost }) => {
      if (deletePost.success) history.push('/');
    },
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

  const removePostClick = () => {
    const yes = confirm('Are you sure you want to remove this post?');
    if (!yes) return;

    removePost({
      variables: { id: post.pk },
    });
  };

  return (
    post && (
      <Row>
        <Col md={12}>
          <div className="pb-2 pb-4">
            <img
              style={{ maxHeight: '280px' }}
              src="/media/banner.png"
              width="100%"
              height="100%"
              alt="bannerImage"
            />
          </div>
        </Col>
        <Col md={12}>
          <Row className="mx-4">
            <Col md={9}>
              <div className="pr-2">
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1">
                    <h1 className="display-4 mb-2 font-weight-bold">
                      {post.title}
                    </h1>
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
                            Posted by{' '}
                            <Link to={`/profile/${post.user.id}`}>
                              {post.user.fullName}
                            </Link>
                          </div>
                          <div className="text-secondary">
                            {post.createdSince} ago
                          </div>
                        </small>
                      </div>
                    </div>
                  </div>
                  <div>
                    {user$ && user$.id === post.user.id && (
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={removePostClick}
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                </div>
                <hr />
                <SocialShareIcons />
                <hr />
                <Image src={post.imageUrl} className="w-100 mb-4" />
                <div className="post-body pb-1">
                  <p>{post.summary}</p>
                  {post.sections.edges
                    .map((edge) => edge.node)
                    .map(getSectionComponent)}
                </div>
              </div>
              <div>
                <SinglePostComments />
              </div>
            </Col>
            <Col md={3}>
              <RightSideBar />
            </Col>
            <Col md={12}>
              <SuggestedPosts postId={post.id} userId={post.user.id} />
            </Col>
          </Row>
        </Col>
        <Col md={12} className="mt-5">
          <div
            className="container-fluid py-5"
            style={{ backgroundColor: '#e8edef' }}
          >
            <div className="row">
              <div className="col-12">
                <div className="footer-heading footer-sec py-2 py-lg-5">
                  <div className="w-12 ">
                    <hr />
                    <h6 className="h6 d-inline float-right text-uppercase font-weight-bold">
                      Tips & Tricks
                    </h6>
                  </div>
                  <div className="d-flex w-100">
                    <h1 className="display-3 font-weight-bold">
                      Jugband Blues
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
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
      <Col md={12}>
        <h4 className="font-weight-bold mb-4 mt-5">Popular Posts</h4>
      </Col>
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

function SocialShareIcons() {
  return (
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
                <span className="small  text-center">Share on Whatsapp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
