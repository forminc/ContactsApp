import createReducer from "../common/createReducer";

var reducers = {
  SET_PROPERTY: (state, action) => {
      return{
        ...state,
        applicationProperties:{
          ...state.applicationProperties,
          [action.property]:action.value
        }
      }
  }
};

const initialState = {
  pageId: "",
  currentData: {},
  applicationProperties:{}
};

export default createReducer(initialState, reducers);
