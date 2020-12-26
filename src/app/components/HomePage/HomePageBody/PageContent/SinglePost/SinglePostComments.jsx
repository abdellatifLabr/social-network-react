import React from 'react';

import PostComments from './PostComments';

export default function SinglePostComments() {
  return (
    <div className="mt-4">
      <h5 className="h5 font-weight-bold">
        <span>2</span> Comments
      </h5>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-2 col-lg-1">
            <img
              src="/media/card-img.png"
              className="img-avatar w-100"
              alt="UserImg"
            />
          </div>
          <div className="col-10 col-lg-11">
            <div className="post-comments" style={{ fontFamily: 'poppins' }}>
              <div>
                <h6 className="h6 d-inline">
                  Jhon Doe{' '}
                  <span className="small text-muted"> - Right Now</span>
                </h6>
              </div>
              <textarea
                className="w-100 border-success my-3"
                rows={3}
                style={{ resize: 'none' }}
              />
              <button
                type="button"
                style={{ backgroundColor: 'white' }}
                className="btn float-right text-capitalize small font-weight-bold btn-secondary rounded-0 px-4"
              >
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <hr />
        </div>
        <PostComments />
      </div>
    </div>
  );
}
