import createReducer from "../common/createReducer";

var reducers = {
  GO_TO: (state, action) => {
    switch(action.pageId){
      case "SPLASH":return {
        pageId:action.pageId,
        currentData:{},
      }
      default: return state;
    }
    return { ...state, pageId: action.pageId};
  }
};

const initialState = {
  pageId: "",
  currentData: {},
  menuItems: []
};

export default createReducer(initialState, reducers);
