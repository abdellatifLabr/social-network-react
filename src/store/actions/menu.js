export const types = {
  OPEN_MENU: 'OPEN_MENU',
  CLOSE_MENU: 'CLOSE_MENU',
  TOGGLE_MENU: 'TOGGLE_MENU',
};

export const openMenu = () => async (dispatch) => {
  dispatch({
    type: types.OPEN_MENU,
    payload: true,
  });
};

export const closeMenu = () => async (dispatch) => {
  dispatch({
    type: types.CLOSE_MENU,
    payload: false,
  });
};

export const toggleMenu = () => async (dispatch) => {
  dispatch({
    type: types.TOGGLE_MENU,
    payload: null,
  });
};
