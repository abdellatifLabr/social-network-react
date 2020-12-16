import React from 'react';
import SubFooter from './Footer/SubFooter';

const Footer = () => (
  <div className="home-page">
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
              <h1 className="display-3 font-weight-bold">Jugband Blues</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SubFooter />
  </div>
);

export default Footer;
