import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Image, Button } from 'react-bootstrap';

import { closeMenu } from '../../store/actions/menu';
import { signOutUser } from '../../store/actions/user';

export default function Menu() {
  const history = useHistory();
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.menu);
  const user = useSelector((state) => state.user);

  const onSignOut = async () => {
    await dispatch(closeMenu());
    dispatch(signOutUser()).then(() => {
      history.push('/login');
    });
  };

  return (
    <div
      className="position-fixed shadow flex flex-direction-columns"
      style={{
        width: '25%',
        backgroundColor: '#fff',
        zIndex: '1',
        top: '0',
        bottom: '0',
        right: showMenu ? '0' : '-25%',
        transition: 'right linear 0.2s 0s',
      }}
    >
      <div className="p-3">
        <button
          type="button"
          className="close float-left"
          aria-label="Close"
          onClick={() => dispatch(closeMenu())}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="text-center mt-5">
        {user && (
          <div>
            <div className="mb-3">
              <Image src={user.image || '/media/avatar-img.png'} width="100" />
            </div>
            <div className="mb-3">
              <Link to="/profile" onClick={() => dispatch(closeMenu())}>
                {user.fullName}
              </Link>
            </div>
            <div>
              <Button variant="link" className="p-0 m-0" onClick={onSignOut}>
                Sign Out
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
