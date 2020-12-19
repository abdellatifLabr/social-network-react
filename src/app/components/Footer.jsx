import React from 'react';

export default function Footer() {
  return (
    <div className="home-page">
      {/* <div
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
                <h1 className="display-3 font-weight-bold">Jugband Blues</h1>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <SubFooter />
    </div>
  );
}

function SubFooter() {
  return (
    <div className="mt-2">
      <div
        className="mt-5 mb-2 p-4 p-lg-5 d-flex align-items-center flex-column justify-content-center"
        style={{ backgroundColor: '#f4f7fc' }}
      >
        <img src="/media/logo.png" width={35} alt="logo" />
        <div className="social-icons">
          <i className="fa fa-facebook" aria-hidden="true" />
          <i className="fa fa-twitter" aria-hidden="true" />
          <i className="fa fa-pinterest-p" aria-hidden="true" />
          <i className="fa fa-dribbble" aria-hidden="true" />
          <i className="fa fa-rss" aria-hidden="true" />
        </div>
      </div>
      <div className="my-3 p-1 p-lg-2 small d-flex align-items-center justify-content-center">
        <span>&copy; samzwa25 . All rights reserved. </span>
      </div>
    </div>
  );
}
