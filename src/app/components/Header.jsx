import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { openMenu } from '../../store/actions/menu';
import '../../utils/styles/scss/Header.scss';

export default function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="header mb-5">
      <div className="d-flex justify-content-between align-items-center py-lg-4 py-2">
        <Link to="/">
          <img src="/media/logo.png" width={50} height="auto" alt="app logo" />
        </Link>

        {!user && (
          <ul>
            <li>
              <Link to="/login">
                <Button variant="outline-dark">Login</Button>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <Button variant="outline-dark">Register</Button>
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
    </div>
  );
}
