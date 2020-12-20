import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signOutUser } from '../../store/actions/user';
import '../../utils/styles/scss/Header.scss';

export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onSignOut = () => {
    dispatch(signOutUser()).then(() => {
      history.push('/login');
    });
  };

  return (
    <div className="header">
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
          <ul>
            <li>
              <Link to="/">{user.fullName}</Link>
            </li>
            <li>
              <a href="#" onClick={onSignOut}>
                Sign Out
              </a>
            </li>
          </ul>
        )}
        {/* <img src="/media/menu-icon.png" width="auto" height="17px" alt="menu" /> */}
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
