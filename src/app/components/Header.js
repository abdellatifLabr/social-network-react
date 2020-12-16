import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <div className="d-flex justify-content-between py-lg-4 py-2">
      <Link to="/">
        <img src="/media/logo.png" width={50} height="auto" alt="app logo" />
      </Link>
      <img src="/media/menu-icon.png" width="auto" height="17px" alt="menu" />
    </div>
    <div className="pb-2 pb-4">
      <img
        style={{ maxHeight: '280px' }}
        src="/media/banner.png"
        width="100%"
        height="100%"
        alt="bannerImage"
      />
    </div>
  </div>
);

export default Header;
