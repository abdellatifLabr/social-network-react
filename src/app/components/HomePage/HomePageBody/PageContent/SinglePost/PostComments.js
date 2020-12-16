import React, { useState } from 'react';
import { Collapse } from 'reactstrap';

const PostComments = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(true);
  const toggleClose = () => setIsOpen(false);

  return (
    <div className="row mt-4">
      <div className="col-2 col-lg-1">
        <img src="/media/card-img.png" className="img-avatar" alt="UserImg" />
      </div>
      <div className="col-10 col-lg-11">
        <div className="post-comments" style={{ fontFamily: 'poppins' }}>
          <div>
            <h6 className="h6 d-inline">
              Jhon Doe
              <span className="small text-muted"> - 12/04/2020 at 12:45</span>
            </h6>
          </div>
          <p style={{ fontFamily: 'poppins' }} className="small mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium animi asperiores, assumenda consectetur culpa cum
            dolorem doloremque enim harum id in laborum minima odit omnis
            placeat porro provident quae quod quos reiciendis vel, veritatis
            voluptatum. Alias possimus quidem vel voluptas.
          </p>
        </div>
        <div className="d-flex align-items-center text-success commentsItems">
          <span onClick={toggleClose} className="mr-2 d-flex">
            <img src="/media/up-icon.png" alt="" />
          </span>
          <span
            onClick={toggleOpen}
            className="mr-2 border-left border-success pl-2 d-flex align-items-center"
          >
            <img src="/media/down-icon.png" alt="" />
            <span className="ml-2 small text-muted">Reply</span>
          </span>

          <span className="mr-2 small text-muted">Share &gt;</span>
        </div>
        <div className="mt-3">
          <hr />
        </div>

        <div>
          <Collapse isOpen={isOpen}>
            <div className="row mt-4">
              <div className="col-2 col-lg-1">
                <img
                  src="/media/card-img.png"
                  className="img-avatar"
                  alt="UserImg"
                />
              </div>
              <div className="col-10 col-lg-11">
                <div
                  className="post-comments"
                  style={{ fontFamily: 'poppins' }}
                >
                  <div>
                    <h6 className="h6 d-inline">
                      Jhon Doe
                      <span className="small text-muted">
                        - 12/04/2020 at 12:45
                      </span>
                    </h6>
                  </div>
                  <p style={{ fontFamily: 'poppins' }} className="small mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium animi asperiores, assumenda consectetur culpa
                    cum dolorem doloremque enim harum id in laborum minima odit
                    omnis placeat porro provident quae quod quos reiciendis vel,
                    veritatis voluptatum. Alias possimus quidem vel voluptas.
                  </p>
                </div>
                <div className="d-flex align-items-center text-success commentsItems">
                  <span onClick={toggleClose} className="mr-2 d-flex">
                    <img src="/media/up-icon.png" alt="" />
                  </span>
                  <span
                    onClick={toggleOpen}
                    className="mr-2 border-left border-success pl-2 d-flex align-items-center"
                  >
                    <img src="/media/down-icon.png" alt="" />
                    <span className="ml-2 small text-muted">Reply</span>
                  </span>

                  <span className="mr-2 small text-muted">Share &gt;</span>
                </div>
                <div className="mt-3">
                  <hr />
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default PostComments;
