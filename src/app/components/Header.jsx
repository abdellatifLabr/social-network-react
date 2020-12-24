import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { openMenu } from '../../store/actions/menu';
import '../../utils/styles/scss/Header.scss';

export default function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="header mb-5">
      <div className="d-flex justify-content-between py-lg-4 py-2">
        <Link to="/">
          <img src="/media/logo.png" width={50} height="auto" alt="app logo" />
        </Link>

        {!user && (
          <ul>
            <li>
              <Link to="/login">
                <button type="button">Login</button>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button type="button">Register</button>
              </Link>
            </li>
          </ul>
        )}

        {user && (
          <img
            src="/media/menu-icon.png"
            style={{ cursor: 'pointer' }}
            width="auto"
            height="17px"
            alt="menu"
            onClick={() => dispatch(openMenu())}
          />
        )}
      </div>
      {/* <div className="pb-2 pb-4">
        <img
          style={{ maxHeight: '280px' }}
          src="/media/banner.png"
          width="100%"
          height="100%"
          alt="bannerImage"
        />
      </div> */}
    </div>
  );
}
