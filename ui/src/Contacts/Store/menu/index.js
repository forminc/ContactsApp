import createReducer from "../common/createReducer";

var reducers = {
  SET_MENU_ITEMS: (state, action) => {
    return {
      ...state,
      menuItems: action.menuItems,
      showMenu: !action.menuItems.length
    };
  },
  SHOW_MENU: (state, action) => {
    return {
      ...state,
      showMenu: true
    };
  },
  HIDE_MENU: (state, action) => {
    return {
      ...state,
      showMenu: false
    };
  }
};

const initialState = {
  menuItems: [],
  showMenu: false
};

export default createReducer(initialState, reducers);
