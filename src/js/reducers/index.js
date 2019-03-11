import { ADD_ARTICLE, ADD_TRIANGLE } from "../constants/action-types";

const initialState = {
  articles: [],
  triangles: []
};

function rootReducer(state = initialState, action) {
  console.log("action  " + action);
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === ADD_TRIANGLE) {
    var data = Object.assign({}, state, {
      triangles: state.triangles.concat(action.payload)
    });
    console.log("add triangle");
    return data;
  }
  return state;
}
export default rootReducer;
