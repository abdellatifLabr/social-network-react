import React from 'react';

export default function Subfooter() {
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
