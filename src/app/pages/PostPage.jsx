import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Image } from 'react-bootstrap';

import Loading from '../components/Loading';

const POST_QUERY = gql`
  query Post($id: ID!) {
    post(id: $id) {
      title
      imageUrl
      body
      createdSince
      user {
        fullName
        image
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
          <p>{post.body}</p>
        </div>
      </div>
    )
  );
}
